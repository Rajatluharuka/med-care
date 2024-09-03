import React, { useReducer } from "react";

const initialState = {
  medicines: [],
};
const medicineReducerFunction = (state, action) => {
  if (action.type === "ADD_MEDICINE") {
    return { ...state, medicines: [...state.medicines, action.medicine] };
  }
  if (action.type === "REMOVE_MEDICINE") {
    return {
      ...state,
      medicines: state.medicines.filter(
        (medicine) => medicine.id !== action.id
      ),
    };
  }
  return state;
};

export const MedicineContext = React.createContext();

const MedicineProvider = (props) => {
  const [medicineState, dispatchMedicineAction] = useReducer(
    medicineReducerFunction,
    initialState
  );
  const addMedicineHandler = (medicine) => {
    dispatchMedicineAction({ type: "ADD_MEDICINE", medicine: medicine });
  };
  const removeMedicineHandler = (id) => {
    dispatchMedicineAction({ type: "REMOVE_MEDICINE", id: id });
  };
  const medicineItemValue = {
    ...medicineState,
    addMedicine: addMedicineHandler,
    removeMedicine: removeMedicineHandler,
  };
  return (
    <MedicineContext.Provider value={medicineItemValue}>
      {props.children}
    </MedicineContext.Provider>
  );
};

export default MedicineProvider;
