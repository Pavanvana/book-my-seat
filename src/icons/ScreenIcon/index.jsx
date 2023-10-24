import * as React from "react";
const ScreenIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    width={260}
    height={20}
    style={{
      fill: "rgba(0,0,0,.6)",
    }}
    {...props}
  >
    <use xlinkHref="/icons/seatlayout-icons.svg#icon-screen" />
  </svg>
);
export default ScreenIcon;
