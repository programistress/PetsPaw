import React from "react";
import "./CustomGrid.css";
import Image from "./Image";
import { useSelector } from "react-redux";
import { getLimit } from "../../features/cats/catSlice";

interface BreedProps {
  images: Array<string>;
  breeds?: Array<string>;
}

function CustomGridMobile(props: BreedProps) {
  const limit = useSelector(getLimit);

  const finalArray = props.images.slice(0, limit);
  if (props.breeds) {
    return (
      <div className="grid__mobile">
        {finalArray.map((image) => (
          <Image image={image} imgClassName="image__mobile rounded" />
        ))}
      </div>
    );
  } else {
    return (
      <div className="grid__mobile">
        {props.images.map((image) => (
          <Image image={image} imgClassName="image__mobile rounded" />
        ))}
      </div>
    );
  }
}

export default CustomGridMobile;
