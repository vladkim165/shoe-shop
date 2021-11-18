import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  addQuantity,
  removeItem,
  subtractQuantity,
  addShipping,
  subShipping,
  removeShipping,
} from "./actions/cartActions";

export const Cart = (props) => {
  const {
    items,
    total,
    removeItem,
    addQuantity,
    subtractQuantity,
    addShipping,
    subShipping,
    removeShipping,
  } = props;
  // to remove the item completely
  const handleRemove = (id) => {
    removeItem(id);
  };
  // to add the quantity
  const handleAddQuantity = (id) => {
    addQuantity(id);
  };
  // to substruct from the quantity
  const handleSubtractQuantity = (id) => {
    subtractQuantity(id);
  };

  const handleRemoveShipping = (id) => {
    removeShipping(id);
  };

  const addedItems = items.length
    ? items.map((item) => (
        <li className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.img} />
          </div>

          <div className="card-content">
            <span className="card-title">{item.title}</span>
            <p>{item.desc}</p>
            <p>
              <b>
                Price:
                {item.price}$
              </b>
            </p>
            <p>
              <b>
                Quantity:
                {item.quantity}
              </b>
            </p>
            <div className="add-remove">
              <Link to="/cart">
                <i
                  className="material-icons"
                  onClick={() => {
                    handleAddQuantity(item.id);
                    addShipping();
                  }}>
                  arrow_drop_up
                </i>
              </Link>
              <Link to="/cart">
                <i
                  className="material-icons"
                  onClick={() => {
                    handleSubtractQuantity(item.id);
                    subShipping();
                  }}>
                  arrow_drop_down
                </i>
              </Link>
            </div>
            <button
              className="waves-effect waves-light btn pink remove"
              onClick={() => {
                handleRemoveShipping(item.id);
                handleRemove(item.id);
              }}>
              Remove
            </button>
          </div>
        </li>
      ))
    : "";
  return (
    <div className="container">
      <div className="cart-info-container">
        <h5>You have ordered:</h5>
        <h5 className="cart-total">Total: {total}$</h5>
      </div>
      <ul className="cart">{addedItems}</ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.addedItems,
  total: state.total,
  // addedItems: state.addedItems
});
const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => {
    dispatch(removeItem(id));
  },
  addQuantity: (id) => {
    dispatch(addQuantity(id));
  },
  subtractQuantity: (id) => {
    dispatch(subtractQuantity(id));
  },
  addShipping: () => {
    dispatch(addShipping());
  },
  subShipping: () => {
    dispatch(subShipping());
  },
  removeShipping: (id) => {
    dispatch(removeShipping(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
