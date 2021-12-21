import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, hexColor, index }) => {
  const [alert, setAlert] = useState(false);
  const bg = rgb.join(",");
  // const hexValue = rgbToHex(...rgb);

  const hexWithHashtag = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexWithHashtag);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexWithHashtag}</p>
      {alert && (
        <p className="alert" style={{ color: "#F90716", fontWeight: "500" }}>
          copied to clipboard
        </p>
      )}
    </article>
  );
};

export default SingleColor;
