import { Head } from "kotii-scripts";
import React from "react";
import "../../styles/color.styl";
import "../../styles/color.global.scss";
import styles from "./todo.module.less"
import Main from "../../shared/main.jsx";
import styled from "kotii-styled";
import { Link } from "wouter";

const PageTitle = styled("h1")(() => {
  return {
   
  fontSize: "40px",
  position: "relative",
  color: "#4f4141",
  display: "flex",
  alignSelf: "center"
  };
});

const AskLine = styled("div")(() => {
  return {

  position: "relative",
  color: "#4f4141",
  display: "flex",
  alignSelf: "center",
  flexDirection: "row",
  gap: 5,
  marginTop: 15

  };
});


const StyledLink = styled(Link)({
  display: "flex",
  flexDirection: "row",
  color: "green",
  cursor: "pointer",
  position: "relative"
});


const Form = styled(("form"))({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "100%",
  alignItems:"center",
  marginTop: "20px",
  gap: 10
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

const ForgotPasword = styled((Link))({
  display: "flex",
  backgroundColor: "transparent",
  flexDirection: "column",
  border: "none",
  paddingLeft: "2%",
  fontSize: "15px",
  cursor: "pointer",
  borderBottom: "solid 2px red",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  height: 40,
  marginLeft: "35%",
  textDecoration: "none",
  color: "black"
  
})

const StyledButton = styled("button")({
  border: "none",
  width: "150px",
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
  fontSize: "15px"
});
const ButtonBackCard = styled("small")({
  backgroundColor: "#F7C02B",
  width: "100%",
  height: "50px",
  display: "flex",
  position: "absolute",
});

const StoreReturn = styled(("button"))({
  display: "flex",
  backgroundColor: "transparent",
  flexDirection: "column",
  border: "none",
  paddingLeft: "2%",
  fontSize: "15px",
  cursor: "pointer",
  borderBottom: "solid 2px red",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  height: 40,
 
  
})

const SignUpLoginContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  marginTop: 50,
  gap: 15
});


const Register = () => {
   
  return (
    <div>
      <Head title={"Register | TheCapGuy"} />
      
      <Main>
        <PageTitle>
          Register
        </PageTitle>
        <AskLine>
          <small>Already have an account?</small>
          <StyledLink href="/login">Sign in here</StyledLink>
          
        </AskLine>

        <Form>

          <FormInput placeholder="First name" />
          <FormInput placeholder="Last name" />
          <FormInput placeholder="email" />
          <FormInput placeholder="password" />
          
          <SignUpLoginContainer>
            <StyledButton>
                  <ButtonBackCard />
                  <ButtonFrontCard>Create</ButtonFrontCard>
            </StyledButton>
            

          </SignUpLoginContainer>
         

        </Form>
        
      </Main>
      
    </div>
  );
};

export default Register;
