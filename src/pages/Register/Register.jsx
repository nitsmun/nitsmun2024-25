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
    formData.append("choice3", data.choice3);
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
      <h1 className={styles.registerHeading}>Register Now</h1>

      <form action="" className={styles.registerForm}>
        <div className={styles.headingForm}>
          <div className={styles.textBox}>
            <h1>Youth Parliament Online Registration Form</h1>
            <p>
              Please fill in the form below. We'll contact you as soon as
              possible.
            </p>
          </div>

          <div className={styles.imagebox}>
            <img
              src="https://res.cloudinary.com/dludtk5vz/image/upload/v1736528355/701cf080c792b3ca092745b4c39b35e1_vzk4xr.png"
              alt=""
            />
          </div>
        </div>

        <hr
          style={{
            color: "black",
            backgroundColor: "black",
            height: 1.5,
            border: "none",
          }}
        />

        <div className={styles.formCredentials}>
          <label htmlFor="Name">Name</label>
          <div className={styles.formBranch}>
            <input type="text" name="name" required />
          </div>

          <label htmlFor="Branch">Branch</label>
          <div className={styles.formBranch}>
            <input type="text" name="branch" required />
          </div>

          <div className={styles.formId}>
            <div className={styles.year}>
              <label htmlFor="">Year</label>
              <input type="text" />
            </div>
            <div className={styles.year}>
              <label htmlFor="">Scholar ID</label>
              <input type="text" />
            </div>
          </div>

          <label htmlFor="Email">Email</label>
          <div className={styles.formBranch}>
            <input type="email" name="email" required />
          </div>

          <label htmlFor="Phone">Phone Number</label>
          <div className={styles.formBranch}>
            <input type="number" name="phone" required />
          </div>

          <label htmlFor="Experiences">Previous MUN Experiences (if any)</label>
          <div className={styles.formBranch}>
            <textarea name="" id=""></textarea>
          </div>

          <label htmlFor="committee">Committee Preferences</label>
          <p className={styles.desc}>
            (Due to limited capacity, delegates are informed that the committee
            preference are not always met and are not guaranteed.)
          </p>

          <div className={styles.formRadio}>
            <div className={styles.field}>
              <input type="radio" name="" id="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.field}>
              <input type="radio" name="" id="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.field}>
              <input type="radio" name="" id="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.field}>
              <input type="radio" name="" id="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className={styles.formPreferences}>
            <div className={styles.field1}>
              <div className={styles.fields}>
                <label htmlFor="preference">Preference 1:</label>
                <input type="text" name="" id="" />
              </div>
              <div className={styles.fields}>
                <label htmlFor="preference">Preference 1:</label>
                <input type="text" name="" id="" />
              </div>
            </div>
            <div className={styles.field1}>
              <div className={styles.fields}>
                <label htmlFor="preference">Preference 1:</label>
                <input type="text" name="" id="" />
              </div>

              <div className={styles.fields}>
                <label htmlFor="preference">Preference 1:</label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>

          <p className={styles.formPayment}>Payment</p>
          <p className={styles.formPaymentDesc}>
            To participate in the NITS- MUN Youth Parliament 2023, a
            registration fee of <span>Rs 499</span> is needed to be paid by
            every delegate which will include Lorem ipsum dolor sit amet. A nisi
            nobis sed quia sapiente
          </p>

          <div className={styles.paymentCredentials}>
            <div className={styles.textCredentials}>
              <div className={styles.upiCredentials}>
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>

              <div className={styles.proof}>
                <p>Payment proof: </p>
                <input type="file" />
              </div>

              <button> Submit </button>
            </div>
            <div className={styles.upiImage}>
              <img
                src="https://res.cloudinary.com/dludtk5vz/image/upload/v1736580186/66876b366a3e9f39d6dcce4f06110fde_dyqlvy.png"
                alt=""
              />
            </div>
          </div>

          <div className={styles.formQueries}>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
