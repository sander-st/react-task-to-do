import { useContext } from "react";
import { ProviderContextTask } from "../context/ProviderTask";
import { useForm } from "../hook/useForm";

function AddTaskForm({ activeForm, setActiveForm }) {
  const { handleNewTodo } = useContext(ProviderContextTask);

  const hiddenForm = () => setActiveForm("hidden");

  const { form, handleChange, resetForm } = useForm({
    title: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    notify: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewTodo({
      id: new Date().getTime(),
      ...form,
    });
    resetForm();
  };

  return (
    <section
      className={`fixed top-1/4 bg-gray-bg-pri bottom-0 rounded-t-3xl shadow-top p-3 overflow-y-auto md:static md:max-w-[407px] md:rounded-e-3xl md:rounded-tl-none md:shadow-right md:h-full md:shrink-0 w-full z-10 ${
        activeForm ? activeForm : ""
      }`}>
      <aside className="flex flex-col gap-6 max-w-md m-auto relative">
        {/* button hide form task */}
        <button
          className="w-8 h-8 border-2 border-violetColor rounded-full flex absolute right-0 top-0"
          onClick={hiddenForm}>
          <i className="fa-solid fa-circle-xmark text-2xl leading-[0] text-violetColor m-auto hover:text-red-600/40 transition-colors ease-in"></i>
        </button>
        <h2 className="text-[32px] font-bold text-center">Crear nueva tarea</h2>

        {/* create new task */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3.5">
            <div>
              <input
                type="text"
                name="title"
                placeholder="¿Que hay que hacer hoy?"
                className="f-input"
                onChange={handleChange}
                value={form.title}
              />
            </div>

            <div>
              <textarea
                name="description"
                id="description"
                className="f-input"
                onChange={handleChange}
                value={form.description}
                placeholder="Describe lo que se va hacer en el día"></textarea>
            </div>
            <div>
              <input
                type="date"
                name="date"
                id="date"
                className="f-input font-medium"
                onChange={handleChange}
                value={form.date}
              />
            </div>
            <div className="flex justify-between flex-wrap gap-3.5">
              <div className="shrink-0">
                <span className="border-2 border-gray-bg-sec py-1.5 px-3 rounded-s-md font-bold">
                  Inicia
                </span>
                <input
                  type="time"
                  name="startTime"
                  id="startTime"
                  className="f-input-time"
                  onChange={handleChange}
                  value={form.startTime}
                />
              </div>
              <div className="shrink-0">
                <span className="border-2 border-gray-bg-sec py-1.5 px-3 rounded-s-md font-bold">
                  Termina
                </span>
                <input
                  type="time"
                  name="endTime"
                  id="endTime"
                  className="f-input-time"
                  onChange={handleChange}
                  value={form.endTime}
                />
              </div>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="notify"
                  className="scale-150"
                  onChange={handleChange}
                  checked={form.notify}
                />
                <span className="ml-3 font-semibold">
                  Recibir alerta para esta tarea
                </span>
              </label>
            </div>
          </div>

          <div className="mt-5">
            <button className="py-2 block bg-violetColor w-full rounded-md font-bold hover:bg-violetColor/80 transition-colors ease-in">
              Añadir tarea
            </button>
          </div>
        </form>
      </aside>
    </section>
  );
}

export default AddTaskForm;
