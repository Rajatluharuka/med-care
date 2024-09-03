import React, { useState, useContext } from "react";
import { MedicineContext } from "../../context/MedicineContext";
import styles from "./MedicineForm.module.css";

const MedicineForm = () => {
  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const medCtx = useContext(MedicineContext);

  const submitHandler = (e) => {
    e.preventDefault();
    medCtx.addMedicine({
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      medicineName: medicineName,
      description: description,
      price: Number(price),
    });
    setMedicineName("");
    setDescription("");
    setPrice("");
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Medicine Name"
        value={medicineName}
        onChange={(e) => setMedicineName(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.input}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add Medicine
      </button>
    </form>
  );
};

export default MedicineForm;
