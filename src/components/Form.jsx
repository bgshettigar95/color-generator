import React, { useState } from "react";

const Form = () => {
  const [color, setColor] = useState("#000000");
  const handleChange = (e) => {
    setColor(e.target.value);
  };


  return (
    <section className="container">
      <form className="color-form">
        <label>Color Generator</label>
        <input type="color" value={color} onChange={handleChange} />
        <input type="text" value={color} onChange={handleChange} />
        <button type="submit" className="btn">
          Sumit
        </button>
      </form>
    </section>
  );
};

export default Form;
