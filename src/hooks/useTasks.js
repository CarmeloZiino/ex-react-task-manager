//IMPORT REACT
import { useState, useEffect } from "react";

//URL CHIAMATA API
const url = import.meta.env.VITE_API_URL;

export default function useTasks() {
  //GESTIONE STATO TASK
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  //USEEFFECT TASK
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const call = await fetch(`${url}/tasks`);

        const resCall = await call.json();
        setTasks(resCall);
      } catch (error) {
        setError(error.message);
        console.error("Errore nel caricamento delle task:", error);
      }
    };

    fetchTasks();
  }, []);

  //FUNZIONI PER GESTIRE RICHIESTE HTTP

  const addTask = async (newTask) => {
    const call = await fetch(`${url}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const { success, message, task } = await call.json();
    // const resCall = await call.json();

    if (!success) {
      throw new Error(message);
      setTasks((prev) => [...prev, task.task]);
    }
  };

  const removeTask = async (idTask) => {
    try {
      const call = await fetch(`${url}/tasks/${idTask}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resCall = await call.json();
      if (resCall.success === true) {
        setTasks((prevTask) => prevTask.filter((t) => t.id !== idTask));
      } else {
        throw new Error(
          resCall.message ||
            "Oh, oh! L'eliminazione della Task ha causato un ERRORE!!!"
        );
      }
    } catch (error) {
      console.error("Errore durante l'eliminazione:", error);
      throw error;
    }
  };

  const updateTask = async (updateTask) => {
    const call = await fetch(`${url}/tasks`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const resCall = await call.json();

    if (resCall === true) {
      setTasks((prevTask) =>
        prevTask.map((oldTask) =>
          oldTask.id === resCall.task.id ? resCall.task : oldTask
        )
      );
    } else {
      throw new Error(
        resCall.message || "Oh, oh! Qualcosa ha causato un ERRORE!!!"
      );
    }
  };

  const dataTask = { tasks, addTask, removeTask, updateTask };

  return dataTask;
}
