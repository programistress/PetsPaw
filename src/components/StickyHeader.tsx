import React from "react";
import Actions from "./Actions/Actions";
import { Link } from "react-router-dom";

const StickyHeader = () => {
  return (
    <div className="header__wrapper">
      <Link to="/">
        <img className="logo__img" src="/Logo.svg" alt="" />
      </Link>
      <img className="hi__img" src="/Hi.svg" alt="" />
      <p className="header__desc">Welcome to my website for cat lovers!</p>
      <h2 className="header__title">Lets start using The Cat API</h2>
      <Actions />
    </div>
  );
};

export default StickyHeader;
