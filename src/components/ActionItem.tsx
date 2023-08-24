import React from "react";
import { Link } from "react-router-dom";

type ActionProps = {
  readonly src: string;
  readonly alt: string;
  readonly backgroundClassName: string;
  readonly imageClassName: string;
  readonly backgroundClassNameActive: string;
  readonly isActive: boolean;
  readonly onClick: () => void;
  readonly name: string;
  readonly link: string;
};

export function ActionItem(props: ActionProps){
  const {
    name,
    src,
    alt,
    isActive,
    imageClassName,
    backgroundClassName,
    backgroundClassNameActive,
    onClick,
    link
  } = props;
  return (
    <div className="action" {...{ onClick }}>
      <Link to={link}>
      <div className={isActive ? backgroundClassNameActive : backgroundClassName}>
        <img {...{ src, alt }}  
        className={ isActive ? 'active__img' : imageClassName} />
      </div>
      </Link>
      <Link to={link}>
      <button className={isActive ? 'active__btn' : 'action__btn'}>
        {name}
      </button>
      </Link>
    </div>
  );
};



