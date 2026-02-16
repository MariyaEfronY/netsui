"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, ArrowRight, CheckCircle, Loader2, MapPin } from 'lucide-react';

// 1. Define types to remove the "red lines"
interface FormData {
    fullName: string;
    email: string;
    phone: string;
    gender: string;
    location: string;
}

interface InputGroupProps {
    label: string;
    icon?: React.ReactNode;
    placeholder: string;
    type?: string;
    onUpdate: (value: string) => void;
}

export default function RegisterPage() {
    const [isPending, setIsPending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        gender: 'Male',
        location: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsPending(true);
        setError("");

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (res.ok) {
                setIsSuccess(true);
            } else {
                setError(result.error || "Registration failed");
            }
        } catch (err) {
            setError("Network error. Please check your connection.");
        } finally {
            setIsPending(false);
        }
    };

    if (isSuccess) return (
        <div className="min-h-screen flex items-center justify-center bg-white p-6">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                <CheckCircle size={80} className="text-blue-600 mx-auto mb-6" />
                <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Registration Secured</h2>
                <p className="text-slate-500 mt-2 max-w-sm mx-auto">Your details have been integrated into the Netsui Strategic Database.</p>
                <button onClick={() => window.location.href = '/'} className="mt-8 text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px] hover:underline">Return to Home</button>
            </motion.div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
            <div className="max-w-4xl w-full grid md:grid-cols-2 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">

                {/* Left Side: Brand Identity */}
                <div className="bg-slate-950 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="z-10">
                        <h2 className="text-4xl font-black tracking-tighter uppercase mb-6 leading-none">Enrollment <br /> Portal</h2>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-[220px]">Securing cross-border liaison data for the Netsui corridor.</p>
                    </div>
                    <div className="z-10 flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Node Active</span>
                    </div>
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                </div>

                {/* Right Side: Form Logic */}
                <form onSubmit={handleSubmit} className="p-10 md:p-14 space-y-6">
                    {error && (
                        <div className="p-4 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest rounded-xl border border-red-100 text-center">
                            {error}
                        </div>
                    )}

                    <div className="space-y-5">
                        <InputGroup
                            label="Full Name"
                            icon={<User size={14} />}
                            placeholder="e.g. Alexander Pierce"
                            onUpdate={(val) => setFormData({ ...formData, fullName: val })}
                        />

                        <InputGroup
                            label="Email Address"
                            icon={<Mail size={14} />}
                            placeholder="liaison@company.jp"
                            type="email"
                            onUpdate={(val) => setFormData({ ...formData, email: val })}
                        />

                        <InputGroup
                            label="Phone Number"
                            icon={<Phone size={14} />}
                            placeholder="+91 00000 00000"
                            onUpdate={(val) => setFormData({ ...formData, phone: val })}
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Gender</label>
                                <select
                                    className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 text-xs font-bold outline-none focus:ring-2 ring-blue-600/10 transition-all cursor-pointer appearance-none"
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, gender: e.target.value })}
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <InputGroup
                                label="Location"
                                icon={<MapPin size={14} />}
                                placeholder="Tokyo"
                                onUpdate={(val) => setFormData({ ...formData, location: val })}
                            />
                        </div>
                    </div>

                    <button
                        disabled={isPending}
                        type="submit"
                        className={`w-full ${isPending ? 'bg-slate-400' : 'bg-blue-600 hover:bg-slate-900'} text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/10`}
                    >
                        {isPending ? <Loader2 className="animate-spin" size={16} /> : "Confirm Registration"}
                        {!isPending && <ArrowRight size={14} />}
                    </button>
                </form>
            </div>
        </div>
    );
}

// 2. Component with explicit types to resolve red lines
function InputGroup({ label, icon, placeholder, type = "text", onUpdate }: InputGroupProps) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 flex items-center gap-2">
                {icon} {label}
            </label>
            <input
                required
                type={type}
                placeholder={placeholder}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onUpdate(e.target.value)}
                className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 text-xs font-bold placeholder:text-slate-300 outline-none focus:ring-2 ring-blue-600/10 transition-all w-full"
            />
        </div>
    );
}