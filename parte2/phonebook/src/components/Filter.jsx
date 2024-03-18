export default function Filter({ filterItem, changeFilter }) {
  return (
    <div className="filter">
      <p className="filter-text">Filter shown with: </p>
      <input
        type="text"
        className="filter-input"
        onChange={changeFilter}
        value={filterItem}
      />
    </div>
  );
}
