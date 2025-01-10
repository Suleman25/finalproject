import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ to, children, isSelected, select }) => {
  const location = useLocation();
  const isActive = isSelected || location.pathname === to;

  return (
    <li>
      <Link 
        className={isActive ? 'active' : ''} 
        to={to} 
        onClick={select}
      >
        {children}
      </Link>
    </li>
  );
};

export default Header;

