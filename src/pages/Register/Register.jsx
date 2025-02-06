import React from "react";
import styles from "./Register.module.scss";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { auth, provider } from "../../config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  institute: z.string().min(1, "Institute is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  paymentProof: z.string().min(1, "Payment proof is required"),
  scholar_id: z.string().optional(),
  previousExperience: z.string().optional(),
  branch: z.string().optional(),
  year: z.enum(["FIRST", "SECOND", "THIRD", "FOURTH"]),
  choice1: z.string().min(1, "Choice 1 is required"),
  choice2: z.string().min(1, "Choice 2 is required"),
  choice3: z.string().min(1, "Choice 3 is required"),
  choice4: z.string().min(1, "Choice 4 is required"),
  members: z.array(z.string()).optional(),
  portfolioC11: z.string().optional(),
  portfolioC12: z.string().optional(),
  portfolioC13: z.string().optional(),
  portfolioC21: z.string().optional(),
  portfolioC22: z.string().optional(),
  portfolioC23: z.string().optional(),
  portfolioC31: z.string().optional(),
  portfolioC32: z.string().optional(),
  portfolioC33: z.string().optional(),
  portfolioC41: z.string().optional(),
  portfolioC42: z.string().optional(),
  portfolioC43: z.string().optional(),
});

const Register = () => {
  const [selectedValue, setSelectedValue] = useState("Yes");
  const [isGroup, setIsGroup] = useState("No");
  const [numMembers, setNumMembers] = useState(1);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: localStorage.getItem("email") ?? "",
      institute: "NIT SILCHAR",
      phone: "",
      paymentProof: "",
      scholar_id: "",
      previousExperience: "",
      branch: "",
      year: "FIRST",
      choice1: "UNHCR",
      choice2: "UNHCR",
      choice3: "UNHCR",
      choice4: "UNHCR",
      members: [],
      portfolioC11: "",
      portfolioC12: "",
      portfolioC13: "",
      portfolioC21: "",
      portfolioC22: "",
      portfolioC23: "",
      portfolioC31: "",
      portfolioC32: "",
      portfolioC33: "",
      portfolioC41: "",
      portfolioC42: "",
      portfolioC43: "",
    },
  });

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      if (data.user && data.user.email) {
        const userEmail = data.user.email.toLowerCase();
        localStorage.setItem("email", userEmail);
        setValue("email", userEmail);
      } else {
        console.error("Error retrieving user data during sign-in.");
      }
    });
  };

  const handleRadioChangeNITS = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleRadioChangeIsGroup = (event) => {
    setIsGroup(event.target.value);
    if (event.target.value === "Yes") {
      setValue("members", [""]);
    } else {
      setValue("members", []);
    }
  };

  const onSubmitHandler = async (data, event) => {
    event?.preventDefault();
    const apiCall = axios.post(
      `${import.meta.env.VITE_APP_API}/participant/add`,
      data,
    );

    // Use the API call as a promise in toast.promise
    toast.promise(apiCall, {
      loading: "Registering...Please wait!!",
      success: "Registration successful!",
      error: "An error occurred. Please try again.",
    });

    try {
      const response = await apiCall;
      if (response.status === 200) {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // 2s delay
        navigate("/successfull");
      }
    } catch (error) {
      console.error(error);
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
      setValue("paymentProof", res.data.url);
    }
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.registerHeading}>Register Now</h1>

      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className={styles.registerForm}
      >
        <div className={styles.headingForm}>
          <div className={styles.textBox}>
            <h1>Annual Conference Online Registration Form</h1>
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
              {...register("name")}
              disabled={!localStorage.getItem("email")}
              required
            />
            {errors.name && (
              <p className={styles.error}>{errors.name.message}</p>
            )}
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
                  {...register("branch")}
                  disabled={!localStorage.getItem("email")}
                  required
                />
                {errors.branch && (
                  <p className={styles.error}>{errors.branch.message}</p>
                )}
              </div>

              <div className={styles.formId}>
                <div className={styles.year}>
                  <label htmlFor="">Year</label>
                  <select
                    {...register("year")}
                    disabled={!localStorage.getItem("email")}
                  >
                    <option value="FIRST">FIRST</option>
                    <option value="SECOND">SECOND</option>
                    <option value="THIRD">THIRD</option>
                    <option value="FOURTH">FOURTH</option>
                  </select>
                  {errors.year && (
                    <p className={styles.error}>{errors.year.message}</p>
                  )}
                </div>
                <div className={styles.year}>
                  <label htmlFor="">Scholar ID</label>
                  <input
                    type="text"
                    {...register("scholar_id")}
                    disabled={!localStorage.getItem("email")}
                  />
                  {errors.scholar_id && (
                    <p className={styles.error}>{errors.scholar_id.message}</p>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <label htmlFor="Name">Name of your Institution</label>
              <div className={styles.formBranch}>
                <input
                  type="text"
                  {...register("institute")}
                  required
                  disabled={!localStorage.getItem("email")}
                />
                {errors.institute && (
                  <p className={styles.error}>{errors.institute.message}</p>
                )}
              </div>
            </>
          )}

          <label htmlFor="Email">Email</label>
          <div className={styles.formBranch}>
            <input
              type="email"
              {...register("email")}
              disabled={true}
              required
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>

          <label htmlFor="Phone">Phone Number</label>
          <div className={styles.formBranch}>
            <input
              type="text"
              {...register("phone")}
              required
              disabled={!localStorage.getItem("email")}
            />
            {errors.phone && (
              <p className={styles.error}>{errors.phone.message}</p>
            )}
          </div>

          <label htmlFor="IsGroup">Are you participating in a group?</label>
          <div className={styles.formBranch}>
            <div>
              <input
                type="radio"
                name="isGroup"
                value="Yes"
                id="Yes"
                checked={isGroup === "Yes"}
                onChange={handleRadioChangeIsGroup}
                disabled={!localStorage.getItem("email")}
              />
              <span>Yes</span>
            </div>
            <div>
              <input
                type="radio"
                name="isGroup"
                value="No"
                id="No"
                checked={isGroup === "No"}
                onChange={handleRadioChangeIsGroup}
                disabled={!localStorage.getItem("email")}
              />
              <span>No</span>
            </div>
          </div>

          {isGroup === "Yes" && (
            <div>
              {Array(numMembers)
                .fill(null)
                .map((_, index) => (
                  <div key={index}>
                    <h5>Member {index + 1}</h5>
                    <input
                      type="text"
                      {...register(`members.${index}`)}
                      placeholder={`Member ${index + 1}`}
                    />
                    {errors.members && errors.members[index] && (
                      <p className={styles.error}>
                        {errors.members[index].message}
                      </p>
                    )}
                  </div>
                ))}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setNumMembers(numMembers + 1);
                  setValue("members", [...watch("members"), ""]);
                }}
              >
                Add Member
              </button>
              {numMembers > 1 && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setNumMembers(numMembers - 1);
                    setValue("members", watch("members").slice(0, -1));
                  }}
                >
                  Delete Member
                </button>
              )}
            </div>
          )}

          <label htmlFor="Experiences">Previous MUN Experiences (if any)</label>
          <div className={styles.formBranch}>
            <textarea
              {...register("previousExperience")}
              disabled={!localStorage.getItem("email")}
            ></textarea>
            {errors.previousExperience && (
              <p className={styles.error}>
                {errors.previousExperience.message}
              </p>
            )}
          </div>

          <label htmlFor="committee">Committee Preferences</label>
          <p className={styles.desc}>
            (Due to limited capacity, delegates are informed that the committee
            preference are not always met and are not guaranteed.)
          </p>

          <h4>There are a number of portfolios available under each committee. Please checkout this doc to find the portfolios</h4>
          <a href="https://docs.google.com/spreadsheets/d/1rE8QYHugXYnRQJQqBZqa5oYuvGTRKb5BIFs2sujZk48/edit?usp=sharing" target="#">Visit here</a>

          <div className={styles.prefParent}>
            {[1, 2, 3, 4].map((index) => (
              <div className={styles.prefCont} key={index}>
                <div className={styles.prefInner}>
                  <label htmlFor={`Preference ${index}`}>
                    Preference {index}
                  </label>
                  <select
                    {...register(`choice${index}`)}
                    disabled={!localStorage.getItem("email")}
                  >
                    <option value="UNHCR">UNHCR</option>
                    <option value="UNSC">UNSC</option>
                    <option value="MGSC">MGSC</option>
                    <option value="IPC">IPC</option>
                  </select>
                  {errors[`choice${index}`] && (
                    <p className={styles.error}>
                      {errors[`choice${index}`].message}
                    </p>
                  )}
                </div>
                <div className={styles.portWrap}>
                  <h4>Portfolio Preferences</h4>
                  {[1, 2, 3].map((subIndex) => (
                    <input
                      key={subIndex}
                      type="text"
                      placeholder={`Portfolio Preference ${subIndex}`}
                      {...register(`portfolioC${index}${subIndex}`)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className={styles.formPayment}>Payment</p>
          <p className={styles.formPaymentDesc}>
            To participate in the NITS-MUN Annual Conference 2025, a
            registration fee of <span>Rs 499</span> is needed to be paid by
            every delegate. If you are participating in a group, you will need
            to pay a discounted price of <span>Rs 399</span>
          </p>

          <div className={styles.paymentCredentials}>
            <div className={styles.textCredentials}>
              <div className={styles.upiCredentials}>
                <p>aditi.khataniar@okaxis</p>
              </div>

              <div className={styles.proof}>
                <p>Payment proof: </p>
                <input type="file" onChange={handleImageUpload} />
              </div>

              <button type="submit">Submit</button>
            </div>
            <div className={styles.upiImage}>
              <img
                src="https://res.cloudinary.com/dludtk5vz/image/upload/v1738597970/WhatsApp_Image_2025-02-03_at_21.21.27_6e441ace_wtlyay.jpg"
                alt=""
              />
            </div>
          </div>

          <label>For any queries, feel free to contact us</label>
          <div className={styles.formQueries}>
            <p>+91 86587-72500</p>
            <p>+91 91013-75958</p>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Register;
