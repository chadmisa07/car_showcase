"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { SearchManufacturer } from "./";
import { SearchBarProps } from "@/types";

const SearchBar = ({ doUpdateFilter }: SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const { push } = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    doUpdateFilter("manufacturer", searchManufacturer);
    doUpdateFilter("model", searchModel);
  };

  const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="Magnifying Glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="Car Model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Model"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
