import { Card } from '@/components/ui/card';

const users = [
  { name: 'Golf Player', email: 'player@golfimpact.com', role: 'subscriber', status: 'active' },
  { name: 'Charity Admin', email: 'admin@golfimpact.com', role: 'admin', status: 'active' }
];

export default function AdminUsersPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="uppercase tracking-[0.3em] text-brand-emerald">User management</p>
        <h1 className="text-3xl font-semibold text-white">Monitor and update accounts.</h1>
      </div>
      <Card className="overflow-hidden">
        <table className="min-w-full text-left text-sm text-slate-300">
          <thead className="border-b border-white/10 text-slate-400">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email} className="border-b border-white/10">
                <td className="px-6 py-4 text-white">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4 text-brand-emerald">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
