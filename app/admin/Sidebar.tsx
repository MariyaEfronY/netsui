"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, X, LogOut, UserCheck, Loader2, ShieldCheck } from 'lucide-react';

export default function AdminSidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isExiting, setIsExiting] = useState(false);

    const menu = [
        { name: 'Overview', icon: <LayoutDashboard size={18} />, path: '/admin' },
        {
            name: 'Registrations',
            icon: <UserCheck size={18} />,
            path: '/admin/view-registerations'
        },
    ];

    const handleLogout = async () => {
        setIsExiting(true);
        try {
            const res = await fetch('/api/auth/admin/logout', { method: 'POST' });
            if (res.ok) {
                router.refresh();
                router.push('/login');
            } else {
                setIsExiting(false);
            }
        } catch (error) {
            console.error("Logout error:", error);
            setIsExiting(false);
        }
    };

    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 h-screen bg-slate-950 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-hidden border-r border-white/5 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="h-full flex flex-col">

                    {/* --- LOGO SECTION --- */}
                    <div className="p-0 flex flex-col items-center justify-center border-b border-white/5 mb-4">
                        <div className="relative w-48 h-32 transition-all duration-500 ease-in-out hover:brightness-110">
                            <Image
                                src="/logo/netsui_logo_bgre.png"
                                alt="Netsui Logo"
                                fill
                                className="object-contain" // This ensures the small logo doesn't stretch or blur
                                priority
                            />
                        </div>


                        {/* Mobile Close Button - Repositioned for better spacing */}
                        <button
                            className="lg:hidden absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* --- NAVIGATION --- */}
                    <nav className="flex-1 px-6 space-y-2 overflow-y-auto custom-scrollbar">

                        {menu.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all font-bold text-[10px] uppercase tracking-[0.2em] border ${pathname === item.path
                                    ? 'bg-blue-600 border-blue-400 text-white shadow-xl shadow-blue-600/20'
                                    : 'text-slate-500 border-transparent hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {item.icon} {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* --- FOOTER ACTIONS --- */}
                    <div className="p-6 bg-slate-900/40 border-t border-white/5">


                        <button
                            onClick={handleLogout}
                            disabled={isExiting}
                            className="group flex items-center gap-4 px-4 py-3.5 rounded-xl text-red-500 border border-transparent hover:border-red-500/30 hover:bg-red-500/10 font-black text-[10px] uppercase tracking-widest transition-all w-full text-left disabled:opacity-50"
                        >
                            {isExiting ? (
                                <Loader2 size={18} className="animate-spin" />
                            ) : (
                                <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
                            )}
                            <span>{isExiting ? 'Terminating...' : 'Exit Portal'}</span>
                        </button>
                    </div>
                </div>
            </aside>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { width: 0px; }
                .custom-scrollbar { scrollbar-width: none; }
            `}</style>
        </>
    );
}