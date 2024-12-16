import { useRef, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import classes from "./MedicineItemForm.module.css";

const MedicineItemForm = (props) => {
  const amountInputRef = useRef();
  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    cartCtx.addMedicine({
      id: props.id,
      medicineName: props.medicineName,
      description: props.description,
      price: props.price,
      amount: enteredAmountNumber,
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor={"amount_" + props.id}>Amount</label>
        <input
          ref={amountInputRef}
          id={"amount_" + props.id}
          type="number"
          min="1"
          max="10"
          step="1"
          defaultValue="1"
        ></input>
      </div>

      <button>Add</button>
    </form>
  );
};

export default MedicineItemForm;
