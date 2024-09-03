import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartMedicines = cartCtx.medicines.reduce(
    (currentCount, medicine) => {
      return currentCount + medicine.amount;
    },
    0
  );
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartMedicines}</span>
    </button>
  );
};

export default HeaderCartButton;
