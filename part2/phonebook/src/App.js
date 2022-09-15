import { useState } from "react";

import Persons from "./components/Persons";
import AddNewNumberForm from "./components/AddNewNumberForm";
import FilterPhoneBookByName from "./components/FilterPhoneBookByName";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", number: "040-123456" },
    { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
    { id: 3, name: "Dan Abramov", number: "12-43-234345" },
    { id: 4, name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newPersonID, setNewPersonID] = useState(persons.length + 1);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filterByName, setFilterByName] = useState("");

  const personsFilteredByName = persons.filter((p) =>
    p.name.toLowerCase().includes(filterByName.toLowerCase())
  );

  const submitHandler = (e) => {
    e.preventDefault();

    // check if the name already exists in the phonebook
    if (persons.find((p) => p.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    // Add new person to phonebook
    setPersons(
      persons.concat({
        id: newPersonID,
        name: newName,
        number: newPhoneNumber,
      })
    );
    setNewPersonID(newPersonID + 1);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterPhoneBookByName
        filterByName={filterByName}
        setFilterByName={setFilterByName}
      />

      <h2>Add a new number</h2>
      <AddNewNumberForm
        newName={newName}
        setNewName={setNewName}
        newPhoneNumber={newPhoneNumber}
        setNewPhoneNumber={setNewPhoneNumber}
        submitHandler={submitHandler}
      />

      <h2>Numbers</h2>
      <Persons persons={personsFilteredByName} />
    </div>
  );
};

export default App;
