"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { LogIn, UserPlus, Mail, Lock, AlertCircle, Loader2 } from "lucide-react";

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const supabase = createClient();

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
                router.push("/");
            } else {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            display_name: email.split("@")[0],
                        },
                        emailRedirectTo: `${window.location.origin}/auth/callback`,
                    },
                });
                if (error) throw error;
                setErrorMessage("Te hemos enviado un correo de confirmación.");
                // O podrías loguearlo directamente si el auto-login está activado en Supabase
            }
        } catch (err: any) {
            setErrorMessage(err.message || "Error al autenticar");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
            <Card className="w-full max-w-md p-8 shadow-xl">
                <div className="mb-8 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        {isLogin ? <LogIn size={24} /> : <UserPlus size={24} />}
                    </div>
                    <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                        {isLogin ? "Bienvenido de nuevo" : "Crea tu cuenta"}
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        {isLogin
                            ? "Accede a CoupleCapital para gestionar tus finanzas"
                            : "Regístrate para empezar a borrar tus deudas"}
                    </p>
                </div>

                {errorMessage && (
                    <div className={`mb-6 flex items-center gap-3 rounded-lg border p-4 text-sm ${errorMessage.includes('confirmación') ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                        {errorMessage.includes('confirmación') ? <Mail size={18} /> : <AlertCircle size={18} />}
                        <p>{errorMessage}</p>
                    </div>
                )}

                <form onSubmit={handleAuth} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Email</label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                <Mail size={18} />
                            </div>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                placeholder="tu@email.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Contraseña</label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                <Lock size={18} />
                            </div>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="flex w-full items-center justify-center rounded-xl bg-slate-900 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-slate-800 active:scale-[0.98] disabled:opacity-70"
                    >
                        {loading ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : isLogin ? (
                            "Iniciar Sesión"
                        ) : (
                            "Registrarse"
                        )}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                        {isLogin
                            ? "¿No tienes cuenta? Registrate"
                            : "¿Ya tienes cuenta? Inicia sesión"}
                    </button>
                </div>
            </Card>

            <p className="fixed bottom-8 text-xs text-slate-400">
                &copy; 2026 CoupleCapital • Hecho con amor en Madrid
            </p>
        </div>
    );
}
