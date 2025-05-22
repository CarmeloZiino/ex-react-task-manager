
import TaskRow from "../components/TaskRow";

import { useGlobalContext } from '../contexts/globalContext'

export default function TaskList() {
 
    const { tasks } = useGlobalContext()



  // const dataTasks = useTasks()



  return (
    <>
      <div className="table-responsive shadow-lg rounded-4 p-5">
        <h2>Le tue Task:</h2>
        <table className="customTable">
          <thead className="">
            <tr>
              <th>Task</th>
              {/* <th>Appunti</th> */}
              <th>Stato</th>
              <th>Data di Creazione</th>
            </tr>
          </thead>
          <tbody className="customTable">
              {tasks.map(t =>{
                return(
                    <TaskRow  id={t.id} title={t.title} status={t.status} description={t.description} createdAt={t.createdAt}/>
                )
              })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
}