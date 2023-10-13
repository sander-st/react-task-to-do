import LineVertical from "../widgets/LineVertical";
import FloatingPoint from "../widgets/FloatingPoint";
import TaskCard from "./TaskCard";

function TaskContent() {
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
          <TaskCard />
          <TaskCard disabled={true} />
          <TaskCard disabled={true} />
          <TaskCard disabled={true} />
          <TaskCard disabled={true} />
          <TaskCard disabled={true} />
        </div>
      </div>
    </section>
  );
}

export default TaskContent;
