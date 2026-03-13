import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { UserPlus, Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [form, setForm] = useState({
    full_name: "",
    organization: "",
    usn: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.mobile.length < 10) {
      toast({ title: "Invalid mobile number", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          full_name: form.full_name,
          organization: form.organization,
          usn: form.usn,
          mobile: form.mobile,
        },
        emailRedirectTo: window.location.origin,
      },
    });
    if (error) {
      toast({ title: "Registration failed", description: error.message, variant: "destructive" });
      setLoading(false);
      return;
    }

    // Also create a registration record
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await supabase.from("registrations").insert({
        user_id: user.id,
        full_name: form.full_name,
        organization: form.organization,
        usn: form.usn,
        mobile: form.mobile,
        email: form.email,
      });
    }

    setLoading(false);
    toast({ title: "Registration successful!", description: "Welcome to the Quantum Student Summit." });
    navigate("/");
  };

  const fields = [
    { key: "full_name", label: "Full Name", type: "text", placeholder: "John Doe" },
    { key: "organization", label: "Organization / College", type: "text", placeholder: "VTU Belagavi" },
    { key: "usn", label: "USN (University Seat Number)", type: "text", placeholder: "1VT22CS001" },
    { key: "mobile", label: "Mobile Number", type: "tel", placeholder: "+91 98765 43210" },
    { key: "email", label: "Email (Gmail)", type: "email", placeholder: "you@gmail.com" },
    { key: "password", label: "Password", type: "password", placeholder: "Min 6 characters" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 flex items-center justify-center min-h-screen py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg mx-4"
        >
          <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-card">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4"
              >
                <UserPlus className="w-8 h-8 text-gold" />
              </motion.div>
              <h1 className="font-heading text-2xl font-bold text-foreground">Register for the Summit</h1>
              <p className="text-muted-foreground text-sm mt-1">Fill in your details to join the Quantum Student Summit</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              {fields.map((f) => (
                <div key={f.key}>
                  <Label htmlFor={f.key}>{f.label}</Label>
                  {f.key === "password" ? (
                    <div className="relative">
                      <Input
                        id={f.key}
                        type={showPw ? "text" : f.type}
                        placeholder={f.placeholder}
                        value={(form as any)[f.key]}
                        onChange={update(f.key)}
                        required
                        minLength={6}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPw(!showPw)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  ) : (
                    <Input
                      id={f.key}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={(form as any)[f.key]}
                      onChange={update(f.key)}
                      required
                    />
                  )}
                </div>
              ))}
              <Button type="submit" variant="gold" className="w-full" size="lg" disabled={loading}>
                {loading ? "Registering..." : "Register Now"}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-accent hover:text-gold font-medium transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
