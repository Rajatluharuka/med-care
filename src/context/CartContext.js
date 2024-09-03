import React, { useReducer } from "react";

export const CartContext = React.createContext();

const initialCartState = {
  medicines: [],
  totalAmount: 0,
};

const cartReducerFunction = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const updatedTotalAmount =
      state.totalAmount + action.medicine.price * action.medicine.amount;
    const existingCartMedicineIndex = state.medicines.findIndex(
      (medicine) => medicine.id === action.medicine.id
    );
    const existingCartMedicine = state.medicines[existingCartMedicineIndex];
    let updatedMedicines;
    if (existingCartMedicine) {
      const updatedMedicine = {
        ...existingCartMedicine,
        amount: existingCartMedicine.amount + action.medicine.amount,
      };
      updatedMedicines = [...state.medicines];
      updatedMedicines[existingCartMedicineIndex] = updatedMedicine;
    } else {
      updatedMedicines = state.medicines.concat(action.medicine);
    }
    return {
      medicines: updatedMedicines,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    const existingCartMedicineIndex = state.medicines.findIndex(
      (medicine) => medicine.id === action.id
    );
    const existingCartMedicine = state.medicines[existingCartMedicineIndex];
    const updatedTotalAmount = state.totalAmount - existingCartMedicine.price;
    let updatedMedicines;
    if (existingCartMedicine.amount === 1) {
      updatedMedicines = state.medicines.filter(
        (medicine) => medicine.id !== action.id
      );
    } else {
      const updatedMedicine = {
        ...existingCartMedicine,
        amount: existingCartMedicine.amount - 1,
      };
      updatedMedicines = [...state.medicines];
      updatedMedicines[existingCartMedicineIndex] = updatedMedicine;
    }
    return {
      medicines: updatedMedicines,
      totalAmount: updatedTotalAmount,
    };
  }
  return initialCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducerFunction,
    initialCartState
  );
  const addMedicineToCartHandler = (medicine) => {
    dispatchCartAction({ type: "ADD_TO_CART", medicine: medicine });
  };
  const removeMedicineFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_FROM_CART", id: id });
  };

  const cartValue = {
    medicines: cartState.medicines,
    totalAmount: cartState.totalAmount,
    addMedicine: addMedicineToCartHandler,
    removeMedicine: removeMedicineFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
