import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export const Navbar = ({ totalItems }) => (
  <nav className="nav-wrapper">
    <div className="container">
      <Link to="/" className="brand-logo">
        Shopping
      </Link>

      <ul className="right">
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/cart">My Cart</Link>
        </li>
        <li>
          <Link to="/cart">
            <div className="cart-link">
              {totalItems !== 0 && (
                <span className="cart-count">{totalItems}</span>
              )}

              <i className="material-icons">shopping_cart</i>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

const mapStateToProps = (state) => ({
  totalItems: state.totalItems,
});

export default connect(mapStateToProps)(Navbar);
