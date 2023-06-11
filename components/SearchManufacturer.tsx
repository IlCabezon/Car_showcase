"use client";

// native
import Image from "next/image";
import { useState, Fragment } from "react";

// components
import { Combobox, Transition } from "@headlessui/react";

// types
import { SearchManufacturerProps } from "@/types";

// constants
import { manufacturers } from "@/constants";

export default function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  const {
    Button: ComboboxButton,
    Input: ComboboxInput,
    Options: ComboBoxOptions,
    Option: ComboBoxOption,
  } = Combobox;

  // states
  const [query, setQuery] = useState("");

  // filter functionality
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLocaleLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="Car Logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </ComboboxButton>

          <ComboboxInput
            className="search-manufacturer__input"
            displayValue={(manufacturer: string) => manufacturer}
            placeholder="Volkswagen"
            onChange={({ target }) => setQuery(target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboBoxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredManufacturers.map((item) => (
                <ComboBoxOption
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => {
                    return (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          ></span>
                        ) : (
                          <span></span>
                        )}
                      </>
                    );
                  }}
                </ComboBoxOption>
              ))}
            </ComboBoxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
