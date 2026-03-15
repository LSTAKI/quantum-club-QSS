import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    // Verify caller is admin
    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data: { user: caller } } = await supabase.auth.getUser(token);
    if (!caller) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });

    const { data: callerRole } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", caller.id)
      .eq("role", "admin")
      .maybeSingle();
    if (!callerRole) return new Response(JSON.stringify({ error: "Admin only" }), { status: 403, headers: corsHeaders });

    const { action, email } = await req.json();

    if (action === "list") {
      // List all admins with their emails
      const { data: roles } = await supabase.from("user_roles").select("user_id, role").eq("role", "admin");
      if (!roles?.length) return new Response(JSON.stringify({ admins: [] }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });

      const adminList = [];
      for (const r of roles) {
        const { data: { user } } = await supabase.auth.admin.getUserById(r.user_id);
        adminList.push({ user_id: r.user_id, email: user?.email || "unknown" });
      }
      return new Response(JSON.stringify({ admins: adminList }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    if (action === "grant") {
      // Find user by email
      const { data: { users } } = await supabase.auth.admin.listUsers();
      const target = users.find((u: any) => u.email === email);
      if (!target) return new Response(JSON.stringify({ error: "User not found. They must register first." }), { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } });

      const { error } = await supabase.from("user_roles").upsert({ user_id: target.id, role: "admin" }, { onConflict: "user_id,role" });
      if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      return new Response(JSON.stringify({ success: true, email }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    if (action === "revoke") {
      const { data: { users } } = await supabase.auth.admin.listUsers();
      const target = users.find((u: any) => u.email === email);
      if (!target) return new Response(JSON.stringify({ error: "User not found" }), { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } });

      // Prevent revoking own admin
      if (target.id === caller.id) return new Response(JSON.stringify({ error: "Cannot revoke your own admin access" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });

      await supabase.from("user_roles").delete().eq("user_id", target.id).eq("role", "admin");
      return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), { status: 400, headers: corsHeaders });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), { status: 500, headers: corsHeaders });
  }
});
