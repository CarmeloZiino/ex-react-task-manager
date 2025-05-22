import taskAnimated from "../assets/taskAnimated.gif";

export default function NotFound() {
  return (
    <div className="container d-flex flex-column gap-5 justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p style={{ fontSize: "3rem", fontWeight: "900", margin: "0px" }}>
          404
        </p>
        <p style={{ fontSize: "1.2rem", fontWeight: "900", margin: "0px" }}>
          Pagina Non Trovata
        </p>
      </div>
      <a href="/">
        <img
          className="rounded-5 shadow-lg img-fluid"
          src={taskAnimated}
          alt="Clicca Qui per Tornare alla Home"
          width={300}
        />
      </a>

      <p className="validation">Clicca sull'immagine per tornare alla Home</p>
    </div>
  );
}
