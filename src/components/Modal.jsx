import ReactDOM from "react-dom";

export default function Modal({
  title,
  content,
  show,
  onClose,
  onConfirm,
  confirmText = "Conferma",
}) {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div
        show={show}
        className={`modal fade ${show ? "show d-block" : ""}`}
        style={{ backgroundColor: show ? "rgba(0,0,0,0.5)" : "" }}
        id="modalId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">{content}</div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                class="customBtn modalBtnNull"
                style={{
                  backgroundColor: "var(--border-color)",
               
                }}
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Annulla
              </button>
              <button type="button" onClick={onConfirm} class="customBtn modalBtn">
                Conferma
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
