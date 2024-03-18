import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson=(e)=>{
    e.preventDefault();
    const newPerson={name:newName};
    const index=persons.findIndex(person=>person.name==newName )

    console.log(newPerson)
    console.log("persons: ",persons)
    console.log('index :>> ', index);
    if(index==-1){
      setPersons(persons.concat(newPerson));
    }
    else{
      alert(`${newName} is already added to the phonebook`)
    }
   
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