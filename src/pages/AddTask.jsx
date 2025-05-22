//Import
import { useState, useMemo, useRef } from "react";
import { useGlobalContext } from "../contexts/globalContext";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

export default function AddTask() {
  const { addTask } = useGlobalContext();

  //INPUT CONTROLLATI: (Nome Task)

  const [taskTitle, setTaskTitle] = useState("");
  //Non può essere vuoto. Non può contenere simboli speciali.

  //INPUT NON CONTROLLATI: (Descrizione e Select)

  const taskDescription = useRef();
  const taskStatus = useRef();

  //VALIDAZIONI (Funzione per l'OnSubmit del Form)

  const isTaskTitleValid = useMemo(() => {
    const caratteriValidi = [...taskTitle].every(
      (c) => !symbols.includes(c.toLocaleLowerCase())
    );
    return caratteriValidi && taskTitle.length >= 0;
  }, [taskTitle]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !taskTitle.trim() ||
      !taskDescription.current.value.trim() ||
      !taskStatus.current.value.trim() ||
      !isTaskTitleValid
    ) {
      alert("Errore: Compilare tutti i campi");
      return;
    }
    console.log(
      "Submit effetuato:",
      `Nome della Task: ${taskTitle};
        Status:${taskStatus.current.value} , 
        Descrizione: ${taskDescription.current.value},
`
    );
    //Aggiunta della Task all'array Tasks
    const newTask = {
      title: taskTitle,
      description: taskDescription.current.value,
      status: taskStatus.current.value,
    };

    console.log(newTask);
       try {
            await addTask(newTask)
            alert("Task creata con successo!")
            setTitle("")
            description.current.value = ""
            select.current.value = ""
        } catch (error) {
            alert(error.message)
        }
  };

  return (
    <>
      <h1 className="mb-5">Aggiungi una Task:</h1>

      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <div className="mb-3 sectionForm">
          <label className="formCustomLabel">Nome della Task</label>
          <input
            type="text"
            className="form-control"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            id=""
            placeholder="Tagliare l'erba in giardino"
          />
          <p className="validation">
            questo campo non può essere vuoto e non può contenere simboli
          </p>
        </div>
        <div className="mb-3 sectionForm">
          <label className="formCustomLabel">Stato</label>
          <select ref={taskStatus} className="form-select form-select-lg">
            <option value="To Do">To Do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="mb-3 sectionForm">
          <label className="formCustomLabel">Descrizione</label>
          <textarea
            ref={taskDescription}
            className="form-control"
            name=""
            id=""
            placeholder="La mamma deve piantare le patate e mi ha chiesto di tagliare l'erba, in modo tale che lei possa zappare il terreno regolarmente."
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="customBtn">
            Aggiungi
          </button>
        </div>
      </form>
    </>
  );
}
