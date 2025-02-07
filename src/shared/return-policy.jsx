import styled from "kotii-styled";
import React from "react";
import { images } from "Assets";

const ShopHero = styled("div")({
  width: "100%",
  height: "auto",
  paddingTop: "10vh",
  display: "flex",
  flexDirection: "column"
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

  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "start",
  paddingTop: "15vh",
  alignContent: "center",
  justifyContent: "center"
})

const StyledButton = styled("button")({
    border: "none",
    width: "250px",
    backgroundColor: "inherit",
    cursor: "pointer",
    position: "relative",
    alignSelf:"center",
    marginTop: "80px",
    marginBottom: "50px",
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
    fontSize: "20px"
  });
  const ButtonBackCard = styled("small")({
    backgroundColor: "#F7C02B",
    width: "100%",
    height: "50px",
    display: "flex",
    position: "absolute",
  });



const CollectionItem = styled(("div"))({

  height: "100px",
  alignItems: "center",
  justifyContent: "center",
  width: "30%",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  border: "solid 1px white",
  backgroundColor: "transparent"
})




const CollectionPrice = styled(("section"))({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around"
})





const ReturnPolicy = () => {

  return (
    <ShopHero>
     <ShopHeroUser>
      <CollectionItem>

            <CollectionPrice>
              14 Days return policy
            </CollectionPrice>
         
      </CollectionItem>
      <CollectionItem>

            <CollectionPrice>
              Free Shipping on local orders
            </CollectionPrice>
         
      </CollectionItem>

      <CollectionItem>

            <CollectionPrice>
              Door-To-Door Deliveries
            </CollectionPrice>
         
      </CollectionItem>
      
     </ShopHeroUser>

    </ShopHero>
  );
};

export default ReturnPolicy;
