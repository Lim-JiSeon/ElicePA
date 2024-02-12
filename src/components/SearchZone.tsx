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
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 16px;
        }
      `}</style>
    </div>
  );
};
