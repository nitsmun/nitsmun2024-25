// import React from "react";
// import styles from "./Register.module.scss";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Toaster, toast } from "sonner";
// import { auth, provider } from "../../config";
// import { signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// const Register = () => {
//   const [selectedValue, setSelectedValue] = useState("Yes");
//   // const [isGroup, setIsGroup] = useState("No");
//   // const [numMembers, setNumMembers] = useState(1);
//   const navigate = useNavigate();
//   const [signedin, setSignedin] = useState(false);

//   useEffect(() => {
//     setSignedin(signedin);
//   }, [signedin]);

//   const [data, setData] = useState({
//     name: "",
//     email: localStorage.getItem("email") ?? "",
//     institute: "NIT SILCHAR",
//     phone: "",
//     paymentProof: "",
//     scholar_id: "",
//     previousExperience: "",
//     branch: "",
//     year: "FIRST",
//     choice1: "UNHCR",
//     choice2: "UNHCR",
//     choice3: "UNHCR",
//     choice4: "UNHCR",
//     members: [],
//     portfolioC11: "",
//     portfolioC12: "",
//     portfolioC13: "",
//     portfolioC21: "",
//     portfolioC22: "",
//     portfolioC23: "",
//     portfolioC31: "",
//     portfolioC32: "",
//     portfolioC33: "",
//     portfolioC41: "",
//     portfolioC42: "",
//     portfolioC43: "",
//   });

//   const handleClick = () => {
//     console.log("ok");
//     signInWithPopup(auth, provider).then((data) => {
//       if (data.user && data.user.email) {
//         const userEmail = data.user.email.toLowerCase();
//         localStorage.setItem("email", userEmail);
//         setSignedin(true);
//       } else {
//         console.error("Error retrieving user data during sign-in.");
//       }
//     });
//   };
//   useEffect(() => {
//     setSelectedValue(selectedValue);
//   }, [selectedValue]);
//   // const handleRadioChangeIsGroup = (event) => {
//   //   event.preventDefault();
//   //   setIsGroup(event.target.value);
//   //   setData((prev) => ({
//   //     ...prev,
//   //     members: [...prev.members, ""],
//   //   }));
//   // };
//   // console.log(`Members:${data.members}`);
//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     console.log(data);
//     formData.append("name", data.name);
//     formData.append("email", data.email);
//     formData.append("institute", data.institute);
//     formData.append("phone", data.phone);
//     formData.append("paymentProof", data.paymentProof);
//     formData.append("scholar_id", data.scholar_id);
//     formData.append("branch", data.branch);
//     formData.append("choice1", data.choice1);
//     formData.append("choice2", data.choice2);
//     formData.append("choice3", data.choice3);
//     formData.append("choice4", data.choice4);
//     formData.append("members", data.members);
//     formData.append("portfolioC11", data.portfolioC11);
//     formData.append("portfolioC12", data.portfolioC12);
//     formData.append("portfolioC13", data.portfolioC13);
//     formData.append("portfolioC21", data.portfolioC21);
//     formData.append("portfolioC22", data.portfolioC22);
//     formData.append("portfolioC23", data.portfolioC23);
//     formData.append("portfolioC31", data.portfolioC31);
//     formData.append("portfolioC32", data.portfolioC32);
//     formData.append("portfolioC33", data.portfolioC33);
//     formData.append("portfolioC41", data.portfolioC41);
//     formData.append("portfolioC42", data.portfolioC42);
//     formData.append("portfolioC43", data.portfolioC43);

//     // Toast with loading, success, and error states
//     toast.promise(
//       axios.post(`${import.meta.env.VITE_APP_API}/participant/add`, data),
//       {
//         loading: "Registering...",
//         success: () => {
//           setTimeout(() => navigate("/successfull"), 2000); // Delay before navigating
//           setData({
//             name: "",
//             email: "",
//             institute: "NIT SILCHAR",
//             phone: "",
//             paymentProof: "",
//             scholar_id: "",
//             previousExperience: "",
//             branch: "",
//             year: "FIRST",
//             choice1: "UNHCR",
//             choice2: "UNHCR",
//             choice3: "UNHCR",
//             choice4: "UNHCR",
//             members: [],
//             portfolioC11: "",
//             portfolioC12: "",
//             portfolioC13: "",
//             portfolioC21: "",
//             portfolioC22: "",
//             portfolioC23: "",
//             portfolioC31: "",
//             portfolioC32: "",
//             portfolioC33: "",
//             portfolioC41: "",
//             portfolioC42: "",
//             portfolioC43: "",
//           });
//           return "Registration successful!";
//         },
//         error: "Something went wrong. Please try again.",
//       },
//     );
//   };

//   const handleCloudinaryUpload = async (data) => {
//     const res = await axios.post(
//       "https://api.cloudinary.com/v1_1/dhry5xscm/image/upload",
//       data,
//     );
//     setData((prev) => ({
//       ...prev,
//       paymentProof: res.data.url,
//     }));
//   };
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const data = new FormData();
//       data.append("file", file);
//       data.append("upload_preset", "nitsmun_payments");
//       data.append("cloud_name", "dhry5xscm");

//       try {
//         toast.promise(handleCloudinaryUpload(data), {
//           loading: "Uploading image...",
//           success: "Image uploaded successfully!",
//           error: "Image upload failed. Please try again!!",
//         });
//       } catch (error) {
//         console.error("Error uploading image:", error);
//       }
//     }
//   };

//   // const handleImageUpload = async (e) => {
//   //   const file = e.target.files[0];
//   //   if (file) {
//   //     const data = new FormData();
//   //     data.append("file", file);
//   //     data.append("upload_preset", "nitsmun_payments");
//   //     data.append("cloud_name", "dhry5xscm");
//   //     const res = await axios.post(
//   //       "https://api.cloudinary.com/v1_1/dhry5xscm/image/upload",
//   //       data,
//   //     );
//   //     // setData((prev)=>{...prev,"paymentProof":res.data.url});
//   //     setData((prev) => ({
//   //       ...prev,
//   //       paymentProof: res.data.url,
//   //     }));
//   //   }
//   // };
//   return (
//     <div className={styles.register}>
//       <h1 className={styles.registerHeading}>Register Now</h1>

