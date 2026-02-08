import { NavLink } from "react-router-dom";
import { MenuTab, MoneyStats, UserTab } from "./index";

import logo from "../../assets/Logo.png";

export const Sidebar = () => {
  return (
    <div className="min-w-75 pt-10 h-dvh overflow-hidden">
      <div className="h-full  flex flex-col gap-16">
        <div className="mx-auto">
          <img src={logo} alt="cafelink Logo" width={"150px"} />
        </div>

        <MoneyStats />

        <div className="outline">
          <ul className="">
            <MenuTab link={"/live-orders"} title={"Live Orders"} />
            <MenuTab link={"/records"} title={"Records"} />
            <MenuTab link={"/inventory"} title={"Inventory"} />
            <MenuTab link={"/settings"} title={"Settings"} />
          </ul>
        </div>
        <div className="mt-auto">
          <UserTab />
        </div>
      </div>
    </div>
  );
};
