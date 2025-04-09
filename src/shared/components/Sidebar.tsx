import { Link, useLocation } from "react-router-dom";
import { Home, Package, List, LogOut } from "lucide-react";

export function Sidebar() {
  const { pathname } = useLocation();

  const navItems = [
    { to: "/", label: "Home", icon: <Home size={18} /> },
    { to: "/movimentacoes", label: "Movimentações", icon: <List size={18} /> },
    { to: "/produtos", label: "Lista de Produtos", icon: <Package size={18} /> },
    { to: "/sair", label: "Sair", icon: <LogOut size={18} /> },
  ];

  return (
    <aside className="flex flex-col gap-2 p-4 mt-4">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`flex text-gray-500 items-center gap-2 px-3 py-2 rounded hover:bg-gray-200 transition ${
            pathname === item.to ? "bg-orange-100 font-semibold" : ""
          }`}
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </aside>
  );
}