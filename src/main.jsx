import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

function HeartExplosion() {
  return (
    <div className="heart-explosion">
      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          className="floating-heart"
          style={{
            "--x": `${Math.random() * 100}%`,
            "--delay": `${Math.random() * 0.7}s`,
            "--size": `${12 + Math.random() * 18}px`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}
function App() {
  const [accepted, setAccepted] = useState(false),
    [noText, setNoText] = useState("Todavía no"),
    [showHearts, setShowHearts] = useState(false);
  const msgs = [
    "Todavía no",
    "¿Segura?",
    "Pensalo de nuevo...",
    "Dale porfi 🥺",
    "Una oportunidad ❤️",
    "Por favor...",
    "¿Ahora sí?",
  ];
  const no = () => {
    const i = msgs.indexOf(noText);
    setNoText(msgs[i >= msgs.length - 1 ? 1 : i + 1]);
  };
  const yes = () => {
    setShowHearts(true);
    setTimeout(() => setAccepted(true), 350);
  };
  useEffect(() => {
    if (!showHearts) return;
    const t = setTimeout(() => setShowHearts(false), 3500);
    return () => clearTimeout(t);
  }, [showHearts]);
  return (
    <div className="app">
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />
      {showHearts && <HeartExplosion />}
      <main className="container d-flex align-items-center justify-content-center min-vh-100">
        <section
          className={`modern-card ${accepted ? "final-card text-center" : ""}`}
        >
          {accepted ? (
            <>
              <div className="success-icon">
                <i className="bi bi-heart-fill" />
              </div>
              <span className="eyebrow">02 / 02</span>
              <h1 className="main-title mt-3">No lo merezco pero...</h1>
              <p className="subtitle mt-3">Gracias por perdonarme ❤️</p>
              <div className="final-message mt-4">
                <p>
                  No quería mandarte solo unas <strong>"disculpas"</strong> pedorras y
                  listo.
                </p>
                <p>Quería hacer algo un poquito más especial ya que estamos en visperas de tu cumple y alegrarte el día solo un poco.</p>
                <p>Te amo muchisimo y calculo que lo veras luego de la clase, por lo que espero que te haya ido hermoso.</p>
              </div>
              <div className="photo-gallery"> <img src={`${import.meta.env.BASE_URL}fotos/foto1.jpg`} alt="Nosotros" /> <img src={`${import.meta.env.BASE_URL}fotos/foto2.jpg`} alt="Un momento juntos" /> <img src={`${import.meta.env.BASE_URL}fotos/foto3.jpg`} alt="Un recuerdo juntos" /> <img src={`${import.meta.env.BASE_URL}fotos/foto4.jpg`} alt="Otro recuerdo juntos" /> </div>
              <div className="signature mt-4">hecho con ❤️ para vos</div>
            </>
          ) : (
            <>
              <div className="card-header-modern">
                <span className="status-dot" />
                <span>mensaje importante</span>
                <span className="step">01 / 02</span>
              </div>
              <div className="content">
                <div className="sad-cat"> <img src={`${import.meta.env.BASE_URL}fotos/gatito-triste.png`} alt="Gatito triste" /> </div>
                <h1 className="main-title">
                  Necesito
                  <br />
                  preguntarte algo.
                </h1>
                <p className="subtitle">
                  Sé que no estoy en un buen momento y me la agarro con vos pero...
                </p>
                <div className="question">¿Me perdonás?</div>
                <div className="actions">
                  <button
                    className="btn btn-primary btn-lg main-button"
                    onClick={yes}
                  >
                    Sí, te perdono <i className="bi bi-heart-fill ms-2" />
                  </button>
                  <button className="btn secondary-button" onClick={no}>
                    {noText}
                  </button>
                </div>
                <p className="tiny-text">Prometo dejar de ser tan mierda 🥺</p>
              </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