//       <form action="" className={styles.registerForm}>
//         <div className={styles.headingForm}>
//           <div className={styles.textBox}>
//             <h1>Annual Conference Online Registration Form</h1>
//             {!localStorage.getItem("email") ? (
//               <p>
//                 Please{" "}
//                 <u onClick={handleClick} style={{ cursor: "pointer" }}>
//                   Login
//                 </u>{" "}
//                 before registering.
//               </p>
//             ) : (
//               <p>
//                 Please fill in the form below. We'll contact you as soon as
//                 possible.
//               </p>
//             )}
//           </div>

//           <div className={styles.imagebox}>
//             <img
//               src="https://res.cloudinary.com/dludtk5vz/image/upload/v1736528355/701cf080c792b3ca092745b4c39b35e1_vzk4xr.png"
//               alt=""
//             />
//           </div>
//         </div>

//         <hr
//           style={{
//             color: "black",
//             backgroundColor: "black",
//             height: 1.5,
//             border: "none",
//           }}
//         />

//         <div className={styles.formCredentials}>
//           <label htmlFor="Name">Name</label>
//           <div className={styles.formBranch}>
//             <input
//               type="text"
//               name="name"
//               value={data.name}
//               onChange={(e) =>
//                 setData((prev) => ({
//                   ...prev,
//                   name: e.target.value,
//                 }))
//               }
//               disabled={!localStorage.getItem("email")}
//               required
//             />
//           </div>
//           <label htmlFor="IsNITS">Are you a student of NIT Silchar?</label>
//           {/* <div className={styles.formBranch}>
//             <div>
//               <input
//                 type="radio"
//                 name="isNITS"
//                 value="Yes"
//                 id="Yes"
//                 checked={selectedValue === "Yes"}
//                 onChange={handleRadioChangeNITS}
//                 disabled={!localStorage.getItem("email")}
//               />
//               <span>Yes</span>
//             </div>
//             <div>
//               <input
//                 type="radio"
//                 name="isNITS"
//                 value="No"
//                 id="No"
//                 checked={selectedValue === "No"}
//                 onChange={handleRadioChangeNITS}
//                 disabled={!localStorage.getItem("email")}
//               />
//               <span>No</span>
//             </div>
//           </div> */}
//           <div
//             className={styles.myRadioButton}
//             style={{
//               gap: "2px",
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "flex-start",
//             }}
//           >
//             <button
//               style={{
//                 backgroundColor: `${selectedValue === "Yes" ? "black" : "transparent"}`,
//                 color: `${selectedValue === "Yes" ? "white" : "black"}`,
//               }}
//               onClick={(e) => {
//                 e.preventDefault();
//                 setSelectedValue("Yes");
//               }}
//             >
//               Yes
//             </button>
//             <button
//               style={{
//                 backgroundColor: `${selectedValue === "No" ? "black" : "transparent"}`,
//                 color: `${selectedValue === "No" ? "white" : "black"}`,
//               }}
//               onClick={(e) => {
//                 e.preventDefault();
//                 setSelectedValue("No");
//               }}
//             >
//               No
//             </button>
//           </div>
//           {selectedValue === "Yes" ? (
//             <>
//               <label htmlFor="Branch">Branch</label>
//               <div className={styles.formBranch}>
//                 <input
//                   type="text"
//                   name="branch"
//                   value={data.branch}
//                   onChange={(e) =>
//                     setData((prev) => ({
//                       ...prev,
//                       branch: e.target.value,
//                     }))
//                   }
//                   disabled={!localStorage.getItem("email")}
//                   required
//                 />
//               </div>

//               <div className={styles.formId}>
//                 <div className={styles.year}>
//                   <label htmlFor="">Year</label>
//                   {/* <input
//                     type="text"
//                     value={data.year}
//                     onChange={(e) =>
//                       setData((prev) => ({
//                         ...prev,
//                         year: e.target.value,
//                       }))
//                     }
//                     disabled={!localStorage.getItem("email")}
//                   /> */}
//                   <select
//                     value={data.year}
//                     onChange={(e) =>
//                       setData((prevData) => ({
//                         ...prevData,
//                         year: e.target.value,
//                       }))
//                     }
//                     disabled={!localStorage.getItem("email")}
//                   >
//                     <option
//                       disabled={!localStorage.getItem("email")}
//                       value="FIRST"
//                     >
//                       FIRST
//                     </option>
//                     <option
//                       disabled={!localStorage.getItem("email")}
//                       value="SECOND"
//                     >
//                       SECOND
//                     </option>
//                     <option
//                       disabled={!localStorage.getItem("email")}
//                       value="THIRD"
//                     >
//                       THIRD
//                     </option>
//                     <option
//                       disabled={!localStorage.getItem("email")}
//                       value="FOURTH"
//                     >
//                       FOURTH
//                     </option>
//                   </select>
//                 </div>
//                 <div className={styles.year}>
//                   <label htmlFor="">Scholar ID</label>
//                   <input
//                     type="text"
//                     value={data.scholar_id}
//                     onChange={(e) =>
//                       setData((prev) => ({
//                         ...prev,
//                         scholar_id: e.target.value,
//                       }))
//                     }
//                     disabled={!localStorage.getItem("email")}
//                   />
//                 </div>
//               </div>
//             </>
//           ) : (
//             <>
//               <label htmlFor="Name">Name of your Institution</label>
//               <div className={styles.formBranch}>
//                 <input
//                   type="text"
//                   name="name"
//                   value={data.institute}
//                   onChange={(e) =>
//                     setData((prev) => ({
//                       ...prev,
//                       institute: e.target.value,
//                     }))
//                   }
//                   required
//                   disabled={!localStorage.getItem("email")}
//                 />
//               </div>
//             </>
//           )}
//           <label htmlFor="Email">Email</label>
//           <div className={styles.formBranch}>
//             <input
//               type="email"
//               name="email"
//               value={localStorage.getItem("email") ?? data.email}
//               disabled={true}
//               onChange={(e) =>
//                 setData((prev) => ({
//                   ...prev,
//                   email: e.target.value,
//                 }))
//               }
//               required
//             />
//           </div>

