import React, { useState, useContext } from "react";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import Cart from "./svg/shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider";

export default function Header() {
    const [menu, setMenu] = useState(false);
    const value = useContext(DataContext);
    const [cart] = value.cart;

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const styleMenu = {
        left: menu ? 0 : "-100%",
    };

    return (
        <header>
            <div className="logo">
                <h1>
                    <Link to="/products">Citizen</Link>
                </h1>
            </div>
            <ul style={styleMenu}>
                <li onClick={toggleMenu}>
                    <Link to="/products">Home</Link>
                </li>
                <li onClick={toggleMenu}>
                    <Link to="/products">Products</Link>
                </li>
                <li onClick={toggleMenu}>
                    <Link to="/">About</Link>
                </li>
                <li onClick={toggleMenu}>
                    <Link to="/">Contact</Link>
                </li>
                <li onClick={toggleMenu}>
                    <Link to="/">Login / Register</Link>
                </li>
                <li>
                    <img
                        src={Close}
                        alt=""
                        width="30"
                        className="menu"
                        onClick={toggleMenu}
                    />
                </li>
            </ul>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="" width="30" />
            </div>
            <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                </Link>
            </div>
        </header>
    );
}
