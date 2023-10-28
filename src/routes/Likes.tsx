import React from "react";
import StickyHeader from "../components/StickyHeader";
import TopMenu from "../components/TopMenu";
import ActionHeader from "../components/Actions/ActionHeader";
import { likedArray } from "../components/Voting/VotingDisplay";
import CustomGrid from "../components/CustomGrid/CustomGrid";
import { useMediaQuery } from "react-responsive";
import CustomGridMobile from "../components/CustomGrid/CustomGridMobile";

const Likes = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1201px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 725px)" });
  return (
    <div className="wrapper">
      {isBigScreen && <StickyHeader />}
      <div className="flexcolumn">
        <TopMenu />
        <div className="action__display-wrapper">
          <ActionHeader title="likes" />
          {likedArray.length > 0 ? (
            isMobile ? (
              <CustomGridMobile images={likedArray} />
            ) : (
              <CustomGrid images={likedArray} />
            )
          ) : (
            <div className="noitem__message">No item here yet.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Likes;
