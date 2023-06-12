"use client";

// native
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// components
import { SearchManufacturer } from "./";

// types
import { SearchBarProps } from "@/types";

export default function SearchBar({
  setManufacturer,
  setModel,
}: SearchBarProps) {
  const router = useRouter();

  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchManufacturer.trim() && !searchModel.trim()) {
      return alert("Please fill in the search bar");
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />

        <SearchButton searchButtonClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="car model icon"
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={({ target }) => setSearchModel(target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton searchButtonClasses="sm:hidden" />
      </div>
      <SearchButton searchButtonClasses="max-sm:hidden" />
    </form>
  );
}

interface SearchButtonProps {
  searchButtonClasses: string;
}

const SearchButton = ({ searchButtonClasses }: SearchButtonProps) => (
  <button type="submit" className={`-ml-10 z-10 ${searchButtonClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnify glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);
