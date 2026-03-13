import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2, Save, LogOut, Users, Mic, CalendarDays, HelpCircle, MessageSquare, Award, UserCheck } from "lucide-react";
import Navbar from "@/components/Navbar";

type CrudItem = Record<string, any>;

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/login");
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-12 container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground text-sm">Manage all summit content</p>
          </div>
          <Button variant="outline" onClick={() => { signOut(); navigate("/"); }}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </motion.div>

        <Tabs defaultValue="speakers" className="w-full">
          <TabsList className="flex flex-wrap gap-1 h-auto bg-muted/50 p-1 rounded-xl">
            <TabsTrigger value="speakers" className="gap-1"><Mic className="w-4 h-4" />Speakers</TabsTrigger>
            <TabsTrigger value="events" className="gap-1"><CalendarDays className="w-4 h-4" />Events</TabsTrigger>
            <TabsTrigger value="team" className="gap-1"><Users className="w-4 h-4" />Team</TabsTrigger>
            <TabsTrigger value="sponsors" className="gap-1"><Award className="w-4 h-4" />Sponsors</TabsTrigger>
            <TabsTrigger value="faqs" className="gap-1"><HelpCircle className="w-4 h-4" />FAQs</TabsTrigger>
            <TabsTrigger value="schedule" className="gap-1"><CalendarDays className="w-4 h-4" />Schedule</TabsTrigger>
            <TabsTrigger value="registrations" className="gap-1"><UserCheck className="w-4 h-4" />Registrations</TabsTrigger>
            <TabsTrigger value="messages" className="gap-1"><MessageSquare className="w-4 h-4" />Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="speakers">
            <CrudManager
              table="speakers"
              fields={[
                { key: "name", label: "Name", type: "text" },
                { key: "role", label: "Role", type: "text" },
                { key: "quote", label: "Affiliation/Quote", type: "text" },
                { key: "image_url", label: "Image URL", type: "text" },
                { key: "linkedin_url", label: "LinkedIn URL", type: "text" },
                { key: "display_order", label: "Order", type: "number" },
              ]}
            />
          </TabsContent>

          <TabsContent value="events">
            <CrudManager
              table="events"
              fields={[
                { key: "title", label: "Title", type: "text" },
                { key: "description", label: "Description", type: "textarea" },
                { key: "image_url", label: "Image URL", type: "text" },
                { key: "topics_url", label: "Topics URL", type: "text" },
                { key: "rulebook_url", label: "Rulebook URL", type: "text" },
                { key: "display_order", label: "Order", type: "number" },
              ]}
            />
          </TabsContent>

          <TabsContent value="team">
            <CrudManager
              table="team_members"
              fields={[
                { key: "name", label: "Name", type: "text" },
                { key: "role", label: "Role", type: "text" },
                { key: "committee", label: "Committee", type: "text" },
                { key: "quote", label: "Quote", type: "text" },
                { key: "image_url", label: "Image URL", type: "text" },
                { key: "email", label: "Email", type: "text" },
                { key: "phone", label: "Phone", type: "text" },
                { key: "linkedin_url", label: "LinkedIn URL", type: "text" },
                { key: "display_order", label: "Order", type: "number" },
              ]}
            />
          </TabsContent>

          <TabsContent value="sponsors">
            <CrudManager
              table="sponsors"
              fields={[
                { key: "name", label: "Name", type: "text" },
                { key: "description", label: "Description", type: "textarea" },
                { key: "logo_url", label: "Logo URL", type: "text" },
                { key: "website_url", label: "Website URL", type: "text" },
                { key: "tier", label: "Tier (title/platinum/gold/silver/partner)", type: "text" },
                { key: "display_order", label: "Order", type: "number" },
              ]}
            />
          </TabsContent>

          <TabsContent value="faqs">
            <CrudManager
              table="faqs"
              fields={[
                { key: "question", label: "Question", type: "text" },
                { key: "answer", label: "Answer", type: "textarea" },
                { key: "display_order", label: "Order", type: "number" },
              ]}
            />
          </TabsContent>

          <TabsContent value="schedule">
            <CrudManager
              table="schedule"
              fields={[
                { key: "title", label: "Title", type: "text" },
                { key: "description", label: "Description", type: "text" },
                { key: "start_time", label: "Start Time (ISO)", type: "text" },
                { key: "end_time", label: "End Time (ISO)", type: "text" },
                { key: "location", label: "Location", type: "text" },
                { key: "day_number", label: "Day Number", type: "number" },
                { key: "display_order", label: "Order", type: "number" },
              ]}
            />
          </TabsContent>

          <TabsContent value="registrations">
            <ReadOnlyTable table="registrations" columns={["full_name", "organization", "usn", "mobile", "email", "created_at"]} />
          </TabsContent>

          <TabsContent value="messages">
            <ReadOnlyTable table="contact_messages" columns={["name", "email", "subject", "message", "created_at"]} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Generic CRUD manager component
interface FieldDef {
  key: string;
  label: string;
  type: "text" | "textarea" | "number";
}

