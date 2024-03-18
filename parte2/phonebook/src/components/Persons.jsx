export default function Persons({list}){
return(
  <div>
    {list.map((person) => (
        <p key={person.name}>{person.name}  {person.phone}</p>
        
      ))}
  </div>
    

)
}