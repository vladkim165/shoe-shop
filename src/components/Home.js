import React from "react";
import { connect } from "react-redux";
import { addToCart, addShipping } from "./actions/cartActions";

export const Home = ({ items, addToCart, addShipping }) => {
  const itemList = items.map((item) => (
    <div className="card" key={item.id}>
      <div className="card-image">
        <img src={item.img} alt={item.title} />
        <span
          to="/"
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => {
            addToCart(item.id);
            addShipping();
          }}>
          <i className="material-icons">add</i>
        </span>
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
      </div>
    </div>
  ));

  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <div className="box">{itemList}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
});
const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => {
    dispatch(addToCart(id));
  },
  addShipping: () => {
    dispatch(addShipping());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
