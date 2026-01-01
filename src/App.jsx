import { useState } from "react";
import FireworkCanvas from "./components/FireworkCanvas";
import MessageInput from "./components/MessageInput";
import "./App.css";

export default function App() {
  const [message, setMessage] = useState("Wishing you a joyful and prosperous New Year!");

  return (
    <div className="container">
      <div className="card">
        <div className="firework-bg">
          <FireworkCanvas />
        </div>
 
        <div className="content-layer">
          <h1 className="year">2026</h1>
          <h2 className="title">HAPPY NEW YEAR</h2>

          <div className="hanja-row">
            <span className="neon-hanja">丙</span>
            <span className="neon-hanja">午</span>
            <span className="neon-hanja">年</span>
          </div>

          <p className="user-message">{message}</p>
        </div>
      </div>
 
      <MessageInput message={message} setMessage={setMessage} />
    </div>
  );
}
