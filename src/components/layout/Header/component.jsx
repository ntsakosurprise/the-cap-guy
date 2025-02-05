import styled from "kotii-styled";
import React from "react";
import { TfiGithub } from "react-icons/tfi/index.js";

import { BiCart } from "react-icons/bi/index.js";
import { BiUserPlus } from "react-icons/bi/index.js";
import { BiSearch } from "react-icons/bi/index.js";
import { BiHeart } from "react-icons/bi/index.js";
import { Link } from "wouter";
import { Brand } from "../shared/index.jsx";

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
});

const AppHeader = () => {
  return (
    <StyledHeader>
      <Brand />
      <HeaderShop>
        {/* <Link href="https://github.com/ntsakosurprise/kotii" target={"_blank"}>
          <TfiGithub style={{ color: "#00BFA5", fontSize: "25px" }} />
        </Link> */}
        <StyledLink href="/">Hoe</StyledLink>
        <StyledLink href="/shop">Shop</StyledLink>
        <StyledLink href="/about">About</StyledLink>
        <StyledLink href="/contact">Contact</StyledLink>
        
      </HeaderShop>

      <HeaderCart>
        <StyledLink href="/account">
          <BiUserPlus style={{ color: "#00BFA5", fontSize: "25px" }} />
        </StyledLink>
        <StyledLink href="/search">
          <BiSearch style={{ color: "#00BFA5", fontSize: "25px" }} />
        </StyledLink>
        <StyledLink href="/wish-list">
          <BiHeart style={{ color: "#00BFA5", fontSize: "25px" }} />
        </StyledLink>
        <StyledLink href="/shop-cart">
          <BiCart style={{ color: "#00BFA5", fontSize: "25px" }} />
        </StyledLink>
      </HeaderCart>
    </StyledHeader>
  );
};

export default AppHeader;
