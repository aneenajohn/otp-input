import "./styles.css";
import { OtpInput } from "./components/OtpInput";

export default function App() {
  return (
    <div className="App">
      <h1>OTP Input</h1>
      <p>Enter your 6 digit otp</p>
      <OtpInput />
    </div>
  );
}
