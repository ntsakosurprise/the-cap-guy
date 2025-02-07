import styled from "kotii-styled";
import React from "react";
import { images } from "Assets";

const ShopHero = styled("div")({
  width: "100%",
  height: "auto",
  paddingTop: "15vh",
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
  justifyContent: "space-around",
   paddingTop:"15vh"
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

const CollectionTitle = styled(("h1"))({
  fontSize: "30px",
  marginTop: "20px",
  alignSelf: "center",
  fontWeight: "lighter",
  color: "#5b5353"
})

const CollectionItem = styled(("div"))({
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  gap: 30
})

const CollectionPair = styled(("p"))({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  "&:hover button":{
    display: "block"
  }
})


const CollectionPairAdd = styled(("button"))({
  display: "none",
  flexDirection: "row",
  justifyContent: "space-around",
  backgroundColor: "#00BFA5",
  alignItems: "center",
  cursor: "pointer",
  width: "30px",
  height: "30px",
  fontWeight: "bolder",
  color: "white",
  fontSize: "15px",
  borderRadius: "8px"
})


const CollectionTraits = styled(("section"))({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "10px"
})

const CollectionPrice = styled(("section"))({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around"
})


const CollectionColor = styled(("p"))((props)=>{
  
  return { width: "20px",
   height: "20px",
   borderRadius: "50%",
   backgroundColor: props.color || "black"
  }
})

const CollectionItemImage = (props)=>{
  
  return(
    <img src={props.image} style={{
      width: 70
    }} />
  )
}

const NewCollection = () => {

  return (
    <ShopHero>
     
     
    <CollectionTitle>New Collection</CollectionTitle>
        

     
     <ShopHeroUser>
      <CollectionItem>
         <CollectionPair>
          <CollectionItemImage image={images.CollectionOne} />
          <CollectionPairAdd>
            +
          </CollectionPairAdd>
         </CollectionPair>
              
         <CollectionTraits>
            <CollectionPrice>
              R 250.00
            </CollectionPrice>
            <CollectionColor />
            
            
         </CollectionTraits>
      </CollectionItem>
      <CollectionItem>
      <CollectionPair>
          <CollectionItemImage image={images.CollectionTwo} />
         </CollectionPair>
        
         <CollectionTraits>
            <CollectionPrice>
              R 285.00
            </CollectionPrice>
            <CollectionColor color="#FFBF00" />
         </CollectionTraits>
      </CollectionItem>
      <CollectionItem>
      <CollectionPair>
          <CollectionItemImage image={images.CollectionThree} />
         </CollectionPair>
         <CollectionTraits>
            <CollectionPrice>
              R 350.00
            </CollectionPrice>
            <CollectionColor color="black" />
         </CollectionTraits>
      </CollectionItem>
      <CollectionItem>
      <CollectionPair>
          <CollectionItemImage image={images.CollectionFour} />
         </CollectionPair>
         <CollectionTraits>
            <CollectionPrice>
              R 175.50
            </CollectionPrice>
            <CollectionColor color="red"/>
         </CollectionTraits>
      </CollectionItem>
     </ShopHeroUser>

     <StyledButton>
                <ButtonBackCard />
                <ButtonFrontCard>Shop Collection</ButtonFrontCard>
      </StyledButton>
    </ShopHero>
  );
};

export default NewCollection;
