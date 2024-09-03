import React, { useContext } from "react";
import { MedicineContext } from "../../context/MedicineContext";
import MedicineItemForm from "./MedicineItemForm";
import styles from "./MedicineList.module.css";
import Card from "../UI/Card";

const MedicineList = () => {
  const medCtx = useContext(MedicineContext);

  return (
    <Card>
      <h2>Medicine List</h2>
      <ul className={styles.list}>
        {medCtx.medicines.map((medicine) => (
          <li key={medicine.id} className={styles.listItem}>
            <span>{medicine.medicineName}</span>
            <span>{medicine.description}</span>
            <span>{medicine.price}</span>
            <button
              className={styles.removeButton}
              onClick={() => medCtx.removeMedicine(medicine.id)}
            >
              Remove
            </button>
            <MedicineItemForm
              id={medicine.id}
              medicineName={medicine.medicineName}
              description={medicine.description}
              price={medicine.price}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default MedicineList;
