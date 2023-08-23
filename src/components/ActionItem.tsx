import React from "react";

type ActionProps = {
  readonly src: string;
  readonly alt: string;
  readonly backgroundClassName: string;
  readonly imageClassName: string;
  readonly backgroundClassNameActive: string;
  readonly isActive: boolean;
  readonly onClick: () => void;
  readonly name: string;
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
  } = props;
  return (
    <div className="action" {...{ onClick }}>
      <div className={isActive ? backgroundClassNameActive : backgroundClassName}>
        <img {...{ src, alt }}  
        className={ isActive ? 'active__img' : imageClassName} />
      </div>
      <button  className={isActive ? 'active__btn' : 'action__btn'}>
        {name}
      </button>
    </div>
  );
};



