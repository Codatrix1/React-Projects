import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

const App = function () {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#087f5b").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Code from the documentation
      const colors = new Values(color).all(10);
      // console.log(colors);

      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <section className="container">
        <h3>color generator</h3>

        <form>
          <input
            type="text"
            placeholder="#087f5b"
            className={`${error ? "error" : null}`}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <button type="submit" className="btn" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((eachColor, index) => {
          // console.log(eachColor);
          return (
            <SingleColor
              key={index}
              {...eachColor}
              index={index}
              hexColor={eachColor.hex}
            />
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default App;
