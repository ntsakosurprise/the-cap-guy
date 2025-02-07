import styled from "kotii-styled";
import React from "react";
import CapGuyLogo from "../assets/img/the-cap-guy-logo-alt.svg"
import { Link } from "wouter";


const ShopHero = styled("div")({
  width: "100%",
  height: "auto",
  backgroundColor:"#FF0066",
  display: "flex",
  flexDirection: "row",
  marginTop: "30px"
});

const ShopHeroApparel = styled("div")({
    width: "40%",
    paddingLeft: "3%",
    height: "100%",
    backgroundColor: "wheat",
    minHeight: "60vh",
    paddingTop: "20vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
})

const ShopHeroUser = styled("div")({
    width: "50%",
   paddingTop:"15vh"
})

const StyledButton = styled("button")({
    border: "none",
    width: "150px",
    backgroundColor: "inherit",
    cursor: "pointer",
    position: "relative",
  });
  
  const ButtonFrontCard = styled("small")({
    backgroundColor: "#00BFA5",
    width: "100%",
    height: "50px",
    display: "flex",
    position: "relative",
    zIndex: 5,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bolder",
    lineHeight: "3px",
  });
  const ButtonBackCard = styled("small")({
    backgroundColor: "#F7C02B",
    width: "100%",
    height: "50px",
    display: "flex",
    position: "absolute",
  });


  const CompanyInfo = styled("div")({
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    
  //  paddingTop:"15vh"
  })
  
  const StyledLink = styled(Link)({
    display: "flex",
    flexDirection: "row",
    color: "green",
    fontSize: "20px"
  });
  

const Company = () => {
  return (
    <ShopHero>
     
     
     
     <ShopHeroUser>
        <img src={CapGuyLogo} style={{
            width: "70%",
            margin: "0 auto",
            display: "block",
            borderTop: "50px solid transparent",
            borderRight: "100px solid #f2f3f4",
            borderBottom: "50px solid transparent"
  }} />
     </ShopHeroUser>
     <ShopHeroApparel>
        
     <CompanyInfo>
        <StyledLink href="/shop">Shop</StyledLink>
        <StyledLink href="/about">About</StyledLink>
        <StyledLink href="/contact">Contact</StyledLink>
        <StyledLink href="/contact">Collections</StyledLink>
    </CompanyInfo>
    <CompanyInfo>
        
        <StyledLink href="/shop">Facebook</StyledLink>
        <StyledLink href="/about">Twitter</StyledLink>
        <StyledLink href="/contact">Instagram</StyledLink>
        <StyledLink href="/contact">Whatsapp</StyledLink>
        
        
        
    </CompanyInfo>
     </ShopHeroApparel>
    </ShopHero>
  );
};

export default Company;