//           <label htmlFor="Phone">Phone Number</label>
//           <div className={styles.formBranch}>
//             <input
//               type="text"
//               name="phone"
//               value={data.phone}
//               onChange={(e) =>
//                 setData((prev) => ({
//                   ...prev,
//                   phone: e.target.value,
//                 }))
//               }
//               required
//               disabled={!localStorage.getItem("email")}
//             />
//           </div>
//           {/* <label htmlFor="IsGroup">Are you participating in a group?</label> */}
//           {/* <div className={styles.formBranch}>
//             <div>
//               <input
//                 type="radio"
//                 name="isGroup"
//                 value="Yes"
//                 id="Yes"
//                 checked={isGroup === "Yes"}
//                 onChange={handleRadioChangeIsGroup}
//                 disabled={!localStorage.getItem("email")}
//               />
//               <span>Yes</span>
//             </div>
//             <div>
//               <input
//                 type="radio"
//                 name="isGroup"
//                 value="No"
//                 id="No"
//                 checked={isGroup === "No"}
//                 onChange={handleRadioChangeIsGroup}
//                 disabled={!localStorage.getItem("email")}
//               />
//               <span>No</span>
//             </div>
//           </div> */}
//           {/* {isGroup === "Yes" ? (
//             <div>
//               {Array(numMembers)
//                 .fill(null)
//                 .map((_, index) => (
//                   <div key={index}>
//                     <h5>Member {index + 1}</h5>
//                     <input
//                       type="text"
//                       value={data.members[index]}
//                       onChange={(e) =>
//                         setData((prev) => ({
//                           ...prev,
//                           members: prev.members.map((member, i) =>
//                             i === index ? e.target.value : member,
//                           ),
//                         }))
//                       }
//                       placeholder={`Member ${index + 1}`}
//                     />
//                   </div>
//                 ))}
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setNumMembers(numMembers + 1);
//                   setData((prev) => ({
//                     ...prev,
//                     members: [...prev.members, ""],
//                   }));
//                 }}
//               >
//                 Add Member
//               </button>
//               {numMembers > 1 ? (
//                 <button
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setNumMembers(numMembers - 1);
//                     setData((prev) => ({
//                       ...prev,
//                       members: prev.members.slice(0, -1),
//                     }));
//                   }}
//                 >
//                   Delete Member
//                 </button>
//               ) : null}
//             </div>
//           ) : null} */}
//           <label htmlFor="Experiences">Previous MUN Experiences (if any)</label>
//           <div className={styles.formBranch}>
//             <textarea
//               name="experience"
//               value={data.previousExperience}
//               onChange={(e) =>
//                 setData((prev) => ({
//                   ...prev,
//                   previousExperience: e.target.value,
//                 }))
//               }
//               id=""
//               disabled={!localStorage.getItem("email")}
//             ></textarea>
//           </div>

//           <label htmlFor="committee">Committee Preferences</label>
//           <p className={styles.desc}>
//             (Due to limited capacity, delegates are informed that the committee
//             preference are not always met and are not guaranteed.)
//           </p>

//           <h4>
//             There are a number of portfolios available under each committee.
//             Please checkout this doc to find the portfolios
//           </h4>
//           <a
//             href="https://docs.google.com/spreadsheets/d/1rE8QYHugXYnRQJQqBZqa5oYuvGTRKb5BIFs2sujZk48/edit?usp=sharing"
//             style={{
//               textDecoration: "underline",
//               display: "inline",
//               fontSize: "18px",
//             }}
//             target="#"
//           >
//             Visit here to view the portfolio matrix
//           </a>

