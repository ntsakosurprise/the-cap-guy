import styled from "kotii-styled";
import React from "react";
import { images } from "Assets";

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

const Refferal = () => {
  return (
    <ShopHero>
     
     
     
     <ShopHeroUser>
        <img src={images.ReferImage} style={{
            width: "70%",
            margin: "0 auto",
            display: "block",
            borderTop: "50px solid transparent",
            borderRight: "100px solid #f2f3f4",
            borderBottom: "50px solid transparent"
  }} />
     </ShopHeroUser>
     <ShopHeroApparel>

         <div style={{
             minHeight: "150px",
             width: "90%",
             margin: "0 auto"
             
         }} >
            <p style={{ marginBottom: "35px", fontWeight: "lighter" }}>Apparel</p>
            <p>
            <small style={{
             display: "block",
             fontSize: "50px",
             fontWeight: "bold",
             marginTop: "15px",
             marginBottom: "20px",
             color: "#5b5b2e"
            }}>
            Refer & Earn
            </small>
            </p>
            

            <p>
            
            <small style={{
                display: "inline-block",
                fontSize: "25px",
                fontWeight: "lighter",
                
            }}>
                Refer a friend using your referral link and
                you'll both get a discount on your next TheCapGuy order.
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
            <StyledButton>
                <ButtonBackCard />
                <ButtonFrontCard>Get Started </ButtonFrontCard>
            </StyledButton>
            </p>
         </div>
        

     </ShopHeroApparel>
    </ShopHero>
  );
};

export default Refferal;
