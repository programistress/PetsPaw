import React from "react";
import "./SelectedCat.css";
import ActionHeader from "../Actions/ActionHeader";

function SelectedCatDisplay(selectedCat ) {
  console.log(selectedCat);

  return (
    <div className="action__display-wrapper">
      <div className="top__section">
        <ActionHeader title={selectedCat.selectedCat.name} />
      </div>
      <div className="cat__info">
        <img
          src={selectedCat.selectedCat.image.url}
          alt=""
          className="selcat__img"
        />
        <p className="desc">{selectedCat.selectedCat.description}</p>
        <div className="cat__description">
          <div className="firstpart">
            <p><span>Weight:</span> {selectedCat.selectedCat.weight.metric} kg</p>
            <p><span>Lifespan:</span> {selectedCat.selectedCat.life_span} years</p>
            <p><span>Origin:</span> {selectedCat.selectedCat.origin}</p>
          </div>
          <div className="secondpart">
            <p><span>Temperament:</span> {selectedCat.selectedCat.temperament}</p>
          </div>
        </div>
        <p className="log__wrapper wikipedia">
          <span>Wikipedia link:</span>{" "}
          <a
            href={selectedCat.selectedCat.wikipedia_url}
            target="_blank"
            className="wiki__link"
          >
            {selectedCat.selectedCat.wikipedia_url}
          </a>
        </p>
      </div>
    </div>
  );
}

export default SelectedCatDisplay;
