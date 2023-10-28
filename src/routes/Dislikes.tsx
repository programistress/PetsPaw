import React from "react";
import TopMenu from "../components/TopMenu";
import StickyHeader from "../components/StickyHeader";
import ActionHeader from "../components/Actions/ActionHeader";
import { dislikedArray } from "../components/Voting/VotingDisplay";
import CustomGrid from "../components/CustomGrid/CustomGrid";
import { useMediaQuery } from "react-responsive";
import CustomGridMobile from "../components/CustomGrid/CustomGridMobile";

const Dislikes = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 725px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1201px)" });
  return (
    <div className="wrapper">
      {isBigScreen && <StickyHeader />}
      <div className="flexcolumn">
        <TopMenu />
        <div className="action__display-wrapper">
          <ActionHeader title="dislikes" />
          {dislikedArray.length > 0 ? (
            isMobile ? (
              <CustomGridMobile images={dislikedArray} />
            ) : (
              <CustomGrid images={dislikedArray} />
            )
          ) : (
            <div className="noitem__message">No item here yet.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dislikes;
