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



const ShopHeroUser = styled("div")({

  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "start",
  paddingTop: "5vh",
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

  height: "150px",
  alignItems: "center",
  justifyContent: "center",
  width: "30%",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  backgroundColor: "transparent"
})




const CollectionPrice = styled(("p"))({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  fontSize: "20px",
  fontWeight: "lighter"
})

const CollectionColor = styled(("p"))((props)=>{
  
  return {
   fontSize: "50px",
   backgroundColor: "transparent",
   
  }
})





const Statement = () => {

  return (
    <ShopHero>
     <ShopHeroUser>
      <CollectionItem>

            <CollectionPrice>
              sense of
            </CollectionPrice>
            <CollectionColor>
              Fashion
            </CollectionColor>
         
      </CollectionItem>
      <CollectionItem>

      <CollectionPrice>
              affirm your
            </CollectionPrice>
            <CollectionColor>
              Identity
            </CollectionColor>
         
      </CollectionItem>

      <CollectionItem>

           <CollectionPrice>
              balance your
            </CollectionPrice>
            <CollectionColor>
              Outfits
            </CollectionColor>
    
         
      </CollectionItem>
      
     </ShopHeroUser>

    </ShopHero>
  );
};

export default Statement;