const CrudManager = ({ table, fields }: { table: string; fields: FieldDef[] }) => {
  const [items, setItems] = useState<CrudItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<CrudItem>({});
  const [newForm, setNewForm] = useState<CrudItem>({});
  const [showNew, setShowNew] = useState(false);
  const { toast } = useToast();

  const fetchItems = async () => {
    // @ts-ignore - dynamic table access
    const { data } = await (supabase.from(table) as any).select("*").order("display_order");
    if (data) setItems(data as CrudItem[]);
  };

  useEffect(() => { fetchItems(); }, [table]);

  const handleSave = async (id: string) => {
    const updateData: Record<string, any> = {};
    fields.forEach((f) => {
      if (editForm[f.key] !== undefined) {
        updateData[f.key] = f.type === "number" ? Number(editForm[f.key]) : editForm[f.key];
      }
    });
    // @ts-ignore - dynamic table access
    const { error } = await (supabase.from(table) as any).update(updateData).eq("id", id);
    if (error) {
      toast({ title: "Error saving", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Saved!" });
      setEditingId(null);
      fetchItems();
    }
  };

  const handleAdd = async () => {
    const insertData: Record<string, any> = {};
    fields.forEach((f) => {
      if (newForm[f.key]) {
        insertData[f.key] = f.type === "number" ? Number(newForm[f.key]) : newForm[f.key];
      }
    });
    // @ts-ignore - dynamic table access
    const { error } = await (supabase.from(table) as any).insert(insertData);
    if (error) {
      toast({ title: "Error adding", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Added!" });
      setNewForm({});
      setShowNew(false);
      fetchItems();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    // @ts-ignore - dynamic table access
    const { error } = await (supabase.from(table) as any).delete().eq("id", id);
    if (error) {
      toast({ title: "Error deleting", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Deleted" });
      fetchItems();
    }
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-heading text-lg font-semibold text-foreground capitalize">{table.replace("_", " ")}</h3>
        <Button variant="gold" size="sm" onClick={() => setShowNew(!showNew)}>
          <Plus className="w-4 h-4 mr-1" /> Add New
        </Button>
      </div>

      {showNew && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="rounded-xl border border-gold/30 bg-card p-5 space-y-3"
        >
          <h4 className="font-semibold text-foreground">New Entry</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {fields.map((f) => (
              <div key={f.key}>
                <Label className="text-xs">{f.label}</Label>
                {f.type === "textarea" ? (
                  <Textarea
                    value={newForm[f.key] || ""}
                    onChange={(e) => setNewForm({ ...newForm, [f.key]: e.target.value })}
                    rows={2}
                  />
                ) : (
                  <Input
                    type={f.type === "number" ? "number" : "text"}
                    value={newForm[f.key] || ""}
                    onChange={(e) => setNewForm({ ...newForm, [f.key]: e.target.value })}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="gold" size="sm" onClick={handleAdd}><Save className="w-4 h-4 mr-1" />Save</Button>
            <Button variant="outline" size="sm" onClick={() => setShowNew(false)}>Cancel</Button>
          </div>
        </motion.div>
      )}

      <div className="space-y-3">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            className="rounded-xl border border-border/50 bg-card p-5 shadow-card"
          >
            {editingId === item.id ? (
              <div className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  {fields.map((f) => (
                    <div key={f.key}>
                      <Label className="text-xs">{f.label}</Label>
                      {f.type === "textarea" ? (
                        <Textarea
                          value={editForm[f.key] ?? item[f.key] ?? ""}
                          onChange={(e) => setEditForm({ ...editForm, [f.key]: e.target.value })}
                          rows={2}
                        />
                      ) : (
                        <Input
                          type={f.type === "number" ? "number" : "text"}
                          value={editForm[f.key] ?? item[f.key] ?? ""}
                          onChange={(e) => setEditForm({ ...editForm, [f.key]: e.target.value })}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="gold" size="sm" onClick={() => handleSave(item.id)}><Save className="w-4 h-4 mr-1" />Save</Button>
                  <Button variant="outline" size="sm" onClick={() => setEditingId(null)}>Cancel</Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{item.name || item.title || item.question}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.role || item.description || item.answer || ""}
                  </p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm" onClick={() => { setEditingId(item.id); setEditForm(item); }}>
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
        {items.length === 0 && (
          <p className="text-center text-muted-foreground py-8">No items yet. Click "Add New" to get started.</p>
        )}
      </div>
    </div>
  );
};

// Read-only table for registrations and messages
const ReadOnlyTable = ({ table, columns }: { table: string; columns: string[] }) => {
  const [items, setItems] = useState<CrudItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from(table as any).select("*").order("created_at" as any, { ascending: false });
      if (data) setItems(data);
    };
    fetchData();
  }, [table]);

  return (
    <div className="mt-6">
      <h3 className="font-heading text-lg font-semibold text-foreground capitalize mb-4">{table.replace("_", " ")}</h3>
      <div className="overflow-x-auto rounded-xl border border-border/50">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50 border-b border-border/50">
              {columns.map((c) => (
                <th key={c} className="text-left p-3 font-semibold text-foreground capitalize">
                  {c.replace("_", " ")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-border/30 hover:bg-muted/30">
                {columns.map((c) => (
                  <td key={c} className="p-3 text-muted-foreground">
                    {c === "created_at" ? new Date(item[c]).toLocaleDateString() : (item[c] || "—")}
                  </td>
                ))}
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="p-8 text-center text-muted-foreground">
                  No data yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
