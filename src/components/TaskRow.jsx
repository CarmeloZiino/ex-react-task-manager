import { memo } from "react";

function TaskRow({ title, status, description, createdAt }) {
  return (
    <tr className="customTable">
      <td>{title}</td>
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
