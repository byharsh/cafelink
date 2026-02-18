import { NavLink } from "react-router-dom";

export const MenuTab = ({ link, title }) => {
  return (
    <li className="py-2 ">
      <NavLink to={link} className="text-base font-semibold">
        {title}
      </NavLink>
    </li>
  );
};
