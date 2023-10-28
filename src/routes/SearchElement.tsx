import React from "react";
import StickyHeader from "../components/StickyHeader";
import TopMenu from "../components/TopMenu";
import SearchDisplay from "../components/Search/SearchDisplay";
import { useMediaQuery } from "react-responsive";

const SearchElement = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1201px)" });
  return (
    <div className="wrapper">
      {isBigScreen && <StickyHeader />}
      <div className="flexcolumn">
        <TopMenu />
        <SearchDisplay />
      </div>
    </div>
  );
};

export default SearchElement;
