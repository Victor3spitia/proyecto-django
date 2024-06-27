import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { TaskPage } from "./pages/TaskPage";
import { TasksFormPage } from "./pages/TasksFormPage";
import { Navegacion } from "./componentes/navegacion";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className = "container mx-auto">
      <navegacion />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/tasks-create" element={<TasksFormPage />} />
        <Route path="/tasks/:id" element={<TasksFormPage />} />
      </Routes>
      <Toaster/>
      </div>
    </BrowserRouter>

  );
}

export default App;

