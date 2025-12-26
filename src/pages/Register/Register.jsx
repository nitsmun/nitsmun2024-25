"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import styles from "./Register.module.scss";

// dotenv.config();

const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_UPLOAD_URL;
const CLOUDINARY_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export default function Register() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    branch: "",
    course: "",
    scholarnumber: "",
    year: "",
    institute: "",
    college: "",
    collegelocation: "",
    city: "",
    state: "",
    yearofstudy: "",
    phonewhatsapp: "",
    accommodationrequired: "",
    recordemail: false,
    previousexperience: "",
    committeepreference1: "",

    choice1: "",
    portfolioc11: "",
    portfolioc12: "",
    portfolioc13: "",

    choice2: "",
    portfolioc21: "",
    portfolioc22: "",
    portfolioc23: "",

    choice3: "",
    portfolioc31: "",
    portfolioc32: "",
    portfolioc33: "",

    choice4: "",
    portfolioc41: "",
    portfolioc42: "",
    portfolioc43: "",

    paymentproof: "",
  });

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  /* eslint-disable indent */

  // Subha@29102004
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
  /* eslint-enable indent */

  const PAYMENT_CONFIG = {
    within: {
      title: "Payment - Within NIT Silchar",
      description: "Please Pay",
      show: false,

      loc: "",
      regularPrice: "₹349",
      p3: "",
      qrImage:
        "https://res.cloudinary.com/dludtk5vz/image/upload/v1738597970/WhatsApp_Image_2025-02-03_at_21.21.27_6e441ace_wtlyay.jpg",
    },

    "outside-nit": {
      title: "Payment - Outside NIT Silchar",
      description: (
        <>
          To finalize your registration for <strong>NITSMUN 2026</strong>,
          please complete the payment as outlined below. This fee is
          specifically curated for local delegates, ensuring you are part of the
          premier diplomatic event of the region while enjoying the full spirit
          of our campus festival.
        </>
      ),
      show: false,
      loc: "",
      regularPrice: "₹799",
      p3: (
        <>
          <p className={styles.inclusionsTitle}>Inclusions</p>
          <ul className={styles.inclusionsList}>
            <li>Conference entry</li>
            <li>Official delegate kit</li>
            <li>Full access to all Incandescence artist lineups & pro-shows</li>
          </ul>
        </>
      ),
      qrImage:
        "https://res.cloudinary.com/dludtk5vz/image/upload/v1738597970/WhatsApp_Image_2025-02-03_at_21.21.27_6e441ace_wtlyay.jpg",
    },

    "outside-silchar": {
      title: "Payment - Outside Silchar",
      description: (
        <>
          To confirm your slot at <strong>NITSMUN 2026</strong>, please complete
          the registration payment as per the structure below. Your registration
          fee is an all-inclusive pass that covers conference participation,
          official MUN kits, and unrestricted access to all{" "}
          <strong>Incandescence</strong> events.
        </>
      ),
      show: true,
      loc: (
        <>
          <p className={styles.feeType}>Early Bird Registrations</p>
          <p className={styles.feePrice}>₹2,249</p>
          <p className={styles.feeNote}>(Valid until 31st December 2025)</p>
        </>
      ),
      regularPrice: "₹2,499",
      p3: (
        <>
          <p className={styles.inclusionsTitle}>Inclusions</p>
          <ul className={styles.inclusionsList}>
            <li>Conference entry</li>
            <li>Official delegate kit</li>
            <li>Full access to all Incandescence artist lineups & pro-shows</li>
          </ul>
        </>
      ),
      qrImage:
        "https://res.cloudinary.com/dludtk5vz/image/upload/v1738597970/WhatsApp_Image_2025-02-03_at_21.21.27_6e441ace_wtlyay.jpg",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let paymentImageUrl = "";

      // 1. Upload Image to Supabase Storage if file exists
      if (file) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", CLOUDINARY_PRESET);

        const res = await fetch(CLOUDINARY_URL, {
          method: "POST",
          body: data,
        });

        if (!res.ok) {
          const errorText = await res.text();
          console.error("Cloudinary Response Error:", errorText);
          throw new Error(`Upload failed: ${res.statusText}`);
        }

        const cloudinaryData = await res.json();
        paymentImageUrl = cloudinaryData.secure_url;

        if (!cloudinaryData.secure_url) {
          console.error(cloudinaryData);
          throw new Error("Cloudinary upload failed");
        }
      }

      // 2. Insert Data into Supabase Table
      const { error } = await supabase.from("registrations").insert([
        {
          ...formData,
          paymentproof: paymentImageUrl,
          accommodationrequired: formData.accommodationrequired === "Yes",
          location_type: selectedLocation,
        },
      ]);

      if (error) throw error;

      alert("Registration submitted successfully!");
      // Reset form or redirect
    } catch (error) {
      console.error("Error submitting:", error.message);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const committeePreferencesOutside = () => (
    <>
      <label htmlFor="committee" className={styles.labelMedium}>
        Committee Preferences
      </label>
      <p className={styles.description}>
        (Due to limited capacity, delegates are informed that the committee
        preference are not always met and are not guaranteed.)
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
            <select
              name="choice1"
              value={formData.choice1}
              onChange={handleInputChange}
              className={styles.input}
              required
            >
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
              name="portfolioc11"
              placeholder="Portfolio Preference 1"
              value={formData.portfolioc11}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioc12"
              placeholder="Portfolio Preference 2"
              value={formData.portfolioc12}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioc13"
              placeholder="Portfolio Preference 3"
              value={formData.portfolioc13}
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
            <select
              name="choice2"
              value={formData.choice2}
              onChange={handleInputChange}
              className={styles.input}
            >
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
              name="portfolioc21"
              placeholder="Portfolio Preference 1"
              value={formData.portfolioc21}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioc22"
              placeholder="Portfolio Preference 2"
              value={formData.portfolioc22}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioc23"
              placeholder="Portfolio Preference 3"
              value={formData.portfolioc23}
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
            <select
              name="choice3"
              value={formData.choice3}
              onChange={handleInputChange}
              className={styles.input}
            >
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
              name="portfolioc31"
              placeholder="Portfolio Preference 1"
              value={formData.portfolioc31}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioc32"
              placeholder="Portfolio Preference 2"
              value={formData.portfolioc32}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioc33"
              placeholder="Portfolio Preference 3"
              value={formData.portfolioc33}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
          </div>
        </div>

        {/* Preference 4 */}
        <div className={styles.preferenceItem}>
          <div className={styles.preferenceSelect}>
            <label htmlFor="choice4" className={styles.preferenceLabel}>
              Preference 4 <span className={styles.required}>*</span>
            </label>
            <select
              name="choice4"
              value={formData.choice4}
              onChange={handleInputChange}
              className={styles.input}
            >
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
              name="portfolioc41"
              placeholder="Portfolio Preference 1"
              value={formData.portfolioc41}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioc42"
              placeholder="Portfolio Preference 2"
              value={formData.portfolioc42}
              onChange={handleInputChange}
              className={styles.portfolioInput}
            />
            <input
              type="text"
              name="portfolioc43"
              placeholder="Portfolio Preference 3"
              value={formData.portfolioc43}
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
          name="previousexperience"
          placeholder="Enter Your Experience..."
          value={formData.previousexperience}
          onChange={handleInputChange}
          className={styles.textarea}
        />
      </div>
    </>
  );

  const renderFormContent = () => {
    if (!selectedLocation) return null;

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
              name="recordemail"
              checked={formData.recordemail}
              onChange={handleInputChange}
              className={styles.checkbox}
            />
            <label className={styles.checkboxLabel}>
              Record{" "}
              <span className={styles.emailHighlight}>
                84agarwalharshit@gmail.com
              </span>{" "}
              as the email to be included with my response
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
    );

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
              <option value="Computer Science and Engineering">
                Computer Science and Engineering
              </option>
              <option value="Electronics and Communication Engineering">
                Electronics and Communication Engineering
              </option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
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
              name="scholarnumber"
              placeholder="Enter Your Scholar ID"
              value={formData.scholarnumber}
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
      );
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
      );
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
                name="recordemail"
                checked={formData.recordemail}
                onChange={handleInputChange}
                className={styles.checkbox}
              />
              <label className={styles.checkboxLabel}>
                Record{" "}
                <span className={styles.emailHighlight}>
                  84agarwalharshit@gmail.com
                </span>{" "}
                as the email to be included with my response
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
              name="collegelocation"
              value={formData.collegelocation}
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
              name="yearofstudy"
              value={formData.yearofstudy}
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
              name="phonewhatsapp"
              value={formData.phonewhatsapp}
              onChange={handleInputChange}
              placeholder="Enter Your Phone Number"
              className={styles.textInput}
              required
            />
          </div>

          <label htmlFor="accommodationrequired" className={styles.label}>
            Will Accommodation be required?{" "}
            <span className={styles.required}>*</span>
          </label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="accommodationrequired"
                value="Yes"
                checked={formData.accommodationrequired === "Yes"}
                onChange={handleInputChange}
                className={styles.radio}
                required
              />
              <span>Yes</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="accommodationrequired"
                value="No"
                checked={formData.accommodationrequired === "No"}
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
      );
    }
  };

  const paymentSection = ({ location }) => {
    const data = PAYMENT_CONFIG[location];

    if (!data) return null;
    return (
      <div className={styles.paymentBox}>
        <h3 className={styles.contactTitleEnhanced}>Payment:</h3>
        <p className={styles.paymentIntro}>{data.description}</p>

        {/* Fee Structure */}
        <div className={styles.feeStructure}>
          {data.show && <div className={styles.feeCard}>{data.loc}</div>}

          <div className={styles.feeCard}>
            <p className={styles.feeType}>Regular Registration</p>
            <p className={styles.feePrice}>{data.regularPrice}</p>
          </div>
        </div>

        {/* Inclusions */}
        <div className={styles.inclusions}>{data.p3}</div>

        {/* Payment Action */}
        <div className={styles.paymentAction}>
          <div className={styles.paymentLeft}>
            <p className={styles.paymentProofLabel}>Upload payment proof</p>

            <input
              type="file"
              accept="image/*"
              className={styles.fileInput}
              onChange={handleFileChange}
              required
            />

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
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
          <h3 className={styles.contactTitleEnhanced}>
            For Any Queries Contact:
          </h3>
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
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Register Now</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formHeader}>
          <div className={styles.formHeaderText}>
            <h1 className={styles.formTitle}>
              Annual Conference Online Registration Form
            </h1>
            <p className={styles.formSubtitle}>
              Please select your location and fill in the form below. We'll
              contact you as soon as possible.
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
  );
}
