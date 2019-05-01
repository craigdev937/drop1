import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
    <nav className="nav">
        <h1 className="logo">LOGO</h1>
        <NavLink className="nav__link" to="/">Home</NavLink>
        <NavLink className="nav__link" to="/about">About</NavLink>
    </nav>
);

