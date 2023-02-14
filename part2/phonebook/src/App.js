import { useState, useEffect } from "react";
import { phonebookService } from "./services/phoneBook";

import Persons from "./components/Persons";
import AddNewNumberForm from "./components/AddNewNumberForm";
import FilterPhoneBookByName from "./components/FilterPhoneBookByName";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPersonID, setNewPersonID] = useState(0);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filterByName, setFilterByName] = useState("");

  // Get initial persons
  useEffect(() => {
    phonebookService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
        setNewPersonID(Math.max(...initialPersons.map((p) => p.id)) + 1);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const personsFilteredByName = persons.filter((p) =>
    p.name.toLowerCase().includes(filterByName.toLowerCase())
  );

  // add new person
  const submitHandler = (e) => {
    e.preventDefault();

    // check if the name already exists in the phonebook
    const personAlreadyInPhonebook = persons.find((p) => p.name === newName);
    if (personAlreadyInPhonebook) {
      if (
        window.confirm(
          `${personAlreadyInPhonebook.name} is already added to the phonebook, replace the old number with the new one`
        )
      ) {
        phonebookService
          .update({
            ...personAlreadyInPhonebook,
            number: newPhoneNumber,
          })
          .then((response) => {
            setPersons(
              persons.map((p) => (p.id === response.id ? response : p))
            );
          })
          .catch((error) => {
            console.warn(error);
          });
      }
      return;
    }

    // Add new person to phonebook
    phonebookService
      .create({
        id: newPersonID + 1,
        name: newName,
        number: newPhoneNumber,
      })
      .then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setNewPersonID(newPerson.id);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  // delete person
  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      phonebookService
        .remove(id)
        .then(() => {
          // filter out deleted person
          setPersons(persons.filter((p) => p.id !== id));
        })
        .catch((error) => {
          console.warn(error);
        });
    }
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
      <Persons persons={personsFilteredByName} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
