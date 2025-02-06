import styled from "kotii-styled";
import React from "react";

const ShopHero = styled("div")({
  width: "100%",
  height: "90vh",
  backgroundColor:"#FF0066",
  display: "flex",
  flexDirection: "row"
});

const ShopHeroApparel = styled("div")({
    width: "40%",
})

const ShopHeroUser = styled("div")({
   
})

const ShopH = () => {
  return (
    <ShopHero>
     
     
     <ShopHeroApparel>

     </ShopHeroApparel>
     <ShopHeroUser>
         
     </ShopHeroUser>
    </ShopHero>
  );
};

export default ShopH;
