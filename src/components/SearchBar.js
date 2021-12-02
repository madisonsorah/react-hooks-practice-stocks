import React from "react";

function SearchBar({checkedSort, setCheckedSort, setTypeFilter}) {
  function handleType(e) {
    setTypeFilter(e.target.value);
  }
  
    function handleNameSort() {
      setCheckedSort("name");
    }
  
    function handlePriceSort() {
      setCheckedSort("price");
    }
  
  
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={checkedSort === "name" ? true : false}
          onChange={handleNameSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={checkedSort === "price" ? true : false}
          onChange={handlePriceSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleType}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
