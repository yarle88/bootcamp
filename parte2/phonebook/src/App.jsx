import { useState } from "react";
import "./App.css";
import Person from "./components/Person";
import { personsData } from "./data";

const App = () => {
  const [persons, setPersons] = useState(personsData);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [filterItem, setFilterItem] = useState("");

  const list=filterItem!=''? persons.filter(person=>person.name.toLowerCase().includes(filterItem)):persons;

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
      <div className="filter">
      <p className="filter-text">Filter shown with: </p>
      <input type="text" className="filter-input" onChange={changeFilter} value={filterItem} />
      </div>
      <form onSubmit={addPerson}>
        <div>
          Name: <input onChange={changeName} value={newName} />
        </div>
        <div>
          Phone: <input onChange={changePhone} value={phone} />
        </div>
        <div>
          <button className="btn" type="submit">
            Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {list.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default App;
