import { createContext, useContext } from "react";
import useTasks from "../hooks/useTasks.js";

const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const dataTasks = useTasks();

  return (
    <GlobalContext.Provider value={{ ...dataTasks }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
