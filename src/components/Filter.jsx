import '../scss/Filter.scss';

export const Filter = ({ handleSearch, search }) => {
  return (
    <div className="filter">
      <div className="filter-container">
        <input placeholder="Cargo Pants..." className="filter-container__input" onChange={handleSearch} value={search} type="text" />
        <span className="filter-container__icon material-symbols-outlined">search</span>
      </div>
    </div>
  );
};
