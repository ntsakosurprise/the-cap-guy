import styled from "kotii-styled";
import React from "react";
import { TfiGithub } from "react-icons/tfi/index.js";

import { BiCart } from "react-icons/bi/index.js";
import { BiUserPlus } from "react-icons/bi/index.js";
import { BiSearch } from "react-icons/bi/index.js";
import { BiHeart } from "react-icons/bi/index.js";
import { Link } from "wouter";
import { Brand } from "../shared/index.jsx";
import {useRoute} from "wouter"

// import { Link } from "react-router-dom";

const StyledHeader = styled("header")({
  backgroundColor: "#f2f3f4",
  display: "flex",
  flexDirection: "row",
  justifyItems: "center",
  height: "80px",
  paddingLeft: "2%",
  paddingRight: "2%",
  justifyContent: "space-between",
});

const HeaderCart = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingRight: "5%"
    
  };
});

const HeaderShop = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 50,
  };
});

const StyledLink = styled(Link)({
  display: "flex",
  flexDirection: "row",
  color: "green",
  cursor: "pointer",
  position: "relative"
});
const LinkEllipseTextContainer = styled(Link)({
  display: "flex",
  flexDirection: "column",
  gap: 2,
  alignItems: "center",
  cursor: "pointer"
})
const LinkEllipse = styled("small")({
  display:"inline-block",
  width: "15px",
  height: "15px",
  backgroundColor: "red",
  borderRadius: "50%"
})

const LinkText = styled("small")({
  display: "inline-block",
  color:"black",
  fontWeight: "bold"
})

const AppHeader = (props) => {
  const [isActive] = useRoute(props.href);
  console.log("THE HEADER PROPS", props.href)
  return (
    <StyledHeader>
      <Brand />
      <HeaderShop>
       
{/*       
          <LinkEllipseTextContainer {...props} href="/">
            
            <LinkText>Home</LinkText>
            {isActive && props.href && props.href.toLowerCase() == "shop"  ? <LinkEllipse /> : null}
            
          </LinkEllipseTextContainer>
          <LinkEllipseTextContainer {...props} href="/shop">
            
            <LinkText>Shop</LinkText>
            {isActive && props.href && props.href.toLowerCase() == "shop" ? <LinkEllipse /> : null}
            
          </LinkEllipseTextContainer>
          <LinkEllipseTextContainer {...props} href="/About">
            
            <LinkText>About</LinkText>
            {isActive && props.href && props.href.toLowerCase() == "shop" ? <LinkEllipse /> : null}
            
          </LinkEllipseTextContainer>
          <LinkEllipseTextContainer {...props} href="/Contact-us">
            
            <LinkText>Contact</LinkText>
            {isActive && props.href && props.href.toLowerCase() == "shop" ? <LinkEllipse /> : null}
            
          </LinkEllipseTextContainer> */}
        
        <StyledLink {...props} href="/">Home</StyledLink>
        <StyledLink {...props} href="/shop">Shop</StyledLink>
        <StyledLink href="/about">About</StyledLink>
        <StyledLink href="/contact-us">Contact</StyledLink>
        <StyledLink href="/shop">Collections</StyledLink>
        
      </HeaderShop>

      <HeaderCart>
        <StyledLink href="/login">
          <BiUserPlus style={{ color: "#00BFA5", fontSize: "25px", cursor: "pointer" }} />
        </StyledLink>
        <StyledLink href="/search">
          <BiSearch style={{ color: "#00BFA5", fontSize: "25px", cursor: "pointer" }} />
        </StyledLink>
        <StyledLink href="/wish-list">
          <BiHeart style={{ color: "#00BFA5", fontSize: "25px",cursor: "pointer" }} />
        </StyledLink>
        <StyledLink href="/shop-cart">
          <BiCart style={{ color: "#00BFA5", fontSize: "25px", cursor: "pointer" }} />
        </StyledLink>
      </HeaderCart>
    </StyledHeader>
  );
};

export default AppHeader;
