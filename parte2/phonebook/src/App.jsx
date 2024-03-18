import { useState } from "react";
import "./App.css";
import Person from "./components/Persons";
import { personsData } from "./data";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm ";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState(personsData);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [filterItem, setFilterItem] = useState("");

  const list =
    filterItem != ""
      ? persons.filter((person) =>
          person.name.toLowerCase().includes(filterItem)
        )
      : persons;

  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      phone: phone,
    };
    const index = persons.findIndex((person) => person.name == newName);

    if (index == -1) {
      setPersons(persons.concat(newPerson));
    } else {
      alert(`${newName} is already added to the phonebook`);
    }
  };

  const changeName = (e) => {
    console.log("name :>> ", newName);
    setNewName(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const changeFilter = (e) => {
    setFilterItem(e.target.value.toLowerCase());
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter changeFilter={changeFilter} filterItem={filterItem} />
      <PersonForm
        addPerson={addPerson}
        changeName={changeName}
        newName={newName}
        changePhone={changePhone}
        phone={phone}
      />
      <h2>Numbers</h2>
      <Persons list={list} />
    </div>
  );
};

export default App;
