import React, { useEffect, useState } from "react";
import ActionHeader from "../Actions/ActionHeader";
import CustomGrid from "../CustomGrid/CustomGrid";
import "./Display.css";
import Dropdown from "./Dropdown";
import { useMediaQuery } from "react-responsive";
import CustomGridMobile from "../CustomGrid/CustomGridMobile";

const BreedsDisplay = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 725px)" });
  const [cats, setCats] = useState([]);
  const [arrayType, setArrayType] = useState("full");

  async function fetchCats() {
    await fetch("https://api.thecatapi.com/v1/breeds/?limit=20", {
      headers: {
        "x-api-key":
          "live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE",
      },
    }).then((response) =>
      response.json().then((data) => ({
        data: setCats(data),
        status: response.status,
      }))
    );
  }

  useEffect(() => {
    fetchCats();
  }, []);

  const imgsfull = cats.map((item) => item.image?.url);
  const breednames = cats.map((item) => item.name);
  const ids = cats.map((item) => item.id.length > 5 ? item.breeds[0].id : item.id);
  const imgs = cats.map((item) => item.url);


  const alphabetA2Z = async () => {
    if (arrayType === "full") {
      setArrayType("full");
      fetch("https://api.thecatapi.com/v1/breeds/?order=ASC", {
        headers: {
          "x-api-key":
            "live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE",
        },
      }).then((response) =>
        response.json().then((data) => ({
          data: setCats(data),
          status: response.status,
        }))
      );
    } else {
      // nothing :o
    }
  };

  const alphabetZ2A = async () => {
    if (arrayType === "full") {
      setArrayType("full");
      fetch("https://api.thecatapi.com/v1/breeds/?order=DESC", {
        headers: {
          "x-api-key":
            "live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE",
        },
      }).then((response) =>
        response.json().then((data) => ({
          data: setCats(data),
          status: response.status,
        }))
      );
    } else {
      // nothing :p
    }
  };

  const breednamesingle: any = [];
  if (arrayType != "full") {
    for (let i = 0; i < 20; i++) {
      breednamesingle.push(arrayType);
    }
  }

  return (
    <div className="action__display-wrapper">
      <div className="top__section">
        <ActionHeader title="breeds" />
        <Dropdown setArrayType={setArrayType} setCats={setCats} />
        <button className="alphabet__btn1" onClick={alphabetA2Z}>
          <img src="/a-b.svg" alt="" />
        </button>
        <button className="alphabet__btn2" onClick={alphabetZ2A}>
          <img src="/b-a.svg" alt="" />
        </button>
      </div>
      {isMobile ? (
        <CustomGridMobile
          images={arrayType === "full" ? imgsfull : imgs}
          breeds={arrayType === "full" ? breednames : breednamesingle}
        />
      ) : (
        <CustomGrid
          images={arrayType === "full" ? imgsfull : imgs}
          breeds={arrayType === "full" ? breednames : breednamesingle}
          ids={ids} 
        />
      )}
    </div>
  );
};

export default BreedsDisplay;
