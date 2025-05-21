//IMPORT REACT
import { useState, useEffect } from "react";

//URL CHIAMATA API
const url = import.meta.env.VITE_API_URL;

export default function useTasks() {
  //GESTIONE STATO TASK
  const [tasks, setTasks] = useState([]);

  //USEEFFECT TASK
  useEffect(() => {
    fetch(`${url}/tasks`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("Dati ricevuti dall'API:", data);
        setTasks(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const dataTask = tasks;

  return (dataTask);
}
