import TaskImg from "../assets/task.svg";

export default function Header() {
  return (
    <header>
      <ul className="nav justify-content-center align-items-center">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Task Manager
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <img
            id="logo"
              src={TaskImg}
              alt="LOGO TASK MANAGER"
              style={{ width: "50px" }}
            />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/addTask">
            Aggiungi Task
          </a>
        </li>
      </ul>
    </header>
  );
}
