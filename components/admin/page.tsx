import DashboardStats from "@/components/admin/DashboardStats";
import LogoutButton from "@/components/admin/LogoutButton";
export default function AdminDashboard() {
  return (
    <div className="flex items-center justify-between">
  <h1 className="text-4xl font-bold">
    Dashboard
  </h1>

  <LogoutButton />
</div>