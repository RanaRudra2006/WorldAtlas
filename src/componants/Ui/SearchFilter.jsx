import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countrys,
  setCountrys,
}) => {
  const inputHendler = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const hendeleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const shortCountrys = (value) => {
    const shortCountry = [...countrys].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountrys(shortCountry);
  };

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={inputHendler}
      />

      <div>
        <button onClick={() => shortCountrys("asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => shortCountrys("des")}>Dec</button>
      </div>

      <div>
        <select
          className="select-section"
          value={filter}
          onChange={hendeleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;
