import { connectDB } from "@/lib/mongodb";
import Visitor from "@/models/Visitor";


export default async function AdminDashboard() {
    await connectDB();

    const visitorData = await Visitor.findOne({ id: "site_views" });

    const stats = [
        { label: 'Total Site Visitors', value: visitorData?.count || 0, color: 'text-blue-600' },

        { label: 'Portal Status', value: 'Active', color: 'text-emerald-500' },
    ];

    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Dashboard</h1>
                <p className="text-slate-500 text-sm font-medium">Strategic overview of Netsui activity.</p>
            </div>

            {/* Strategic Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">{stat.label}</p>
                        <h2 className={`text-4xl font-black ${stat.color}`}>{stat.value}</h2>
                    </div>
                ))}
            </div>

            {/* Recent Activity Section */}
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-100">
                    <h3 className="font-black uppercase tracking-widest text-[11px] text-slate-900">Recent Visitors & Requests</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                            <tr>
                                <th className="px-8 py-5">Full Name</th>
                                <th className="px-8 py-5">Email Address</th>
                                <th className="px-8 py-5 text-right">Detection Date</th>
                            </tr>
                        </thead>

                    </table>
                </div>
            </div>
        </div>
    );
}