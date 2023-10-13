function FloatingPoint({ disabled, taskIsDisabled, taskIsActive, ...props }) {
  return (
    <div
      className={`absolute w-9 h-9 p-1 rounded-full ${
        (disabled && taskIsDisabled) || taskIsActive
      } flex left-[-40px] shadow-md top-0`}>
      <button
        className={`basis-full rounded-full ${
          (disabled && taskIsDisabled) || taskIsActive
        }`}
        {...props}></button>
    </div>
  );
}

export default FloatingPoint;
