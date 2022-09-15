import React from "react";

const FilterPhoneBookByName = ({ filterByName, setFilterByName }) => {
  return (
    <>
      filter shown with:
      <input
        value={filterByName}
        onChange={(e) => setFilterByName(e.target.value)}
      />
    </>
  );
};

export default FilterPhoneBookByName;
