/* eslint-disable react/prop-types */
import styled from "kotii-styled";
import React from "react";
import { Link } from "wouter";
import KotiiAltSvg from "./kotiiAltSvg.jsx";
import KotiiSvg from "./kotiiSvg.jsx";
import TopCapGuyLogo from "./the-cap-guy-logo.svg"
import {Image} from "kotii-scripts"

// import kotiiSvg from "./kotii.svg";
const StyledBrand = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});
const BrandLogo = styled("div")((props) => {
  return {
    width: props?.size ? `${props.size}px` : "50px",
  };
});
const BrandText = styled("p")((props) => {
  return { color: "black", fontSize: "25px", ...props.brandLogoTextStyles };
});

const Brand = (props) => {
  // eslint-disable-next-line react/prop-types
  const logo = props?.logo ? props.logo : "kotii";
  const brandLogoSize = props?.brandLogoSize ? props.brandLogoSize : 150;
  const logoSize = props?.logoSize ? props?.logoSize : 40;
  const { brandLogoTextStyles } = props?.brandLogoTextStyles
    ? props.brandLogoTextStyles
    : {};
  return (
    <StyledBrand>
      <Link
        href="/"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BrandLogo size={brandLogoSize}>
          <Image src={TopCapGuyLogo} width={150} />
        </BrandLogo>
        
      </Link>
    </StyledBrand>
  );
};

export { Brand };
