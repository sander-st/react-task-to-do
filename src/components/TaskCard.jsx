import ButtonItem from "../widgets/ButtonItem";
import FloatingPoint from "../widgets/FloatingPoint";

function TaskCard({ disabled = false }) {
  const taskIsDisabled = {
    footer: "hidden",
    colorBg: "bg-gray-bg-sec",
    textColor: "text-black/50",
    styleParrafo: "h-5 overflow-hidden text-ellipsis",
  };

  const taskIsActive = {
    colorBg: "bg-linear-violet-blu",
    textColor: "text-white",
    textColorTrans: "text-white/70",
  };

  return (
    <article
      className={`relative ${
        disabled
          ? taskIsDisabled.colorBg + " " + taskIsDisabled.textColor
          : taskIsActive.colorBg + " " + taskIsActive.textColor
      } px-6 py-8 rounded-3xl shadow-xl flex flex-col gap-4`}>
      {/* punto flotante (left is clickeable) */}
      <FloatingPoint
        taskIsDisabled={taskIsDisabled.colorBg}
        taskIsActive={taskIsActive.colorBg}
        disabled={disabled}
      />

      <header className="sm:flex sm:justify-between sm:items-center">
        <h3 className="font-bold text-2xl">Design Metting</h3>
        <div
          className={`text-sm ${
            disabled ? taskIsDisabled.textColor : taskIsActive.textColorTrans
          } font-semibold`}>
          <time>09:30 / 10:30</time>
        </div>
      </header>

      <p className={disabled ? taskIsDisabled.styleParrafo : undefined}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, earum
        minus debitis labore ipsa exercitationem nostrum animi! Nobis repellat
        neque, animi nihil provident nemo dolore magnam aut laborum id.
        Repudiandae? Hic labore cupiditate laboriosam voluptatem! Temporibus
        dolor pariatur eligendi modi facilis, voluptas id laboriosam qui iste?
        Sapiente ipsa et voluptas, a, totam quasi at hic excepturi doloribus,
        quae ex ratione!
      </p>

      <footer className={`${disabled && taskIsDisabled.footer}`}>
        <div className="flex items-end justify-center gap-3">
          <ButtonItem FaIcon="fa-trash" />
          <ButtonItem FaIcon="fa-pen-to-square" />
        </div>
        <div className="flex items-center justify-center font-bold text-sm mt-1.5">
          restan <time>1h</time>
        </div>
      </footer>
    </article>
  );
}

export default TaskCard;
