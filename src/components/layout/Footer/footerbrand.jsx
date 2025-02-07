import styled from "kotii-styled";
import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai/index.js";
import { Brand } from "../shared/index.jsx";

const AuthorText = styled("section")({
  display: "flex",
  flexDirection: "column",
  gap: 5,
  textDecoration: "none",
});

const MakerByText = styled("p")({
  display: "flex",
  fontSize: "25px",
  marginLeft: "10px",
  color: "white",
  gap: 5,
  flexDirection: "row",
});
const MakerAuthText = styled("small")({
  display: "block",
  fontSize: "18px",
  color: "white",
});

const FooterWrapper = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  minHeight: "80px",
  paddingTop: "25px",
  position: "absolute",
  bottom: "0",
  backgroundColor: "transparent",
  justifyContent: "center"
});

const FooterBrandWrapper = styled("div")({
  width: "53%",
  display: "flex",
  justifyContent: "space-between",
  gap: 50,
  marginLeft: "2%",
});

const CustomLink = styled("a")({
  textDecoration: "none",
  display: "flex",
  backgroundColor: "inherit",
});

const Text = styled("small")({
  color: "white",
  display: "flex",
});
const FooterBrand = () => {
  return (
    <FooterWrapper>
     
        
  
          <MakerAuthText>
            
          &#169; 2025 TheCapGuy PTY LTD
          </MakerAuthText>
        
        
      
    </FooterWrapper>
  );
};

export default FooterBrand;
