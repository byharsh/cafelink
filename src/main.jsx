import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import SidebarLayout from "./admin/layouts/SidebarLayout.jsx";
import LiveOrders from "./admin/pages/LiveOrders.jsx";
import Records from "./admin/pages/Records.jsx";
import Inventory from "./admin/pages/Inventory.jsx";
import Settings from "./admin/pages/settings.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarLayout />,
    children: [
      { index: true, element: <LiveOrders /> },
      { path: "live-orders", element: <LiveOrders /> },
      { path: "records", element: <Records /> },
      { path: "inventory", element: <Inventory /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <App />
);
