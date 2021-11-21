import React, { useState } from "react";
import data from "./data";
import List from "./List";

const App = function () {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>

        <List props={people} />

        <button className="btn" onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
};

export default App;
