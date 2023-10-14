import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const handleChange = (elem) => {
    const { name, value } = elem.target;
    if (name === "notify") {
      setFormState({
        ...formState,
        [name]: elem.target.checked,
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const resetForm = () => {
    setFormState(initialForm);
  };

  return {
    form: formState,
    handleChange,
    resetForm,
  };
};
