import "../styles/searchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <label htmlFor="search"></label>
      <input type="text" className="search" placeholder="search" />
      <button> Search </button>
    </div>
  );
};

export default SearchBar;
