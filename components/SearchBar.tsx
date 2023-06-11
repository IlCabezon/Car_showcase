"use client";

// native
import { useState } from "react";

// components
import { SearchManufacturer } from "./";

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}  
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}
