import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../componants/Ui/Loader";
import CountryCard from "../componants/CountryCard";
import "../App.css";
import SearchFilter from "../componants/Ui/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countrys, setCountrys] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountrys(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return countrys;
  };

  const filterRegion = (country) => {
    if (filter === "all") return countrys;
    return country.region === filter;
  };

  //here is main logic for Search
  const filterCountrys = countrys.filter(
    (country) => searchCountry(country) && filterRegion(country),
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countrys={countrys}
        setCountrys={setCountrys}
      />
      <ul className="grid grid-four-cols">
        {filterCountrys.map((elem, idx) => {
          return <CountryCard key={idx} country={elem} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
