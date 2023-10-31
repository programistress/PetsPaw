import React from "react";
import "./CustomGrid.css";
import Image from "./Image";
import { useSelector } from "react-redux";
import { getLimit } from "../../features/cats/catSlice";

interface BreedProps {
  images: Array<string>;
  breeds?: Array<string>;
  ids?: Array<string>;
}

const CustomGrid = (props: BreedProps) => {
  // i need to display it by limit state
  const limit = useSelector(getLimit);
  if (props.breeds && props.ids) {
    return (
      <div className="grid">
        {/* 1 */}
        <div className="row">
          <Image
            imgClassName="medium rounded"
            image={props.images[0]}
            overlay="overlay-breed medium"
            breed={props.breeds[0]}
            id={props.ids[0]}
          />
          <Image
            imgClassName="standart rounded"
            image={props.images[1]}
            overlay="overlay-breed standart"
            breed={props.breeds[1]}
            id={props.ids[1]}
          />
          <Image
            imgClassName="standart rounded"
            image={props.images[2]}
            overlay="overlay-breed standart"
            breed={props.breeds[2]}
            id={props.ids[2]}
          />
        </div>
        {/* 2  5 */}
        <div className="row2">
          <Image
            imgClassName="standart rounded"
            image={props.images[3]}
            overlay="overlay-breed standart"
            breed={props.breeds[3]}
            id={props.ids[3]}
          />
          <Image
            imgClassName="big col2row2 rounded"
            image={props.images[4]}
            overlay="big overlay-breed__big col2row2"
            breed={props.breeds[4]}
            titleClassname="img__title-big"
            id={props.ids[4]}
          />
        </div>
        {/* 3 */}
        <div
          className={
            limit === "10" || limit === "15" || limit === "20"
              ? "row"
              : "row__hidden"
          }
        >
          <Image
            imgClassName="standart rounded"
            image={props.images[5]}
            overlay="overlay-breed standart"
            breed={props.breeds[5]}
            id={props.ids[5]}
          />
          <Image
            imgClassName="standart rounded"
            image={props.images[6]}
            overlay="overlay-breed standart"
            breed={props.breeds[6]}
            id={props.ids[6]}
          />
          <Image
            imgClassName="medium col3row3 rounded"
            image={props.images[7]}
            overlay="overlay-breed medium"
            breed={props.breeds[7]}
            id={props.ids[7]}
          />
        </div>
        {/* 4  10 */}
        <div
          className={
            limit === "10" || limit === "15" || limit === "20"
              ? "row4"
              : "row__hidden"
          }
        >
          <Image
            imgClassName="big col1row4 rounded"
            image={props.images[8]}
            overlay="overlay-breed__big big col1row4"
            breed={props.breeds[8]}
            titleClassname="img__title-big"
            id={props.ids[8]}
          />
          <Image
            imgClassName="standart col2row4 rounded"
            image={props.images[9]}
            overlay="overlay-breed col2row4 standart"
            breed={props.breeds[9]}
            titleClassname="img__title-small"
            id={props.ids[9]}
          />
        </div>
        {/* 5 */}
        <div
          className={limit === "15" || limit === "20" ? "row" : "row__hidden"}
        >
          <Image
            imgClassName="medium rounded"
            image={props.images[10]}
            overlay="overlay-breed medium"
            breed={props.breeds[10]}
            id={props.ids[10]}
          />
          <Image
            imgClassName="standart rounded"
            image={props.images[11]}
            overlay="overlay-breed standart"
            breed={props.breeds[11]}
            id={props.ids[11]}
          />
          <Image
            imgClassName="standart rounded"
            image={props.images[12]}
            overlay="overlay-breed standart"
            breed={props.breeds[12]}
            id={props.ids[12]}
          />
        </div>
        {/* 6  15 */}
        <div
          className={limit === "15" || limit === "20" ? "row2" : "row__hidden"}
        >
          <Image
            imgClassName="standart rounded"
            image={props.images[13]}
            overlay="overlay-breed standart"
            breed={props.breeds[13]}
            id={props.ids[13]}
          />
          <Image
            imgClassName="big col2row2 rounded"
            image={props.images[14]}
            overlay="overlay-breed__big big col2row2"
            breed={props.breeds[14]}
            titleClassname="img__title-big"
            id={props.ids[14]}
          />
        </div>
        {/* 7 */}
        <div className={limit === "20" ? "row" : "row__hidden"}>
          <Image
            imgClassName="standart rounded"
            image={props.images[15]}
            overlay="overlay-breed standart"
            breed={props.breeds[15]}
            id={props.ids[15]}
          />
          <Image
            imgClassName="standart rounded"
            image={props.images[16]}
            overlay="overlay-breed standart"
            breed={props.breeds[16]}
            id={props.ids[16]}
          />
          <Image
            imgClassName="medium col3row3 rounded"
            image={props.images[17]}
            overlay="overlay-breed medium"
            breed={props.breeds[17]}
            id={props.ids[17]}
          />
        </div>
        {/* 8 20 */}
        <div className={limit === "20" ? "row4" : "row__hidden"}>
          <Image
            imgClassName="big col1row4 rounded"
            image={props.images[18]}
            overlay="overlay-breed__big big col1row4"
            breed={props.breeds[18]}
            titleClassname="img__title-big"
            id={props.ids[18]}
          />
          <Image
            imgClassName="standart col2row4 rounded"
            image={props.images[19]}
            overlay="overlay-breed col2row4 standart"
            breed={props.breeds[19]}
            titleClassname="img__title-small"
            id={props.ids[19]}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid">
        {/* 1 */}
        <div className="row">
          <Image imgClassName="medium rounded" image={props.images[0]} />
          <Image imgClassName="standart rounded" image={props.images[1]} />
          <Image imgClassName="standart rounded" image={props.images[2]} />
        </div>
        {/* 2  5 */}
        <div className="row2">
          <Image imgClassName="standart rounded" image={props.images[3]} />
          <Image imgClassName="big col2row2 rounded" image={props.images[4]} />
        </div>
        {/* 3 */}
        <div className="row">
          <Image imgClassName="standart rounded" image={props.images[5]} />
          <Image imgClassName="standart rounded" image={props.images[6]} />
          <Image
            imgClassName="medium col3row3 rounded"
            image={props.images[7]}
          />
        </div>
        {/* 4  10 */}
        <div className="row4">
          <Image imgClassName="big col1row4 rounded" image={props.images[8]} />
          <Image
            imgClassName="standart col2row4 rounded"
            image={props.images[9]}
          />
        </div>
        {/* 5 */}
        <div className={props.images[10] ? "row" : "row__hidden"}>
          <Image imgClassName="medium rounded" image={props.images[10]} />
          <Image imgClassName="standart rounded" image={props.images[11]} />
          <Image imgClassName="standart rounded" image={props.images[12]} />
        </div>
        {/* 6  15 */}
        <div className={props.images[13] ? "row2" : "row__hidden"}>
          <Image imgClassName="standart rounded" image={props.images[13]} />
          <Image imgClassName="big col2row2 rounded" image={props.images[14]} />
        </div>
        {/* 7 */}
        <div className={props.images[15] ? "row" : "row__hidden"}>
          <Image imgClassName="standart rounded" image={props.images[15]} />
          <Image imgClassName="standart rounded" image={props.images[16]} />
          <Image
            imgClassName="medium col3row3 rounded"
            image={props.images[17]}
          />
        </div>
        {/* 8 20 */}
        <div className={props.images[18] ? "row4" : "row__hidden"}>
          <Image imgClassName="big col1row4 rounded" image={props.images[18]} />
          <Image
            imgClassName="standart col2row4 rounded"
            image={props.images[19]}
          />
        </div>
      </div>
    );
  }
};

export default CustomGrid;
