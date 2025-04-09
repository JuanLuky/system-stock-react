import { Sidebar } from "../shared/components/Sidebar";
import { Header } from "../shared/components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full h-screen grid grid-rows-[auto_1fr] bg-gray-100">
        <Header />
        <div className="grid grid-cols-[220px_1fr] gap-4">
            <Sidebar />
          <main className="bg-gray-50 p-6 overflow-y-auto">
            <Outlet />
          </main>
        </div>
     
    </div>
  );
}