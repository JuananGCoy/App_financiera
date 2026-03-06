"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";
import { useStore } from "@/store/useStore";
import { Card } from "@/components/ui/Card";
import { Users, Plus, Link, Loader2, ArrowRight } from "lucide-react";

export function Onboarding() {
    const [step, setStep] = useState<"choice" | "create" | "join">("choice");
    const [householdName, setHouseholdName] = useState("");
    const [inviteCode, setInviteCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const user = useStore(state => state.user);
    const setHousehold = useStore(state => state.setHousehold);
    const supabase = createClient();

    const handleCreate = async () => {
        if (!householdName || !user) return;
        setLoading(true);
        setError("");

        try {
            // 1. Create household
            const { data: household, error: hError } = await supabase
                .from("households")
                .insert({
                    name: householdName,
                    admin_id: user.id
                })
                .select()
                .single();

            if (hError) throw hError;

            // 2. Add as member (RLS might handle this via trigger or manual)
            // Actually, my schema doesn't have a trigger for this yet, so I'll do it manually
            const { error: mError } = await supabase
                .from("household_members")
                .insert({
                    household_id: household.id,
                    user_id: user.id,
                    role: "admin"
                });

            if (mError) throw mError;

            setHousehold(household);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleJoin = async () => {
        if (!inviteCode || !user) return;
        setLoading(true);
        setError("");

        try {
            // 1. Find household by invite code
            const { data: household, error: hError } = await supabase
                .from("households")
                .select()
                .eq("invite_code", inviteCode.toUpperCase())
                .single();

            if (hError) throw hError;

            // 2. Add as member
            const { error: mError } = await supabase
                .from("household_members")
                .insert({
                    household_id: household.id,
                    user_id: user.id,
                    role: "member"
                });

            if (mError) throw mError;

            setHousehold(household);
        } catch (err: any) {
            setError("Código inválido o ya eres miembro.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-slate-900">Bienvenido a CoupleCapital</h1>
                <p className="text-slate-500 max-w-sm mx-auto">
                    Para empezar a gestionar vuestras finanzas compartidas, necesitas un grupo familiar.
                </p>
            </div>

            <div className="w-full max-w-md">
                {step === "choice" && (
                    <div className="grid gap-4">
                        <button
                            onClick={() => setStep("create")}
                            className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-primary hover:bg-primary/5 transition-all text-left"
                        >
                            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                <Plus size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900">Crear un Nuevo Plan</h3>
                                <p className="text-sm text-slate-500">Empieza de cero y añade tu pareja luego.</p>
                            </div>
                            <ArrowRight size={20} className="text-slate-400" />
                        </button>

                        <button
                            onClick={() => setStep("join")}
                            className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-emerald-500 hover:bg-emerald-50 transition-all text-left"
                        >
                            <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                <Link size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900">Unirme a Plan Existente</h3>
                                <p className="text-sm text-slate-500">Usa el código que te dio tu pareja.</p>
                            </div>
                            <ArrowRight size={20} className="text-slate-400" />
                        </button>
                    </div>
                )}

                {step === "create" && (
                    <Card className="p-6 space-y-4 shadow-xl border-none">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <Plus className="text-primary" /> Crear Plan
                        </h3>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Nombre de la casa</label>
                            <input
                                type="text"
                                value={householdName}
                                onChange={(e) => setHouseholdName(e.target.value)}
                                placeholder="Ej. Casa Garcia, Piso Madrid..."
                                className="w-full p-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                            />
                        </div>
                        {error && <p className="text-xs text-red-500 bg-red-50 p-2 rounded-lg">{error}</p>}
                        <div className="flex gap-3">
                            <button
                                disabled={loading}
                                onClick={() => setStep("choice")}
                                className="flex-1 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all"
                            >
                                Volver
                            </button>
                            <button
                                disabled={loading || !householdName}
                                onClick={handleCreate}
                                className="flex-[2] py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                            >
                                {loading ? <Loader2 className="animate-spin" size={20} /> : "Crear Ahora"}
                            </button>
                        </div>
                    </Card>
                )}

                {step === "join" && (
                    <Card className="p-6 space-y-4 shadow-xl border-none">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <Link className="text-emerald-500" /> Unirme
                        </h3>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Código de Invitación (6 chars)</label>
                            <input
                                type="text"
                                maxLength={6}
                                value={inviteCode}
                                onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
                                placeholder="ABCDEF"
                                className="w-full p-4 text-center text-2xl font-mono tracking-widest rounded-xl border border-slate-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all"
                            />
                        </div>
                        {error && <p className="text-xs text-red-500 bg-red-50 p-2 rounded-lg">{error}</p>}
                        <div className="flex gap-3">
                            <button
                                disabled={loading}
                                onClick={() => setStep("choice")}
                                className="flex-1 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all"
                            >
                                Volver
                            </button>
                            <button
                                disabled={loading || inviteCode.length < 6}
                                onClick={handleJoin}
                                className="flex-[2] py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition-all flex items-center justify-center gap-2"
                            >
                                {loading ? <Loader2 className="animate-spin" size={20} /> : "Validar Código"}
                            </button>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    );
}
