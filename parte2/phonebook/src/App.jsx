import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson=(e)=>{
    e.preventDefault();
    setPersons(persons.concat({'name':newName}))
  }

  const changeName=(e)=>{
    setNewName(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={changeName} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     { persons.map(person=><p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App