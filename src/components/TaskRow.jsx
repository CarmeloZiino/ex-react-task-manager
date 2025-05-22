import { memo } from "react";

function TaskRow({ title, status, description, createdAt , id}) {
  return (
    <tr className="customTable">
      <td>
        <a href={`./task/${id}`} style={{textDecoration: "none" , color:"black"}}> {title} </a>
      </td>
      {/* <td>{description}</td> */}
      {status === "To do" ? (
        <td style={{ backgroundColor: "var(--color-red)" }}>{status}</td>
      ) : status === "Doing" ? (
        <td style={{ backgroundColor: "var(--color-yellow)" }}>{status}</td>
      ) : (
        <td style={{ backgroundColor: "var(--color-green)" }}>{status}</td>
      )}
      <td>{new Date(createdAt).toLocaleDateString()}</td>
    </tr>
  );
}

export default memo(TaskRow);