//           <div className={styles.prefParent}>
//             <div className={styles.prefCont}>
//               <div className={styles.prefInner}>
//                 <label htmlFor="Preference 1">Preference 1</label>
//                 <select
//                   value={data.choice1} // Controlled value linked to state
//                   onChange={(e) =>
//                     setData((prevData) => ({
//                       ...prevData,
//                       choice1: e.target.value, // Update the `choice1` key with the selected value
//                     }))
//                   }
//                   disabled={!localStorage.getItem("email")}
//                 >
//                   <option
//                     value="UNHCR"
//                     disabled={!localStorage.getItem("email")}
//                   >
//                     UNHCR
//                   </option>
//                   <option
//                     value="UNSC"
//                     disabled={!localStorage.getItem("email")}
//                   >
//                     UNSC
//                   </option>
//                   <option
//                     value="MGSC"
//                     disabled={!localStorage.getItem("email")}
//                   >
//                     MGSC
//                   </option>
//                   <option value="IPC" disabled={!localStorage.getItem("email")}>
//                     IPC
//                   </option>
//                 </select>
//               </div>
//               <div className={styles.portWrap}>
//                 <h4>Portfolio Preferences</h4>
//                 <input
//                   type="text"
//                   placeholder="Portfolio Preference 1"
//                   value={data.portfolioC11}
//                   onChange={(e) =>
//                     setData((prev) => ({
//                       ...prev,
//                       portfolioC11: e.target.value,
//                     }))
//                   }
//                 />
//                 <input
//                   type="text"
//                   placeholder="Portfolio Preference 2"
//                   value={data.portfolioC12}
//                   onChange={(e) =>
//                     setData((prev) => ({
//                       ...prev,
//                       portfolioC12: e.target.value,
//                     }))
//                   }
//                 />
//                 <input
//                   type="text"
//                   placeholder="Portfolio Preference 3"
//                   value={data.portfolioC13}
//                   onChange={(e) =>
//                     setData((prev) => ({
//                       ...prev,
//                       portfolioC13: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//             </div>
//             <div className={styles.prefCont}>
//               <div className={styles.prefInner}>
//                 <label htmlFor="Preference 2">Preference 2</label>
//                 <select
//                   value={data.choice2} // Controlled value linked to state
//                   onChange={(e) =>
//                     setData((prevData) => ({
//                       ...prevData,
//                       choice2: e.target.value, // Update the `choice1` key with the selected value
//                     }))
//                   }
//                   disabled={!localStorage.getItem("email")}
//                 >
//                   <option
//                     value="UNHCR"
//                     disabled={!localStorage.getItem("email")}
//                   >
//                     UNHCR
//                   </option>
//                   <option
//                     value="UNSC"
//                     disabled={!localStorage.getItem("email")}
//                   >
//                     UNSC
//                   </option>
//                   <option
//                     value="MGSC"
//                     disabled={!localStorage.getItem("email")}
//                   >
//                     MGSC
//                   </option>
//                   <option value="IPC" disabled={!localStorage.getItem("email")}>
//                     IPC
//                   </option>
//                 </select>
//               </div>
//               <div className={styles.portWrap}>
//                 <h4>Portfolio Preferences</h4>
//                 <input
//                   type="text"
//                   placeholder="Portfolio Preference 1"
//                   value={data.portfolioC21}
//                   onChange={(e) =>
//                     setData((prev) => ({
//                       ...prev,
//                       portfolioC21: e.target.value,
//                     }))
//                   }
//                 />
//                 <input
//                   type="text"
//                   placeholder="Portfolio Preference 2"
//                   value={data.portfolioC22}
//                   onChange={(e) =>
//                     setData((prev) => ({
//                       ...prev,
//                       portfolioC22: e.target.value,
//                     }))
//                   }
//                 />
//                 <input
//                   type="text"
//                   placeholder="Portfolio Preference 3"
//                   value={data.portfolioC23}
//                   onChange={(e) =>
//                     setData((prev) => ({
//                       ...prev,
//                       portfolioC23: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//             </div>
//             <div className={styles.prefCont}>
//               <div className={styles.prefInner}>
//                 <label htmlFor="Preference 3">Preference 3</label>
//                 <select
//                   value={data.choice3} // Controlled value linked to state
//                   onChange={(e) =>
//                     setData((prevData) => ({
//                       ...prevData,
//                       choice3: e.target.value, // Update the `choice1` key with the selected value
//                     }))
//                   }
//                   disabled={!localStorage.getItem("email")}
//                 >
//                   <option
//                     value="UNHCR"
//                     disabled={!localStorage.getItem("email")}
//                   >
//                     UNHCR
//                   </option>
//                   <option
//                     value="UNSC"
//                     disabled={!localStorage.getItem("email")}
//                   >
//                     UNSC
//                   </option>
//                   <option
//                     value="MGSC"
//                     disabled={!localStorage.getItem("email")}
//                   >
//                     MGSC
//                   </option>
//                   <option value="IPC" disabled={!localStorage.getItem("email")}>
//                     IPC
//                   </option>
//                 </select>
//               </div>
//               <div className={styles.portWrap}>
//                 <h4>Portfolio Preferences</h4>
//                 <input
//                   type="text"
//                   placeholder="Portfolio preference 1"
//                   value={data.portfolioC31}
//                   onChange={(e) =>
//                     setData((prev) => ({
//                       ...prev,
//                       portfolioC31: e.target.value,
//                     }))
//                   }
//                 />
//                 <input
//                   type="text"
//                   placeholder="Portfolio preference 2"
//                   value={data.portfolioC32}
//                   onChange={(e) =>
//                     setData((prev) => ({
//                       ...prev,
//                       portfolioC32: e.target.value,
//                     }))
//                   }
//                 />
//                 <input
//                   type="text"
//                   placeholder="Portfolio preference 3"
//                   value={data.portfolioC33}
//                   onChange={(e) =>
//                     setData((prev) => ({
//                       ...prev,
//                       portfolioC33: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//             </div>
//             <div className={styles.prefCont}>
//               <div className={styles.prefInner}>
//                 <label htmlFor="Preference 4">Preference 4</label>
//                 <select
//                   value={data.choice4} // Controlled value linked to state
//                   onChange={(e) =>
//                     setData((prevData) => ({
//                       ...prevData,
//                       choice4: e.target.value, // Update the `choice1` key with the selected value
//                     }))
//                   }
//                   disabled={!localStorage.getItem("email")}
//                 >
//                   <option
//                     value="UNHCR"
//                     disabled={!localStorage.getItem("email")}
//                   >
//                     UNHCR
//                   </option>
//                   <option
//                     value="UNSC"
//                     disabled={!localStorage.getItem("email")}
//                   >
//                     UNSC
//                   </option>
//                   <option
//                     value="MGSC"
//                     disabled={!localStorage.getItem("email")}
//                   >
//                     MGSC
//                   </option>
//                   <option value="IPC" disabled={!localStorage.getItem("email")}>
//                     IPC
//                   </option>
//                 </select>
//               </div>
//               <div className={styles.portWrap}>
//                 <h4>Portfolio Preferences</h4>
//                 <input
//                   type="text"
//                   placeholder="Portfolio preference 1"
//                   value={data.portfolioC41}
//                   onChange={(e) =>
//                     setData((prev) => ({
//                       ...prev,
//                       portfolioC41: e.target.value,
//                     }))
//                   }
//                 />
//                 <input
//                   type="text"
//                   placeholder="Portfolio preference 2"
//                   value={data.portfolioC42}
//                   onChange={(e) =>
//                     setData((prev) => ({
//                       ...prev,
//                       portfolioC42: e.target.value,
//                     }))
//                   }
//                 />
//                 <input
//                   type="text"
//                   placeholder="Portfolio preference 3"
//                   value={data.portfolioC43}
//                   onChange={(e) =>
//                     setData((prev) => ({
//                       ...prev,
//                       portfolioC43: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//             </div>
//           </div>

//           <p className={styles.formPayment}>Payment</p>
//           <p className={styles.formPaymentDesc}>
//             To complete your registration for the NITS-MUN Annual Conference
//             2025, please make a payment of <span>₹349</span> using the QR code
//             provided below and upload a screenshot of the payment confirmation.
//           </p>

//           <div className={styles.paymentCredentials}>
//             <div className={styles.textCredentials}>
//               <div className={styles.upiCredentials}>
//                 <p>aditi.khataniar@okaxis</p>
//                 {/* <p>Lorem ipsum dolor sit.</p>
//                 <p>Lorem ipsum dolor sit.</p> */}
//               </div>

