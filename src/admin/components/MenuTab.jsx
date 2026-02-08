import { NavLink } from "react-router-dom";

export const MenuTab = ({ link, title }) => {
  return (
    <li>
      <NavLink to={link}>{title}</NavLink>
    </li>
  );
};
