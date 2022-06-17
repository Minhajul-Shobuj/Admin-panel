import React from "react";
import image from "../../image/93271-page-not-found.gif";
import "./notFound.css";
const NotFound = () => {
  return (
    <>
      <div className="notFound">
        <img src={image} alt="" />
      </div>
    </>
  );
};

export default NotFound;
