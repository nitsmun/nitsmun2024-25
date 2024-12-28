import React from "react";
import styles from "./Register.module.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const url = `http://localhost:${import.meta.env.VITE_PORT}`;

  const [data, setData] = useState({
    name: "",
    email: "",
    institute: "",
    paymentProof: "",
    scholar_id: "",
    branch: "",
    choice1: "",
    choice2: "",
    choice3: "",
    allotted: "",
    portfolio: "",
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("institute", data.institute);
    formData.append("paymentProof", data.paymentProof);
    formData.append("scholar_id", data.scholar_id);
    formData.append("branch", data.branch);
    formData.append("choice1", data.choice1);
    formData.append("choice2", data.choice2);
    formData.append("choice2", data.choice2);
    formData.append("allotted", data.allotted);
    formData.append("portfolio", data.portfolio);

    //Api call
    const response = await axios.post(`${url}/participant/add`, formData);

    if (response.data.success) {
      setData({
        name: "",
        email: "",
        institute: "",
        paymentProof: "",
        scholar_id: "",
        branch: "",
        choice1: "",
        choice2: "",
        choice3: "",
        allotted: "",
        portfolio: "",
      });
    } else {
      console.log("Data Not Added, Error");
    }
  };

  return (
    <div className={styles.register} onChange={onSubmitHandler}>
      {/* To be designed */}
    </div>
  );
};

export default Register;
