import { Routes, Route, BrowserRouter } from "react-router-dom";

//CONTEXT
import GlobalProvider from "./contexts/GlobalContext";
//LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";
//PAGES
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              {/* Pagine */}
              <Route path="/" Component={TaskList} />
              <Route path="/addTask" Component={AddTask} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
