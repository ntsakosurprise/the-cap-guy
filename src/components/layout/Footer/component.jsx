import React from "react";

import styled from "kotii-styled";
import FooterActions from "./footeractions.jsx";
import FooterBrand from "./footerbrand.jsx";
import SvgComponent from "./svgcomp.svg"
const StyledFooter = styled("footer")({
  marginTop: "auto",

  display: "flex",
  flexDirection: "column",
  position:"relative",
  paddingBottom: 0,
  marginBottom: 0
  // justifyItems: "center",
  // alignItems: "center",
});

const Footer = () => {
  return (
    <StyledFooter>
      
      
      <FooterBrand />
      <img src={SvgComponent} width="100%" style={{
        
        bottom: 0
      }}/>
    </StyledFooter>
  );
};

export default Footer;
