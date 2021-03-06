import React from "react";

const List = ({ props }) => {
  return (
    <React.Fragment>
      {props.map((eachPerson) => {
        const { id, name, age, image } = eachPerson;

        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </React.Fragment>
  );
};

export default List;
