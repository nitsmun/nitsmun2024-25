import React from "react";
import styles from "./Register.module.scss";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { auth, provider } from "../../config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [selectedValue, setSelectedValue] = useState("Yes");
  const [committee1, setCommitee1] = useState(false);
  const [committee2, setCommitee2] = useState(false);
  const [committee3, setCommitee3] = useState(false);
  const navigate = useNavigate();
  const [val, setVal] = useState("");
  const handleClick = () => {
    console.log("ok");
    signInWithPopup(auth, provider).then((data) => {
      if (data.user && data.user.email) {
        const userEmail = data.user.email.toLowerCase();
        setVal(userEmail);
        localStorage.setItem("email", userEmail);
      } else {
        console.error("Error retrieving user data during sign-in.");
      }
    });
  };
  const handleRadioChangeNITS = (event) => {
    event.preventDefault();
    setSelectedValue(event.target.value);
  };
  const [data, setData] = useState({
    name: "",
    email: localStorage.getItem("email") ?? "",
    institute: "NIT SILCHAR",
    phone: "",
    paymentProof: "",
    scholar_id: "",
    previousExperience: "",
    branch: "",
    year: "",
    choice1: "Commitee 1",
    choice2: "Commitee 1",
    choice3: "Commitee 1",
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log(data);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("institute", data.institute);
    formData.append("phone", data.phone);
    formData.append("paymentProof", data.paymentProof);
    formData.append("scholar_id", data.scholar_id);
    formData.append("branch", data.branch);
    formData.append("choice1", data.choice1);
    formData.append("choice2", data.choice2);
    formData.append("choice3", data.choice3);

    //Api call
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API}/participant/add`,
      data,
    );

    // if (response.data.success) {
    //   setData({
    //     name: "",
    //     email: "",
    //     institute: "",
    //     paymentProof: "",
    //     scholar_id: 0,
    //     branch: "",
    //     year: "",
    //     choice1: "",
    //     choice2: "",
    //     choice3: ""
    //   });
    //   console.log(response);
    // }
    if (response.status === 200) {
      toast.success("Registration successful!");
      setData({
        name: "",
        email: "",
        institute: "NIT SILCHAR",
        phone: "",
        paymentProof: "",
        scholar_id: "",
        previousExperience: "",
        branch: "",
        year: "",
        choice1: "Commitee 1",
        choice2: "Commitee 1",
        choice3: "Commitee 1",
      });
      navigate("/events/Annual/successfull");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "nitsmun_payments");
      data.append("cloud_name", "dhry5xscm");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dhry5xscm/image/upload",
        data,
      );
      // setData((prev)=>{...prev,"paymentProof":res.data.url});
      setData((prev) => ({
        ...prev,
        paymentProof: res.data.url,
      }));
    }
  };
  return (
    <div className={styles.register}>
      <h1 className={styles.registerHeading}>Register Now</h1>

      <form action="" className={styles.registerForm}>
        <div className={styles.headingForm}>
          <div className={styles.textBox}>
            <h1>Youth Parliament Online Registration Form</h1>
            {!localStorage.getItem("email") ? (
              <p>
                You need to{" "}
                <u onClick={handleClick} style={{ cursor: "pointer" }}>
                  Login
                </u>{" "}
                before registering
              </p>
            ) : (
              <p>
                Please fill in the form below. We'll contact you as soon as
                possible.
              </p>
            )}
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
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              disabled={!localStorage.getItem("email")}
              required
            />
          </div>
          <label htmlFor="IsNITS">Are you a student of NIT Silchar?</label>
          <div className={styles.formBranch}>
            <div>
              <input
                type="radio"
                name="isNITS"
                value="Yes"
                id="Yes"
                checked={selectedValue === "Yes"}
                onChange={handleRadioChangeNITS}
                disabled={!localStorage.getItem("email")}
              />
              <span>Yes</span>
            </div>
            <div>
              <input
                type="radio"
                name="isNITS"
                value="No"
                id="No"
                checked={selectedValue === "No"}
                onChange={handleRadioChangeNITS}
                disabled={!localStorage.getItem("email")}
              />
              <span>No</span>
            </div>
          </div>
          {selectedValue === "Yes" ? (
            <>
              <label htmlFor="Branch">Branch</label>
              <div className={styles.formBranch}>
                <input
                  type="text"
                  name="branch"
                  value={data.branch}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      branch: e.target.value,
                    }))
                  }
                  disabled={!localStorage.getItem("email")}
                  required
                />
              </div>

              <div className={styles.formId}>
                <div className={styles.year}>
                  <label htmlFor="">Year</label>
                  <input
                    type="text"
                    value={data.year}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        year: e.target.value,
                      }))
                    }
                    disabled={!localStorage.getItem("email")}
                  />
                </div>
                <div className={styles.year}>
                  <label htmlFor="">Scholar ID</label>
                  <input
                    type="text"
                    value={data.scholar_id}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        scholar_id: e.target.value,
                      }))
                    }
                    disabled={!localStorage.getItem("email")}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <label htmlFor="Name">Name of your Institution</label>
              <div className={styles.formBranch}>
                <input
                  type="text"
                  name="name"
                  value={selectedValue === "No" ? "" : data.institute}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      institute: e.target.value,
                    }))
                  }
                  required
                  disabled={!localStorage.getItem("email")}
                />
              </div>
            </>
          )}
          <label htmlFor="Email">Email</label>
          <div className={styles.formBranch}>
            <input
              type="email"
              name="email"
              value={localStorage.getItem("email") ?? data.email}
              disabled={true}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              required
            />
          </div>

          <label htmlFor="Phone">Phone Number</label>
          <div className={styles.formBranch}>
            <input
              type="text"
              name="phone"
              value={data.phone}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
              required
              disabled={!localStorage.getItem("email")}
            />
          </div>

          <label htmlFor="Experiences">Previous MUN Experiences (if any)</label>
          <div className={styles.formBranch}>
            <textarea
              name="experience"
              value={data.previousExperience}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  previousExperience: e.target.value,
                }))
              }
              id=""
              disabled={!localStorage.getItem("email")}
            ></textarea>
          </div>

          <label htmlFor="committee">Committee Preferences</label>
          <p className={styles.desc}>
            (Due to limited capacity, delegates are informed that the committee
            preference are not always met and are not guaranteed.)
          </p>

          <div className={styles.formRadio}>
            <div>
              <label htmlFor="Preference 1">Preference 1</label>
              <select
                value={data.choice1} // Controlled value linked to state
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    choice1: e.target.value, // Update the `choice1` key with the selected value
                  }))
                }
                disabled={!localStorage.getItem("email")}
              >
                {!committee1 && (
                  <option
                    value="Committee 1"
                    disabled={!localStorage.getItem("email")}
                  >
                    Committee 1
                  </option>
                )}
                {!committee2 && (
                  <option
                    value="Committee 2"
                    disabled={!localStorage.getItem("email")}
                  >
                    Committee 2
                  </option>
                )}
                {!committee3 && (
                  <option
                    value="Committee 3"
                    disabled={!localStorage.getItem("email")}
                  >
                    Committee 3
                  </option>
                )}
              </select>
            </div>
            <div>
              <label htmlFor="Preference 2">Preference 2</label>
              <select
                value={data.choice2} // Controlled value linked to state
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    choice2: e.target.value, // Update the `choice1` key with the selected value
                  }))
                }
                disabled={!localStorage.getItem("email")}
              >
                {!committee1 && (
                  <option
                    disabled={!localStorage.getItem("email")}
                    value="Committee 1"
                  >
                    Committee 1
                  </option>
                )}
                {!committee2 && (
                  <option
                    disabled={!localStorage.getItem("email")}
                    value="Committee 2"
                  >
                    Committee 2
                  </option>
                )}
                {!committee3 && (
                  <option
                    disabled={!localStorage.getItem("email")}
                    value="Committee 3"
                  >
                    Committee 3
                  </option>
                )}
              </select>
            </div>
            <div>
              <label htmlFor="Preference 3">Preference 3</label>
              <select
                value={data.choice3} // Controlled value linked to state
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    choice3: e.target.value, // Update the `choice1` key with the selected value
                  }))
                }
                disabled={!localStorage.getItem("email")}
              >
                {!committee1 && (
                  <option
                    disabled={!localStorage.getItem("email")}
                    value="Committee 1"
                  >
                    Committee 1
                  </option>
                )}
                {!committee2 && (
                  <option
                    disabled={!localStorage.getItem("email")}
                    value="Committee 2"
                  >
                    Committee 2
                  </option>
                )}
                {!committee3 && (
                  <option
                    disabled={!localStorage.getItem("email")}
                    value="Committee 3"
                  >
                    Committee 3
                  </option>
                )}
              </select>
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
                <input type="file" onChange={handleImageUpload} />
              </div>

              <button onClick={onSubmitHandler}> Submit </button>
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
      <Toaster />
    </div>
  );
};

export default Register;
