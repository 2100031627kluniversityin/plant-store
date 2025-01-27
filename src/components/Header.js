import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
    const totalItems = useSelector((state) => state.cart.totalQuantity);
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Plant Store</Link>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart <span>({totalItems})</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
