import { Fragment } from "react";
import MedicineList from "./MedicineList";
import MedicineForm from "./MedicineForm";

const Medicine = () => {
  return (
    <Fragment>
      <MedicineForm />
      <MedicineList />
    </Fragment>
  );
};

export default Medicine;
