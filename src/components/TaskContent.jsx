import { ProviderContextTask } from "../context/ProviderTask";
import LineVertical from "../widgets/LineVertical";
import TaskCard from "./TaskCard";
import { useContext } from "react";

function TaskContent() {
  const { stateTodos } = useContext(ProviderContextTask);
  // console.log(stateTodos);
  return (
    <section className="py-4">
      <div className="mb-5">
        <time className="text-sm text-black/50 font-bold">
          10 de Noviembre 2023
        </time>
        <h3 className="font-bold text-4xl">Hoy</h3>
      </div>
      <div className="relative pl-6 border-2">
        <div className=" flex flex-col gap-4">
          <LineVertical />
          {/* <TaskCard />
          <TaskCard disabled={true} /> */}
          {stateTodos.length != 0 ? (
            stateTodos.map((todo) => <TaskCard key={todo.id} todo={todo} />)
          ) : (
            <h4 className="text-3xl font-bold text-center">
              No hay tareas para mostrar
            </h4>
          )}
        </div>
      </div>
    </section>
  );
}

export default TaskContent;
