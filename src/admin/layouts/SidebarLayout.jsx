import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../components";
import Header from "./Header";

const SidebarLayout = () => {
  const { pathname } = useLocation();
  const isSettings = pathname === "/settings";

  return (
    <div className="flex max-h-dvh">
      <aside className="outline-1">
        <Sidebar />
      </aside>

      <main className="outline-1 outline-red-400 w-dvw py-10 px-8">
        {!isSettings && <Header />}
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
