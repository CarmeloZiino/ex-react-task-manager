
import useTasks from "../hooks/useTasks";
import TaskRow from "../components/TaskRow";

export default function TaskList() {
  // console.log("QUESTE SONO LE TASK CHE HO RECUPERATO:" , )

  const dataTasks = useTasks()
  return (
    <>
      <div className="table-responsive">
        <table className="customTable">
          <thead className="">
            <tr>
              <th>Task</th>
              <th>Descrizione</th>
              <th>Stato</th>
              <th>Data di Creazione</th>
            </tr>
          </thead>
          <tbody className="customTable">
              {dataTasks.map(t =>{
                return(
                    <TaskRow  key={t.id} title={t.title} status={t.status} description={t.description} createdAt={t.createdAt}/>
                )
              })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
}