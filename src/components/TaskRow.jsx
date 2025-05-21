import { memo } from "react";

function TaskRow({ title, status, description, createdAt }) {
  return (
    <tr className="customTable">
      <td>{title}</td>
      <td>{description}</td>
      {status === "To do" ? (
        <td style={{ color: "red" }}>{status}</td>
      ) : status === "Doing" ? (
        <td style={{ color: "yellow" }}>{status}</td>
      ) : (
        <td style={{ color: "green" }}>{status}</td>
      )}
      <td>{createdAt}</td>
    </tr>
  );
}

export default memo(TaskRow);
