import React from "react";
import { SearchBar } from "./SearchBar";
import { ChipTable } from "./ChipTable";

export const SearchZone = () => {
  return (
    <div className="search-zone-container">
      <SearchBar />
      <ChipTable />

      <style jsx>{`
        .search-zone-container {
          max-width: 1280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};