//               <div className={styles.proof}>
//                 <p>Payment proof: </p>
//                 <input type="file" onChange={handleImageUpload} />
//               </div>
//               <button
//                 onClick={onSubmitHandler}
//                 disabled={
//                   data.name === "" ||
//                   data.email === "" ||
//                   data.phone === "" ||
//                   data.institute === "" ||
//                   data.paymentProof === ""
//                 }
//               >
//                 Submit
//               </button>
//             </div>
//             <div className={styles.upiImage}>
//               <img
//                 src="https://res.cloudinary.com/dludtk5vz/image/upload/v1738597970/WhatsApp_Image_2025-02-03_at_21.21.27_6e441ace_wtlyay.jpg"
//                 alt="qr"
//                 style={{ objectFit: "cover" }}
//               />
//             </div>
//           </div>
//           <label>For any queries, feel free to contact us</label>
//           <div className={styles.formQueries}>
//             <p>+91{"  "}86587-72500</p>
//             <p>+91{"  "}91013-75958</p>
//             {/* <p>Lorem ipsum dolor sit.</p> */}
//           </div>
//         </div>
//       </form>
//       <Toaster />
//     </div>
//   );
// };

// export default Register;

"use client"

import { useState } from "react"
import styles from "./Register.module.scss"

export default function Register() {
  const [selectedLocation, setSelectedLocation] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    scholarNumber: "",
    year: "",
    institute: "",
    city: "",
    state: "",
    previousExperience: "",
    choice1: "",
    portfolioC11: "",
    portfolioC12: "",
    portfolioC13: "",
    choice2: "",
    portfolioC21: "",
    portfolioC22: "",
    portfolioC23: "",
    choice3: "",
    portfolioC31: "",
    portfolioC32: "",
    portfolioC33: "",
    choice4: "",
    portfolioC41: "",
    portfolioC42: "",
    portfolioC43: "",
    paymentProof: "",
    recordEmail: false,
    gender: "",
    college: "",
    collegeLocation: "",
    yearOfStudy: "",
    phoneWhatsapp: "",
    accommodationRequired: "",
    course: "",
    committeePreference1: "",
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const getPortfolioMatrixLink = () => {
  switch (selectedLocation) {
    case "within":
      return "https://docs.google.com/spreadsheets/d/1pSvvn-gLqDXOgGeLcdE4VEwuBL1jRgRTsGNsm5-1I3Q/edit?usp=sharing";
    case "outside-nit":
      return "https://docs.google.com/spreadsheets/d/1pSvvn-gLqDXOgGeLcdE4VEwuBL1jRgRTsGNsm5-1I3Q/edit?usp=sharing";
    case "outside-silchar":
      return "https://docs.google.com/spreadsheets/d/1pSvvn-gLqDXOgGeLcdE4VEwuBL1jRgRTsGNsm5-1I3Q/edit?usp=sharing";
    default:
      return "#";
  }
};

const PAYMENT_CONFIG = {
  within: {
    title: "Payment - Within NIT Silchar",
    description: "Please Pay",
    show: false,

    loc:"",
    regularPrice: "₹349",
    p3:"",
    qrImage:
      "https://res.cloudinary.com/dludtk5vz/image/upload/v1738597970/WhatsApp_Image_2025-02-03_at_21.21.27_6e441ace_wtlyay.jpg",
  },

  "outside-nit": {
    title: "Payment - Outside NIT Silchar",
    description: (
      <>To finalize your registration for <strong>NITSMUN 2026</strong>, please complete the payment as outlined below. This fee is specifically curated for local delegates, ensuring you are part of the premier diplomatic event of the region while enjoying the full spirit of our campus festival.</>
    ),
    show: false,
    loc:"",
    regularPrice: "₹799",
    p3:(
      <><p className={styles.inclusionsTitle}>Inclusions</p>
      <ul className={styles.inclusionsList}>
        <li>Conference entry</li>
        <li>Official delegate kit</li>
        <li>Full access to all Incandescence artist lineups & pro-shows</li>
      </ul></>
    ),
    qrImage:
      "https://res.cloudinary.com/dludtk5vz/image/upload/v1738597970/WhatsApp_Image_2025-02-03_at_21.21.27_6e441ace_wtlyay.jpg",
  },

  "outside-silchar": {
    title: "Payment - Outside Silchar",
    description: (
      <>
      To confirm your slot at <strong>NITSMUN 2026</strong>, please complete the
      registration payment as per the structure below. Your registration fee is
      an all-inclusive pass that covers conference participation, official MUN
      kits, and unrestricted access to all <strong>Incandescence</strong> events.</>
    ),
    show: true,
    loc:(
      <>
        <p className={styles.feeType}>Early Bird Registrations</p>
        <p className={styles.feePrice}>₹2,249</p>
        <p className={styles.feeNote}>(Valid until 31st December 2025)</p>
      </>
    ),
    regularPrice: "₹2,499",
    p3:(
      <><p className={styles.inclusionsTitle}>Inclusions</p>
      <ul className={styles.inclusionsList}>
        <li>Conference entry</li>
        <li>Official delegate kit</li>
        <li>Full access to all Incandescence artist lineups & pro-shows</li>
      </ul></>
    ),
    qrImage:
      "https://res.cloudinary.com/dludtk5vz/image/upload/v1738597970/WhatsApp_Image_2025-02-03_at_21.21.27_6e441ace_wtlyay.jpg",
  },
}


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Registration submitted successfully!")
  }

  const renderFormContent = () => {
    if (!selectedLocation) return null

    const commonFields = (
      <>
        <label htmlFor="email" className={styles.label}>
            Email <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputContainer}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email"
              className={styles.textInput}
              required
            />
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                name="recordEmail"
                checked={formData.recordEmail}
                onChange={handleInputChange}
                className={styles.checkbox}
              />
              <label className={styles.checkboxLabel}>
                Record <span className={styles.emailHighlight}>84agarwalharshit@gmail.com</span> as the email to be
                included with my response
              </label>
            </div>
          </div>

        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.textInput}
            required
          />
        </div>

        <label htmlFor="phone" className={styles.label}>
          Phone Number
        </label>
        <div className={styles.inputWrapper}>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className={styles.textInput}
            required
          />
        </div>
      </>
    )

    if (selectedLocation === "within") {
      return (
        <>
          {commonFields}

          <label htmlFor="branch" className={styles.label}>
            Branch
          </label>
          <div className={styles.inputWrapper}>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleInputChange}
              className={styles.textInput}
              required
            >
              <option value="" disabled>
                -- Select Branch --
              </option>
              <option value="Computer Science and Engineering">Computer Science and Engineering</option>
              <option value="Electronics and Communication Engineering">
                Electronics and Communication Engineering
              </option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Electronics and Instrumentation Engineering">
                Electronics and Instrumentation Engineering
              </option>
            </select>
          </div>

          <label htmlFor="scholarNumber" className={styles.label}>
            Scholar Number
          </label>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="scholarNumber"
              placeholder="Enter Your Scholar ID"
              value={formData.scholarNumber}
              onChange={handleInputChange}
              className={styles.textInput}
              required
            />
          </div>

          <label htmlFor="year" className={styles.label}>
            Year
          </label>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              className={styles.textInput}
              placeholder="e.g., 1st Year, 2nd Year, etc."
              required
            />
          </div>

          {committeePreferencesOutside()}
          {paymentSection({ location: selectedLocation })}

          <div className={styles.prizePoolSection}>
            <h2 className={styles.prizePoolTitle}>Prize Pool & Recognition</h2>
            <ul className={styles.prizeList}>
              <li className={styles.prizeItem}>
                <strong>Best Delegate:</strong> ₹5,000
              </li>
              <li className={styles.prizeItem}>
                <strong>High Commendation:</strong> ₹3,500
              </li>
              <li className={styles.prizeItem}>
                <strong>Best Reporter (IPC):</strong> ₹3,500
              </li>
              <li className={styles.prizeItem}>
                <strong>Best Photojournalist (IPC):</strong> ₹3,500
              </li>
            </ul>
          </div>
        </>
      )
    }

    if (selectedLocation === "outside-nit") {
      return (
        <>
          {commonFields}

          <label htmlFor="institute" className={styles.label}>
            Institute Name
          </label>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="institute"
              placeholder="Enter Your Institute Name"
              value={formData.institute}
              onChange={handleInputChange}
              className={styles.textInput}
              required
            />
          </div>

          <label htmlFor="branch" className={styles.label}>
            Course
          </label>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="branch"
              placeholder="Enter Your Course Name"
              value={formData.branch}
              onChange={handleInputChange}
              className={styles.textInput}
              required
            />
          </div>

          <label htmlFor="year" className={styles.label}>
            Year of Study
          </label>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              className={styles.textInput}
              placeholder="e.g., 1st Year, 2nd Year, etc."
              required
            />
          </div>

          {committeePreferencesOutside()}
          {paymentSection({ location: selectedLocation })}
          <div className={styles.prizePoolSection}>
            <h2 className={styles.prizePoolTitle}>Prize Pool & Recognition</h2>
            <ul className={styles.prizeList}>
              <li className={styles.prizeItem}>
                <strong>Best Delegate:</strong> ₹5,000
              </li>
              <li className={styles.prizeItem}>
                <strong>High Commendation:</strong> ₹3,500
              </li>
              <li className={styles.prizeItem}>
                <strong>Best Reporter (IPC):</strong> ₹3,500
              </li>
              <li className={styles.prizeItem}>
                <strong>Best Photojournalist (IPC):</strong> ₹3,500
              </li>
            </ul>
          </div>
        </>
      )
    }

    if (selectedLocation === "outside-silchar") {
      return (
        <>
          <label htmlFor="email" className={styles.label}>
            Email <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputContainer}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email"
              className={styles.textInput}
              required
            />
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                name="recordEmail"
                checked={formData.recordEmail}
                onChange={handleInputChange}
                className={styles.checkbox}
              />
              <label className={styles.checkboxLabel}>
                Record <span className={styles.emailHighlight}>84agarwalharshit@gmail.com</span> as the email to be
                included with my response
              </label>
            </div>
          </div>

          <label htmlFor="name" className={styles.label}>
            Name <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Your Name"
              className={styles.textInput}
              required
            />
          </div>

          <label htmlFor="gender" className={styles.label}>
            Gender <span className={styles.required}>*</span>
          </label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleInputChange}
                className={styles.radio}
                required
              />
              <span>Male</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleInputChange}
                className={styles.radio}
              />
              <span>Female</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleInputChange}
                className={styles.radio}
              />
              <span>Other</span>
            </label>
          </div>

          <label htmlFor="college" className={styles.label}>
            College <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleInputChange}
              placeholder="Enter Your College Name"
              className={styles.textInput}
              required
            />
          </div>

          <label htmlFor="collegeLocation" className={styles.label}>
            College Location <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="collegeLocation"
              value={formData.collegeLocation}
              onChange={handleInputChange}
              placeholder="Enter Your College Location"
              className={styles.textInput}
              required
            />
          </div>

          <label htmlFor="yearOfStudy" className={styles.label}>
            Year of Study <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleInputChange}
              placeholder="Enter Your Year of Study"
              className={styles.textInput}
              required
            />
          </div>

          <label htmlFor="phoneWhatsapp" className={styles.label}>
            Phone Number(Whatsapp) <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputContainer}>
            <input
              type="tel"
              name="phoneWhatsapp"
              value={formData.phoneWhatsapp}
              onChange={handleInputChange}
              placeholder="Enter Your Phone Number"
              className={styles.textInput}
              required
            />
          </div>

          <label htmlFor="accommodationRequired" className={styles.label}>
            Will Accommodation be required? <span className={styles.required}>*</span>
          </label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="accommodationRequired"
                value="Yes"
                checked={formData.accommodationRequired === "Yes"}
                onChange={handleInputChange}
                className={styles.radio}
                required
              />
              <span>Yes</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="accommodationRequired"
                value="No"
                checked={formData.accommodationRequired === "No"}
                onChange={handleInputChange}
                className={styles.radio}
              />
              <span>No</span>
            </label>
          </div>

          {committeePreferencesOutside()}

          {paymentSection({ location: selectedLocation })}


          <div className={styles.prizePoolSection}>
            <h2 className={styles.prizePoolTitle}>Prize Pool & Recognition</h2>
            <ul className={styles.prizeList}>
              <li className={styles.prizeItem}>
                <strong>Best Delegate:</strong> ₹5,000
              </li>
              <li className={styles.prizeItem}>
                <strong>High Commendation:</strong> ₹3,500
              </li>
              <li className={styles.prizeItem}>
                <strong>Best Reporter (IPC):</strong> ₹3,500
              </li>
              <li className={styles.prizeItem}>
                <strong>Best Photojournalist (IPC):</strong> ₹3,500
              </li>
            </ul>
          </div>
        </>
      )
    }
  }
  const committeePreferencesOutside = () => (
    <>
      <label htmlFor="committee" className={styles.labelMedium}>
        Committee Preferences
      </label>
      <p className={styles.description}>
        (Due to limited capacity, delegates are informed that the committee preference are not always met and are not
        guaranteed.)
      </p>

     <h4 className={styles.subtitle}>
      There are a number of portfolios available under each committee.{" "}
      <a
        href={getPortfolioMatrixLink()}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit here to view the portfolio matrix
      </a>
    </h4>


      <div className={styles.preferencesOutside}>
        {/* Preference 1 */}
        <div className={styles.preferenceItem}>
          <div className={styles.preferenceSelect}>
            <label htmlFor="choice1" className={styles.preferenceLabel}>
              Preference 1<span className={styles.require}>*</span>
            </label>
            <select name="choice1" value={formData.choice1} onChange={handleInputChange} className={styles.input} required>
              <option value="" disabled>
              -- Select Committee --
              </option>            
              <option value="AIPPM">AIPPM</option>
              <option value="UNSC">UNSC</option>
              <option value="SPECIALIZED">SPECIALIZED</option>
              <option value="IPC">IPC</option>
            </select>
          </div>
          <div>
            <h4 className={styles.portfolioTitle}>Portfolio Preferences</h4>
            <input
              type="text"
              name="portfolioC11"
              placeholder="Portfolio Preference 1"
              value={formData.portfolioC11}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioC12"
              placeholder="Portfolio Preference 2"
              value={formData.portfolioC12}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioC13"
              placeholder="Portfolio Preference 3"
              value={formData.portfolioC13}
              onChange={handleInputChange}
              className={styles.portfolioInputLast}
            />
          </div>
        </div>

        {/* Preference 2 */}
        <div className={styles.preferenceItem}>
          <div className={styles.preferenceSelect}>
            <label htmlFor="choice2" className={styles.preferenceLabel}>
              Preference 2 <span className={styles.required}>*</span>
            </label>
            <select name="choice2" value={formData.choice2} onChange={handleInputChange} className={styles.input}>
              <option value="" disabled>
              -- Select Committee --
              </option>
              <option value="AIPPM">AIPPM</option>
              <option value="UNSC">UNSC</option>
              <option value="SPECIALIZED">SPECIALIZED</option>
              <option value="IPC">IPC</option>
            </select>
          </div>
          <div>
            <h4 className={styles.portfolioTitle}>Portfolio Preferences</h4>
            <input
              type="text"
              name="portfolioC21"
              placeholder="Portfolio Preference 1"
              value={formData.portfolioC21}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioC22"
              placeholder="Portfolio Preference 2"
              value={formData.portfolioC22}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioC23"
              placeholder="Portfolio Preference 3"
              value={formData.portfolioC23}
              onChange={handleInputChange}
              className={styles.portfolioInputLast}
            />
          </div>
        </div>

        {/* Preference 3 */}
        <div className={styles.preferenceItem}>
          <div className={styles.preferenceSelect}>
            <label htmlFor="choice3" className={styles.preferenceLabel}>
              Preference 3 <span className={styles.required}>*</span>
            </label>
            <select name="choice3" value={formData.choice3} onChange={handleInputChange} className={styles.input}>
              <option value="" disabled>
              -- Select Committee --
              </option>
              <option value="AIPPM">AIPPM</option>
              <option value="UNSC">UNSC</option>
              <option value="SPECIALIZED">SPECIALIZED</option>
              <option value="IPC">IPC</option>
            </select>
          </div>
          <div>
            <h4 className={styles.portfolioTitle}>Portfolio Preferences</h4>
            <input
              type="text"
              name="portfolioC31"
              placeholder="Portfolio Preference 1"
              value={formData.portfolioC31}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioC32"
              placeholder="Portfolio Preference 2"
              value={formData.portfolioC32}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioC33"
              placeholder="Portfolio Preference 3"
              value={formData.portfolioC33}
              onChange={handleInputChange}
              className={styles.portfolioInputLast}
            />
          </div>
        </div>

        {/* Preference 4 */}
        <div className={styles.preferenceItem}>
          <div className={styles.preferenceSelect}>
            <label htmlFor="choice4" className={styles.preferenceLabel}>
              Preference 4 <span className={styles.required}>*</span>
            </label>
            <select name="choice4" value={formData.choice4} onChange={handleInputChange} className={styles.input}>
              <option value="" disabled>
              -- Select Committee --
              </option>
              <option value="AIPPM">AIPPM</option>
              <option value="UNSC">UNSC</option>
              <option value="SPECIALIZED">SPECIALIZED</option>
              <option value="IPC">IPC</option>
            </select>
          </div>
          <div>
            <h4 className={styles.portfolioTitle}>Portfolio Preferences</h4>
            <input
              type="text"
              name="portfolioC41"
              placeholder="Portfolio Preference 1"
              value={formData.portfolioC41}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioC42"
              placeholder="Portfolio Preference 2"
              value={formData.portfolioC42}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioC43"
              placeholder="Portfolio Preference 3"
              value={formData.portfolioC43}
              onChange={handleInputChange}
              className={styles.portfolioInputLast}
            />
          </div>
        </div>
      </div>
      <label htmlFor="previousExperience" className={styles.label}>
        Previous MUN Experiences (if any)
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          name="previousExperience"
          placeholder='Enter Your Experience...'
          value={formData.previousExperience}
          onChange={handleInputChange}
          className={styles.textarea}
        />
      </div>
    </>
  )

  // const paymentSection = (location) => {
  //   return (
  //     <>
  //     <div className={styles.paymentBox}>
  //       <h2 className={styles.paymentTitle}>Payment</h2>

  //       <p className={styles.paymentIntro}>
  //         To confirm your slot at <strong>NITSMUN 2026</strong>, please complete the registration payment as per the structure
  //         below. Your registration fee is an all-inclusive pass that covers your participation in the conference, official
  //         MUN kits, and provides you with unrestricted access to all <strong>Incandescence</strong> events, including major
  //         artist lineups, concerts, and cultural shows scheduled across the festival.
  //       </p>

  //       {/* Fee Structure */}
  //       <div className={styles.feeStructure}>
  //         <div className={styles.feeCard}>
  //           <p className={styles.feeType}>Early Bird Registration</p>
  //           <p className={styles.feePrice}>₹2,249</p>
  //           <p className={styles.feeNote}>Valid until 31st December 2025</p>
  //         </div>

  //         <div className={styles.feeCard}>
  //           <p className={styles.feeType}>Regular Registration</p>
  //           <p className={styles.feePrice}>₹2,499</p>
  //         </div>
  //       </div>

  //       {/* Inclusions */}
  //       <div className={styles.inclusions}>
  //         <p className={styles.inclusionsTitle}>Inclusions</p>
  //         <ul className={styles.inclusionsList}>
  //           <li>Conference entry</li>
  //           <li>Official delegate kit</li>
  //           <li>Full access to all Incandescence artist lineups & pro-shows</li>
  //         </ul>
  //       </div>

  //       {/* Payment Action */}
  //       <div className={styles.paymentAction}>
  //         <div className={styles.paymentLeft}>
  //           <p className={styles.paymentProofLabel}>Upload payment proof</p>
  //           <input
  //             type="file"
  //             accept="image/*"
  //             onChange={(e) => {
  //               const file = e.target.files?.[0]
  //               if (file) {
  //                 setFormData((prev) => ({ ...prev, paymentProof: file.name }))
  //               }
  //             }}
  //             className={styles.fileInput}
  //           />

  //           <button type="submit" className={styles.submitButton}>
  //             Submit Registration
  //           </button>
  //         </div>

  //         <div className={styles.paymentRight}>
  //           <img
  //             src="https://res.cloudinary.com/dludtk5vz/image/upload/v1738597970/WhatsApp_Image_2025-02-03_at_21.21.27_6e441ace_wtlyay.jpg"
  //             alt="Payment QR Code"
  //             className={styles.qrCodeImage}
  //           />
  //           <p className={styles.qrNote}>Scan to Pay</p>
  //         </div>
  //       </div>

  //       {/* Contact */}
        
  //           <div className={styles.contactSectionEnhanced}>
  //             <h3 className={styles.contactTitleEnhanced}>For Any Queries Contact:</h3>
  //             <div className={styles.contactGrid}>
  //               <div className={styles.contactCard}>
  //                 <p className={styles.contactNumber}>+91 70020 70518</p>
  //                 <p className={styles.contactName}>Mimansa Jain</p>
  //               </div>
  //               <div className={styles.contactCard}>
  //                 <p className={styles.contactNumber}>+91 73805 93079</p>
  //                 <p className={styles.contactName}>Shashwat Patel</p>
  //               </div>
  //               <div className={styles.contactCard}>
  //                 <p className={styles.contactNumber}>+91 93945 21290</p>
  //                 <p className={styles.contactName}>Devanuj Rijal</p>
  //               </div>
  //             </div>
            
  //       </div>
  //     </div>

  //     </>
  //   )
  // }
  const paymentSection = ({ location }) => {
  const data = PAYMENT_CONFIG[location]

  if (!data) return null
  return (
  <div className={styles.paymentBox}>
    <h3 className={styles.contactTitleEnhanced}>Payment:</h3>
    <p className={styles.paymentIntro}>
      {data.description}
    </p>

    {/* Fee Structure */}
    <div className={styles.feeStructure}>
  {data.show && (
    <div className={styles.feeCard}>
      {data.loc}
    </div>
  )}

  <div className={styles.feeCard}>
    <p className={styles.feeType}>Regular Registration</p>
    <p className={styles.feePrice}>{data.regularPrice}</p>
  </div>
</div>


    {/* Inclusions */}
    <div className={styles.inclusions}>
      {data.p3}
    </div>

    {/* Payment Action */}
    <div className={styles.paymentAction}>
      <div className={styles.paymentLeft}>
        <p className={styles.paymentProofLabel}>Upload payment proof</p>
        <input
          type="file"
          accept="image/*"
          className={styles.fileInput}
        />

        <button type="submit" className={styles.submitButton}>
          Submit Registration
        </button>
      </div>

      <div className={styles.paymentRight}>
        <img
          src="https://res.cloudinary.com/dysisk9kx/image/upload/v1766475476/qr_xklcq5.webp"
          alt="Payment QR Code"
          className={styles.qrCodeImage}
        />
        <p className={styles.qrNote}>Scan to Pay</p>
      </div>
    </div>

    {/* Contact */}
    <div className={styles.contactSectionEnhanced}>
      <h3 className={styles.contactTitleEnhanced}>For Any Queries Contact:</h3>
      <div className={styles.contactGrid}>
        <div className={styles.contactCard}>
          <p className={styles.contactNumber}>+91 70020 70518</p>
          <p className={styles.contactName}>Mimansa Jain</p>
        </div>
        <div className={styles.contactCard}>
          <p className={styles.contactNumber}>+91 73805 93079</p>
          <p className={styles.contactName}>Shashwat Patel</p>
        </div>
        <div className={styles.contactCard}>
          <p className={styles.contactNumber}>+91 93945 21290</p>
          <p className={styles.contactName}>Devanuj Rijal</p>
        </div>
      </div>
    </div>
  </div>
)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Register Now</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formHeader}>
          <div className={styles.formHeaderText}>
            <h1 className={styles.formTitle}>Annual Conference Online Registration Form</h1>
            <p className={styles.formSubtitle}>
              Please select your location and fill in the form below. We'll contact you as soon as possible.
            </p>
          </div>

          <div className={styles.logoContainer}>
            <img
              src="https://res.cloudinary.com/dludtk5vz/image/upload/v1736528355/701cf080c792b3ca092745b4c39b35e1_vzk4xr.png"
              alt="Conference Logo"
              className={styles.logo}
            />
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.formContent}>
          <label htmlFor="location" className={styles.labelMedium}>
            Select Your Location
          </label>
          <div className={styles.inputWrapper}>
            <select
              id="location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className={styles.input}
              style={{
                color: selectedLocation ? "#000000" : "#666666",
              }}
              required
            >
              <option value="" disabled>
                -- Please Select --
              </option>
              <option value="within">Within NIT Silchar</option>
              <option value="outside-nit">Outside NIT Silchar</option>
              <option value="outside-silchar">Outside Silchar</option>
            </select>
          </div>

          {renderFormContent()}
        </div>
      </form>
    </div>
  )
}
