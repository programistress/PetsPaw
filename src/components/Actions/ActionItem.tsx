import React, { useState } from "react";
import { Link } from "react-router-dom";

type ActionProps = {
  readonly src: string;
  readonly alt: string;
  readonly backgroundClassName: string;
  readonly imageClassName: string;
  readonly name: string;
  readonly link: string;
};

export function ActionItem(props: ActionProps ){
  const {
    name,
    src,
    alt,
    imageClassName,
    backgroundClassName,
    link
  } = props;
  
  return (
    <div className="action">
      <Link to={link}>
      <div className={backgroundClassName}>
        <img {...{ src, alt }}  
        className={imageClassName} />
      </div>
      </Link>
      <Link to={link}>
      <button className={'action__btn'}>
        {name}
      </button>
      </Link>
    </div>
  );
};



