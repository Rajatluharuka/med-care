import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Modal from "../UI/Modal";
import CartMedicine from "./CartMedicine";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const orderMedicines = cartCtx.medicines.length > 0;

  const cartMedicineAddHandler = (medicine) => {
    cartCtx.addMedicine({ ...medicine, amount: 1 });
  };

  const cartMedicineRemoveHandler = (id) => {
    cartCtx.removeMedicine(id);
  };

  const cartMedicines = (
    <ul className={classes.cart_medicines}>
      {cartCtx.medicines.map((medicine) => (
        <CartMedicine
          key={medicine.id}
          medicineName={medicine.medicineName}
          amount={medicine.amount}
          price={medicine.price}
          onRemove={cartMedicineRemoveHandler.bind(null, medicine.id)}
          onAdd={cartMedicineAddHandler.bind(null, medicine)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      {cartMedicines}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button_alt} onClick={props.onCloseCart}>
          Close
        </button>
        {orderMedicines && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
