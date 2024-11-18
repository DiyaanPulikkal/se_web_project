import style from "./ForgetPassword.module.css";
import ima from "./assets/software.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const form = useRef();
  const navigate = useNavigate();
  const [data, setData] = useState(""); // State to hold the fetched data

  const sendEmail = async (e) => {
    e.preventDefault();

    const email = document.getElementById("user_email").value;
    const numberBeforeAt = email.split("@")[0];

    try {
      // Fetch the data
      const response = await fetch(
        `http://127.0.0.1:8000/student/get/${numberBeforeAt}`
      );
      const dataMan = await response.json();
      setData(dataMan.password); // Update state with fetched password

      // Ensure the hidden field gets updated
      document.getElementById("pd").value = dataMan.password;

      // Send the email after fetching data
      await emailjs.sendForm(
        "service_agtfo54",
        "template_clfyi7o",
        form.current,
        {
          publicKey: "khEDhOHjTvX5hjMXU",
        }
      );

      console.log("SUCCESS!");
      e.target.reset();
      navigate("/login");
    } catch (error) {
      console.error("There was a problem:", error);
    }
  };

  return (
    <div className={style.outterdiv}>
      <h1 className={style.head}>Forgot Password</h1>
      <div className={style.backgroundLogin}>
        <form ref={form} onSubmit={sendEmail}>
          <img src={ima} alt="Software" className={style.imageForlogin} />
          <label className={style.textcolor}>User Name:</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="enter a username"
            className={style.customInput}
          />
          <label className={style.textcolor}>Email:</label>
          <input
            type="text"
            name="user_email"
            id="user_email"
            placeholder="enter an email"
            className={style.customInput}
          />

          {/* Hidden field with controlled value */}
          <textarea
            id="pd"
            name="message"
            value={data}
            readOnly
            style={{ display: "none" }}
          />
          <button type="submit" className={style.buttonst}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
