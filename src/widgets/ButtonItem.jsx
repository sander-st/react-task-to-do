function ButtonItem({ FaIcon, ...props }) {
  return (
    <button
      className="px-2 py-1 border-2 border-slate-400 rounded-md"
      {...props}>
      <i className={`fa-solid ${FaIcon}`}></i>
    </button>
  );
}

export default ButtonItem;
