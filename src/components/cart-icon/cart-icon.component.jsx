import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, hidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon
      className={hidden ? "shopping-icon" : "shopping-icon bg-sh"}
    />
    <span className={hidden ? "item-count" : "item-count bg-sh"}>
      {itemCount}
    </span>
  </div>
);

const mapStateToProps = state => {
  return {
    itemCount: selectCartItemsCount(state),
    hidden: state.cart.hidden
  };
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
