"use client";

// native
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// components
import { SearchManufacturer } from "./";

export default function SearchBar() {
  const router = useRouter();

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!manufacturer.trim() && !model.trim()) {
      return alert("Please fill in the search bar");
    }

    updateSearchParams(model, manufacturer)
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
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
          value={model}
          onChange={({ target }) => setModel(target.value)}
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
