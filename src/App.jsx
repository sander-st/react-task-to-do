import AddTaskForm from "./components/AddTaskForm";
import TaskContent from "./components/TaskContent";

function App() {
  return (
    <main className="md:px-4 md:h-screen">
      <div className="md:flex md:gap-5 md:max-w-7xl m-auto border-2">
        <AddTaskForm />
        <TaskContent />
      </div>
    </main>
  );
}

export default App;
