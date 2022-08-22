import React, { useState } from "react";

export const OtpInput = () => {
  const otpDigits = {
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: ""
  };
  const [otp, setOtp] = useState(otpDigits);
  const [otpValue, setOtpValue] = useState("");

  function handleChange(event) {
    setOtp((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
    console.log(otp);
  }

  const getOtpValue = () => {
    let otpEntered = "";
    for (let i = 1; i <= 6; i++) {
      otpEntered = otpEntered + otp[`otp${i}`];
    }
    setOtpValue(otpEntered);
    return otpEntered;
  };

  const inputfocus = (e) => {
    let keyPressed = e.key;

    switch (keyPressed) {
      case "Backspace":
      case "Delete":
      case "ArrowLeft": {
        e.preventDefault();
        const next = e.target.tabIndex - 2;
        if (next > -1) {
          e.target.form.elements[next].focus();
        }
        break;
      }
      case "ArrowRight": {
        e.preventDefault();
        const next = e.target.tabIndex;
        if (next < 6) {
          e.target.form.elements[next].focus();
        }
        break;
      }
      default: {
        const next = e.target.tabIndex;
        if (next < 6) {
          e.target.form.elements[next].focus();
        }
        break;
      }
    }
  };

  const handleSubmit = (event) => {
    let otpEnteredByUser = getOtpValue();
    console.log(otp);
    console.log(otpValue);
    console.log(`otpEnteredByUser: ${otpEnteredByUser}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="otpContainer">
        <div>
          <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp.otp1}
            onChange={(e) => handleChange(e)}
            tabIndex="1"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
          <input
            name="otp2"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp.otp2}
            onChange={(e) => handleChange(e)}
            tabIndex="2"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
          <input
            name="otp3"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp.otp3}
            onChange={(e) => handleChange(e)}
            tabIndex="3"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
          <input
            name="otp4"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp.otp4}
            onChange={(e) => handleChange(e)}
            tabIndex="4"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
          <input
            name="otp5"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp.otp5}
            onChange={(e) => handleChange(e)}
            tabIndex="5"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
          <input
            name="otp6"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp.otp6}
            onChange={(e) => handleChange(e)}
            tabIndex="6"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
