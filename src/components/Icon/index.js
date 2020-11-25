import React from "react";
import theme from "../../theme";

// Tool for clean SVG Code: https://jakearchibald.github.io/svgomg/

const getViewBox = (name) => {
  switch (name) {
    default:
      return "0 0 36 36";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "search":
      return (
        <>
          <path
            fill={props.customColor}
            d="M16.33 5.05A10.95 10.95 0 115.39 16 11 11 0 0116.33 5.05m0-2.05a13 13 0 1013 13 13 13 0 00-13-13z"
          />
          <path
            fill={props.customColor}
            d="M35 33.29l-7.37-7.42-1.42 1.41 7.37 7.42A1 1 0 1035 33.29z"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </>
      );
    default:
      return <path />;
  }
};

const Icon = ({
  name = "",
  style = {},
  customColor = theme.color.grayDarker,
  viewBox = "",
  width = "24px",
  className = "",
  height = "24px",
  stroke = "",
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { customColor, stroke })}
  </svg>
);

export default Icon;
