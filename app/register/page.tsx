"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserPlus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AdminRegister() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/auth/admin/register', {
            method: 'POST',
            body: JSON.stringify(form),
        });

        if (res.ok) router.push('/login');
        else alert("Registration failed. Email might already exist.");
    };

    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 text-white">
            <div className="w-full max-w-md bg-white/5 p-10 rounded-[2.5rem] border border-white/10">
                <UserPlus size={48} className="mx-auto text-blue-500 mb-6" />
                <h1 className="text-2xl font-bold text-center italic uppercase mb-8">Register Admin</h1>

                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        type="text" placeholder="USERNAME"
                        className="w-full bg-white/5 p-4 rounded-xl border border-white/10 outline-none focus:border-blue-500"
                        onChange={e => setForm({ ...form, username: e.target.value })}
                    />
                    <input
                        type="email" placeholder="EMAIL"
                        className="w-full bg-white/5 p-4 rounded-xl border border-white/10 outline-none focus:border-blue-500"
                        onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                    <input
                        type="password" placeholder="PASSWORD"
                        className="w-full bg-white/5 p-4 rounded-xl border border-white/10 outline-none focus:border-blue-500"
                        onChange={e => setForm({ ...form, password: e.target.value })}
                    />
                    <button className="w-full bg-white/10 p-4 rounded-xl font-bold uppercase hover:bg-white/20 transition-all border border-white/10">
                        Register Admin
                    </button>
                </form>

                <Link href="/login" className="mt-6 flex justify-center items-center gap-2 text-xs text-slate-400 hover:text-white transition-all">
                    <ArrowLeft size={14} /> Back to Access
                </Link>
            </div>
        </div>
    );
}