import styled from "kotii-styled";
import React from "react";
import { images } from "Assets";

const ShopHero = styled("div")({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  backgroundImage: `url(${images.StackedImage})`,
  minHeight: "70vh",
  backgroundSize: "contain",
  backgroundColor: "rgb(0,0,0,.5)",
  position: "relative",
 
});

const ShopHeroContainer = styled("div")({
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: "rgb(0,0,0,.3)"
});

const ShopHeroUser = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%", 
  alignItems: "start",
  justifyContent: "space-around",
   paddingTop:"15vh",
   zIndex: 5
})



const StyledButton = styled("button")({
    border: "none",
    width: "250px",
    backgroundColor: "inherit",
    cursor: "pointer",
    position: "relative",
    alignSelf:"center",
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
  margin: "0 auto",
  marginTop: "15vh",
  alignSelf: "center",
  fontWeight: "lighter",
  color: "#5b5353",
  backgroundColor: "#f2f3f4",
  width: 300,
  textAlign: "center",
  padding: 8
})



const ContactForm = styled(("form"))({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "100%"
})

const FormInput = styled(("input"))({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "50px",
  border: "none",
  width: "50%",
  borderRadius: "8px",
  backgroundColor: "wheat",
  paddingLeft: "2%"
})




const Contact = () => {

  return (
    <ShopHero>
    <ShopHeroContainer />
     
     
    <CollectionTitle>NEWSLETTER</CollectionTitle>
    <p style={{
      color: "#1c1e1c",
      fontWeight: "lighter",
      display: "flex",
      alignSelf: "center",
      marginTop: "30px",
      backgroundColor: "#f2f3f4",
      padding: "2px"
    }} >Sign up to receive early updates on new collections and access to exclusive benefits.</p>
        

     
     <ShopHeroUser>
     <ContactForm>
       <FormInput placeholder={"youremail@mail.com"}>
       </FormInput>

       <StyledButton>
                <ButtonBackCard />
                <ButtonFrontCard>Sign Up</ButtonFrontCard>
      </StyledButton>
     </ContactForm>
     </ShopHeroUser>

     
    </ShopHero>
  );
};

export default Contact;
