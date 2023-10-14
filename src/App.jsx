import AddTaskForm from "./components/AddTaskForm";
import TaskContent from "./components/TaskContent";
import "./App.css";
import ButtonAddTask from "./widgets/ButtonAddTask";
import { useState } from "react";

function App() {
  const [activeForm, setActiveForm] = useState("hidden");
  const handleClick = () => {
    setActiveForm(false);
  };

  return (
    <main className="md:px-4 md:h-screen">
      <div className="md:flex md:gap-5 md:max-w-7xl m-auto border-2">
        <AddTaskForm setActiveForm={setActiveForm} activeForm={activeForm} />
        <TaskContent />
        <ButtonAddTask handleClick={handleClick} />
      </div>
    </main>
  );
}

export default App;
