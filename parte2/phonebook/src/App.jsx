import { useState } from 'react'
import './App.css'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
     phone:'111111111'
   }
  ]) 
  const [newName, setNewName] = useState('')
  const [phone, setPhone]=useState('');
  
  const addPerson=(e)=>{
    e.preventDefault();
    const newPerson={
      name:newName,
      phone:phone
    };
    const index=persons.findIndex(person=>person.name==newName )

    if(index==-1){
      setPersons(persons.concat(newPerson));
    }
    else{
      alert(`${newName} is already added to the phonebook`)
    }
   
  }

  const changeName=(e)=>{
    console.log('name :>> ', newName);
    setNewName(e.target.value);
  }
  const changePhone=(e)=>{
    setPhone(e.target.value);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input onChange={changeName} value={newName}/>
        </div>
        <div>
          Phone: <input onChange={changePhone} value={phone}/>
        </div>
        <div>
          <button className='btn' type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     { persons.map(person=>
     <Person key={person.name} person={person}/>
    )}
    </div>
  )
}

export default App