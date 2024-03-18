export default function PersonForm({addPerson,changeName, newName, changePhone, phone}) {
  return (
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
  );
}
