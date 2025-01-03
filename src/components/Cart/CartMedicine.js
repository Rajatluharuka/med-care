import classes from "./CartMedicine.module.css";

const CartMedicine = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.cart_medicine}>
      <div>
        <h2>{props.medicineName}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartMedicine;
