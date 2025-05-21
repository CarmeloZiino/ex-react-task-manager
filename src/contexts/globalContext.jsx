import { createContext, useContext } from "react";
import useTasks from "../hooks/useTasks";

const GlobalContext = createContext();



export default function GlobalProvider({ children }) {

    const dataTasks = useTasks()


  return <GlobalContext.Provider value={{...dataTasks}}>{children}</GlobalContext.Provider>;
}
