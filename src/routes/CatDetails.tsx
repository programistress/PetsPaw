import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import StickyHeader from "../components/StickyHeader";
import TopMenu from "../components/TopMenu";
import SelectedCatDisplay from "../components/Breeds/SelectedCatDisplay";

function CatDetails() {
  const { id } = useParams();
  const urlId = id?.replace(/:/g, "");
  const [cats, setCats] = useState<Array<any>>([]);
  const [selectedCat, setSelectedCat] = useState(null);

  async function fetchCats() {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/breeds/?limit=67", {
        headers: {
          "x-api-key": "live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE",
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setCats(data);
      } else {
        console.error('Failed to fetch data. Status code:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchCats();
  }, []);

  useEffect(() => {
    // Use a separate effect to set the selected cat
    if (urlId) {
      const cat = cats.find((component) => component.id === urlId);
      if (cat) {
        setSelectedCat(cat);
      }
    }
  }, [urlId, cats]);

  const isBigScreen = useMediaQuery({ query: "(min-width: 1201px)" });

  return (
    <div className="wrapper">
      {isBigScreen && <StickyHeader />}
      <div className="flexcolumn">
        <TopMenu />
        {selectedCat ? (
          <SelectedCatDisplay selectedCat={selectedCat} />
        ) : (
          <p className="header__title center ">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default CatDetails;