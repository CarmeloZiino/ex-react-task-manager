import { useGlobalContext } from "../contexts/globalContext";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Modal from "../components/Modal";

export default function TaskDetail() {
  const navigate = useNavigate();
  //MDOALE
  const [show, setShow] = useState(false);
  //TASK DATA
  const { tasks, removeTask } = useGlobalContext();
  const { id } = useParams();
  const thisTask = tasks.find((t) => t.id === parseInt(id));
  if (!tasks || tasks.length === 0) {
    return <div>Caricamento...</div>;
  }

  const handleRemove = async (e) => {

    // return console.log("Elimino");
    try {
      await removeTask(thisTask.id);
      alert("Task eliminata con successo!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <form
        // onSubmit={handleRemove}
        className="d-flex flex-column gap-3 shadow-lg rounded-4 p-4"
      >
        <div className="d-flex flex-column gap-3">
          <h1 className="text-center">Task:</h1>
          <h2
            style={{
              textShadow: "1px 1px 1px black",
              color: "var(--primary-dark",
            }}
          >
            {thisTask.title}
          </h2>
        </div>

        <p style={{ fontSize: "1.2rem" , overflowWrap: "break-word" }} className="">
          Descrizione: {thisTask.description}
        </p>

        <div className="d-flex gap-5">
          {thisTask.status === "To do" ? (
            <p
              style={{
                textShadow: "2px 1px 0.5px var(--color-red)",
                fontSize: "1.2rem",
              }}
            >
              {thisTask.status}
            </p>
          ) : thisTask.status === "Doing" ? (
            <p
              style={{
                textShadow: "2px 1px 0.5px var(--color-yellow)",
                fontSize: "1.2rem",
              }}
            >
              {thisTask.status}
            </p>
          ) : (
            <p
              style={{
                textShadow: "2px 1px 0.5px var(--color-green)",
                fontSize: "1.2rem",
              }}
            >
              {thisTask.status}
            </p>
          )}
          <p className="" style={{ fontSize: "1.2rem" }}>
            {new Date(thisTask.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className=" d-flex ">
          <button
          type="button"
            className="customBtn"
            onClick={() => setShow(true)}
          >
            Elimina Task
          </button>
        </div>
      </form>
      <Modal
        title="ELimina Task"
        content="Vuoi davvero eliminare questa task?"
        show={show}
        onClose={() => setShow(false)}
        onConfirm={handleRemove}
        confirmText="Elimina"
      />
    </>
  );
}
