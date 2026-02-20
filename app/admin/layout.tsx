"use client";
import React, { useState, useEffect } from 'react';
import AdminSidebar from './Sidebar';
import { Menu, Activity, Loader2 } from 'lucide-react';

interface AdminData {
    email: string;
    name?: string;
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [admin, setAdmin] = useState<AdminData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                // POINTING TO YOUR NEW ROUTE
                const res = await fetch('/api/auth/admin/me');
                const data = await res.json();

                if (data.success && data.admin) {
                    setAdmin(data.admin);
                }
            } catch (err) {
                console.error("Session fetch failed:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchAdmin();
    }, []);

    const adminInitial = (admin?.name || admin?.email || "A").charAt(0).toUpperCase();

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="lg:ml-64 min-h-screen flex flex-col">
                <header className="h-20 bg-white border-b border-slate-200 px-6 md:px-10 flex items-center justify-between sticky top-0 z-30">
                    <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsOpen(true)}>
                        <Menu size={24} />
                    </button>

                    <div className="hidden md:flex items-center gap-3">
                        <Activity size={16} className="text-blue-600 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                            Secure Admin Corridor
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        {loading ? (
                            <Loader2 size={18} className="animate-spin text-slate-400" />
                        ) : (
                            <div className="flex items-center gap-4">
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-black text-slate-900 uppercase tracking-tighter">
                                        {admin?.name || "Admin User"}
                                    </p>
                                    <p className="text-[10px] font-bold text-slate-400 lowercase tracking-widest">
                                        {admin?.email}
                                    </p>
                                </div>
                                <div className="h-11 w-11 bg-slate-900 rounded-xl flex items-center justify-center text-white border-2 border-slate-100 shadow-md font-black text-lg">
                                    {adminInitial}
                                </div>
                            </div>
                        )}
                    </div>
                </header>

                <main className="flex-1 p-6 md:p-12 max-w-7xl w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}