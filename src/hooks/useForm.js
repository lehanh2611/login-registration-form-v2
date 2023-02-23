import { useState } from "react";

export default function useForm({ defaultValue }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState(defaultValue);
  const [error] = useState(() =>
    Object.keys(defaultValue).reduce((acc, cur) => {
      return { ...acc, [cur]: "" };
    }, {})
  );

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (callback) => (event) => {
    event.preventDefault();
    if (!isSubmitted) setIsSubmitted(true);

    callback(values);
  };

  return { values, error, onChange, handleSubmit };
}
