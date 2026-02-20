"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    UserCheck, RefreshCcw, Table as TableIcon,
    Search, MapPin, Mail, Phone, FileText
} from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface Registration {
    _id: string;
    fullName: string;
    email: string;
    phone: string;
    location: string;
    gender: string;
    createdAt: string;
}

export default function RegistrationsPage() {
    const [data, setData] = useState<Registration[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/register');
            const json = await res.json();
            if (json.success) setData(json.data);
        } catch (err) { console.error(err); } finally { setLoading(false); }
    };

    useEffect(() => { fetchData(); }, []);

    const exportToPDF = () => {
        const doc = new jsPDF();
        const img = new window.Image();
        img.src = '/logo/netsui_logo_bgre.png';
        img.onload = () => {
            doc.addImage(img, 'PNG', 85, 10, 40, 20);
            doc.setFontSize(14);
            doc.text('REGISTRATION LEDGER', 105, 40, { align: 'center' });
            autoTable(doc, {
                startY: 50,
                head: [['NAME', 'EMAIL', 'LOCATION', 'DATE']],
                body: filteredData.map(u => [u.fullName, u.email, u.location, new Date(u.createdAt).toLocaleDateString()]),
                headStyles: { fillColor: [15, 23, 42] }
            });
            doc.save('Netsui_Registrations.pdf');
        };
    };

    const filteredData = data.filter(item =>
        item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative min-h-screen bg-[#F8FAFC] overflow-x-hidden">

            {/* --- 1. FULL PAGE WATERMARK (Centered and Subtle) --- */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="relative w-[40vw] h-[40vw] opacity-[0.03] grayscale">
                    <Image src="/logo/netsui_logo_bgre.png" alt="Netsui" fill className="object-contain" priority />
                </div>
            </div>

            <div className="relative z-10 w-full px-4 sm:px-10 lg:px-16 py-8">

                {/* --- 2. HEADER: Properly Spread --- */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-12 gap-6">
                    <div className="flex items-center gap-5">
                        <div className="p-4 bg-slate-950 rounded-2xl text-white shadow-2xl shadow-blue-500/10 border border-white/10">
                            <UserCheck size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">Registrations</h1>
                            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mt-2 flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-blue-600/30" /> Operational Bridge Corridor
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="flex bg-white rounded-2xl shadow-sm border border-slate-200 p-1 flex-1 sm:flex-none">
                            <button onClick={() => { }} className="flex-1 px-5 py-3 hover:bg-slate-50 transition-all text-[11px] font-black uppercase flex items-center justify-center gap-2 text-slate-700">
                                <TableIcon size={14} className="text-green-600" /> Excel
                            </button>
                            <div className="w-[1px] bg-slate-100 my-2" />
                            <button onClick={exportToPDF} className="flex-1 px-5 py-3 hover:bg-slate-50 transition-all text-[11px] font-black uppercase flex items-center justify-center gap-2 text-slate-700">
                                <FileText size={14} className="text-red-600" /> PDF
                            </button>
                        </div>
                        <button onClick={fetchData} className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 group transition-all shadow-sm">
                            <RefreshCcw size={20} className={loading ? "animate-spin text-blue-600" : "text-slate-400 group-hover:text-blue-600"} />
                        </button>
                    </div>
                </div>

                {/* --- 3. SEARCH & STATS: Full Width Expansion --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-10">
                    <div className="lg:col-span-9 relative group">
                        <Search className="absolute left-7 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={22} />
                        <input
                            type="text"
                            placeholder="Identify consultant via name, email, or regional hub..."
                            className="w-full h-[72px] pl-16 pr-8 bg-white/80 backdrop-blur-md rounded-[24px] border border-slate-200 shadow-sm focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all text-sm font-bold text-slate-700"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="lg:col-span-3 h-[72px] bg-slate-950 px-8 rounded-[24px] flex items-center justify-between shadow-2xl shadow-slate-950/20">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Live Capacity</span>
                            <span className="text-[10px] font-bold text-blue-500">Active Nodes</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-3xl font-black text-white">{filteredData.length}</span>
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]" />
                        </div>
                    </div>
                </div>

                {/* --- 4. TABLE: Professional Glass Container --- */}
                <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] shadow-xl border border-white overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[1000px]">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-10 py-7 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Consultant Identity</th>
                                    <th className="px-8 py-7 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Communication Node</th>
                                    <th className="px-8 py-7 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Hub Location</th>
                                    <th className="px-10 py-7 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Synchronization</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                <AnimatePresence mode="popLayout">
                                    {filteredData.map((user) => (
                                        <motion.tr key={user._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hover:bg-blue-50/40 transition-all group">
                                            <td className="px-10 py-8">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 font-black text-xs shadow-sm group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all duration-300">
                                                        {user.fullName.substring(0, 2).toUpperCase()}
                                                    </div>
                                                    <p className="font-black text-slate-900 text-base uppercase tracking-tight">{user.fullName}</p>
                                                </div>
                                            </td>
                                            <td className="px-8 py-8">
                                                <div className="flex flex-col gap-1.5">
                                                    <span className="flex items-center gap-2 text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                                                        <Mail size={14} className="opacity-50" /> {user.email}
                                                    </span>
                                                    <span className="flex items-center gap-2 text-[11px] font-medium text-slate-400">
                                                        <Phone size={14} className="opacity-50" /> {user.phone}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-8">
                                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-200/50">
                                                    <MapPin size={12} className="text-blue-500" /> {user.location}
                                                </span>
                                            </td>
                                            <td className="px-10 py-8 text-right">
                                                <p className="text-sm font-black text-slate-900">{new Date(user.createdAt).toLocaleDateString('en-GB')}</p>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">UTC-00:00 Verified</p>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}