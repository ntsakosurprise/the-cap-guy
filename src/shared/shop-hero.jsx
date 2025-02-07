import styled from "kotii-styled";
import React from "react";
import { images } from "Assets";

const ShopHero = styled("div")({
  width: "100%",
  height: "auto",
  backgroundColor:"#FF0066",
  display: "flex",
  flexDirection: "row"
});

const ShopHeroApparel = styled("div")({
    width: "40%",
    paddingLeft: "3%",
    height: "100%",
    backgroundColor: "wheat",
    minHeight: "60vh",
    paddingTop: "20vh"
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

const ShopH = () => {
  return (
    <ShopHero>
     
     
     <ShopHeroApparel>

         <div style={{
             minHeight: "150px",
             borderBottom: "solid 1px red",
             width: "90%",
             margin: "0 auto"
             
         }} >
            <p style={{ marginBottom: "35px", fontWeight: "lighter" }}>Apparel</p>
            <p>
            <small style={{
             display: "block",
             fontSize: "25px",
             fontWeight: "bold",
             marginTop: "15px",
             marginBottom: "20px"
            }}>
            The Hexagon Light Cap
            </small>
            </p>
            

            <p>
            <small style={{
                display: "inline-block",
                marginRight: "8px",
                fontSize: "15px",
                fontWeight: "lighter",
                fontStyle: "oblique"
            }}>
                By
            </small>
            <small style={{
                display: "inline-block",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#5b5b2e"
            }}>
                The Cap Guy(R)
            </small>
            </p>

         </div>
         <div style={{
            margin: "30px auto 0px",
            minHeight: "100px",
            borderBottom: "1px solid red",
            width: "90%",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            gap: 10
             
          
             }}>
            <p>
            <small style={{
                display: "block",
                fontSize: "20px",
                fontWeight: "bolder",
                color: "#9db915",
                marginRight: "2px",
                marginBottom: "5px"
            }}>From</small>
            <small style={{
                display: "block",
                fontSize: "25px"
            }}>185 R</small>
            </p>
            <p>
            <StyledButton>
                <ButtonBackCard />
                <ButtonFrontCard>Go To Product </ButtonFrontCard>
            </StyledButton>
            </p>
         </div>
        

     </ShopHeroApparel>
     <ShopHeroUser>
        <img src={images.HeroSectionImage} style={{
            width: "70%",
            margin: "0 auto",
            display: "block"
  }} />
     </ShopHeroUser>
    </ShopHero>
  );
};

export default ShopH;
