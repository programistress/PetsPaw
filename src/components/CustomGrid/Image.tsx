import React from "react";

interface ImgProps {
  image: string;
  breed?: string;
  imgClassName: string;
  overlay?: string;
  titleClassname?: string;
}

const Image = (props: ImgProps) => {
  if (props.image) {
    if (props.breed) {
      return (
        <div className="img__card">
          <img className={props.imgClassName} src={props.image} />
          {/* <a className='img__link' href=""> */}
          <div className="card__info">
            <div className={props.overlay}></div>
            <h4
              className={
                props.titleClassname ? props.titleClassname : "img__title"
              }
            >
              {props.breed}
            </h4>
          </div>
          {/* </a> */}
        </div>
      );
    } else if (!props.overlay) {
      return (
        <div className="img__card">
          <img className={props.imgClassName} src={props.image} />
        </div>
      );
    }
  }
};

export default Image;
