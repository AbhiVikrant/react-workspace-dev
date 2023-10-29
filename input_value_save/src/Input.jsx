import { useState } from "react";
function Input() {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={inputText} />
      <p>Your input: {inputText}</p>
    </div>
  );
};
export default Input;