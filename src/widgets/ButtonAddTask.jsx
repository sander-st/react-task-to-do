function ButtonAddTask({ handleClick }) {
  return (
    <div className="fixed bottom-6 right-6 rounded-full bg-linear-violet-blu w-12 h-12 text-white flex scale-150 shadow-hover">
      <button className="flex m-auto rounded-full" onClick={handleClick}>
        <i className="fa-solid fa-plus m-auto text-4xl font-bold"></i>
      </button>
    </div>
  );
}

export default ButtonAddTask;
