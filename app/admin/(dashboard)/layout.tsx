import type { ReactNode } from "react";

import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import AuthGuard from "@/components/admin/AuthGuard";

interface Props {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: Props) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-100">
        <div className="flex">
          {/* Sidebar */}

          <Sidebar />

          {/* Main */}

          <div className="flex min-h-screen flex-1 flex-col lg:ml-72">
            <Header />

            <main className="flex-1 p-6 lg:p-8">
              <div className="mx-auto max-w-7xl">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}