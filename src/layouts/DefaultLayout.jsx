import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  // Puoi sicuramente aggiungere uno style CSS in questo componente, sia inline che tramite className.
  // Ad esempio, puoi usare style inline:
  return (
    <>
      <Header />
      <main
        style={{ padding: "5vh", backgroundColor: "#ECEDE9", height: "100vh" }}
      >
        <Outlet />
      </main>
    </>
  );
}
