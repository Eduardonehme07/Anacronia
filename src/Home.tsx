import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Home() {
  const [showInput, setShowInput] = useState(false);
  const [code, setCode] = useState("");
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowInput(true);
  };

  const checkCode = () => {
    if (code === "170532") {
      setFade(true);
      setTimeout(() => {
        navigate("/next");
      }, 1000); // tempo do fade
    } else {
      alert("Código incorreto!");
    }
  };

  return (
    <div className={`background ${fade ? "fade-out" : ""}`}>
      <div className="lock-area" onClick={handleClick}></div>

      {showInput && (
        <div className="input-overlay">
          <input
            type="text"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Digite o código"
          />
          <button onClick={checkCode}>OK</button>
        </div>
      )}
    </div>
  );
}
