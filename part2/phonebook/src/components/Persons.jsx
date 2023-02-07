import React from "react";

// components
import Person from "./Person";

const Persons = ({ persons, deletePerson }) => {
  return (
    <>
      {persons.map((p) => (
        <div
          key={p.id}
          style={{ display: "flex", gap: "0.5rem", marginBottom: "1.2rem" }}
        >
          <Person person={p} />
          <button onClick={() => deletePerson(p.id, p.name)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Persons;
