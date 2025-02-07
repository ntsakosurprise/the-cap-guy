/* eslint-disable react/prop-types */
import { images } from "Assets";
import { CONFIG } from "Config";

// import SearchImage from "../assets/docs_search.png";
// import StonesJPG from "../assets/stones.jpg";
import { loggas } from "kotii-logger";
import { Head, useUniversalEffect } from "kotii-scripts";
import SHopH from "../shared/shop-hero.jsx"
import NewCollection from "../shared/new-collection.jsx";
import NewsLetter from "../shared/news-letter.jsx";
import Refferal from "../shared/refferal.jsx";
import Company from "../shared/capguy.jsx";
import ReturnPolicy from "../shared/return-policy.jsx";
import Statement from "../shared/statement.jsx";
import styled from "kotii-styled";
import React from "react";
import { AiFillFile, AiFillFolder } from "react-icons/ai/index.js";
import { FaLongArrowAltRight } from "react-icons/fa/index.js";
import { PiBaseballCapFill } from "react-icons/pi/index.js";
import { useDispatch, useSelector } from "react-redux";
import SVGConnections from "../shared/test.jsx";
import BlobSvg from "../assets/svgs/blob.svg"
import CornerBlobSvg from "../assets/svgs/blob_2.svg"
import names from "../state/places.json";
import Reminder from "../state/reminder.csv";
import User from "../state/user.xml";
import * as actions from "../store/home/actions.js";
import "../styles/index.css";
import "../styles/color.global.scss"

import { BiCart, BiSolidHeart, BiHeart } from "react-icons/bi/index.js";


const Main = styled("div")({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  marginTop: "35px",
  justifyContent: "space-between",
  position: "relative",
  backgroundColor: "#f2f3f4",
  flexWrap: "wrap"

  // @media only screen and (max-width: 450px)": {
  //   flexDirection: "column",
  // },
});
const Hero = styled("div")(() => {
  return {
    // marginLeft: "10px",
    width: "100%",
    minHeight: "80vh",
    backgroundImage: `url(${images.HeroImage})`,
    backgroundSize: "contain",
    paddingLeft: "3%",
    paddingTop: "10vh",
    position: "relative"
  };
});

const HeroText = styled("p")(() => {
  return {
    marginLeft: "0",
    fontSize: "40px",
    position: "relative",
    color: "white"
  };
});

const HeroPath = styled("p")(() => {
  return {
    marginLeft: "10px",
    fontSize: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    marginTop: "25px",
  };
});

const PathIcon = styled("small")(() => {
  return {
    marginLeft: "0px",
    fontSize: "20px",
    // width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };
});

const PathText = styled("small")(() => {
  return {
    marginLeft: "2px",
    fontSize: "20px",
    // width: "90%",
    color: "#D680FF",
    fontWeight: "bolder",
  };
});

const PathPointer = styled("small")(() => {
  return {
    marginLeft: "2px",
    fontSize: "20px",
    marginTop: "5px",
    // width: "90%",
  };
});

const Path = () => {
  return (
    <div style={{ minWidth: "100px" }}>
      <HeroPath>
        <PathIcon>
          <AiFillFolder color="#00BFA5" />
          <PathText>kotii-app</PathText>
          <PathPointer>
            <FaLongArrowAltRight />
          </PathPointer>
        </PathIcon>
        <PathIcon>
          <AiFillFolder color="#00BFA5" />
          <PathText>src</PathText>
          <PathPointer>
            <FaLongArrowAltRight />
          </PathPointer>
        </PathIcon>

        <PathIcon>
          <AiFillFolder color="#00BFA5" />
          <PathText>components</PathText>
          <PathPointer>
            <FaLongArrowAltRight />
          </PathPointer>
        </PathIcon>

        <PathIcon>
          <AiFillFolder color="#00BFA5" />
          <PathText>pages</PathText>
          <PathPointer>
            <FaLongArrowAltRight />
          </PathPointer>
        </PathIcon>

        <PathIcon>
          <AiFillFile color="#00BFA5" />
          <PathText>index.jsx</PathText>
        </PathIcon>

        {/* <PathPointer>
          <FaLongArrowAltRight />
        </PathPointer> */}
        {/* <PathIcon>
          <AiFillFile color="#00BFA5" />
          <PathText>index.js</PathText>
        </PathIcon> */}
      </HeroPath>
    </div>
  );
};

const StyledButton = styled("button")({
  border: "none",
  width: "150px",
  backgroundColor: "inherit",
  marginTop: "30px",
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

const SVG = styled("div")({
  display: "flex",
  width: "50%",
  position: "relative",
});

// const PeopleList = (props) => {
//   loggas.app.log("THE PROPS TO PEOPLE COMP", props);
//   if (props.people.length > 0)
//     return (
//       <ul>
//         {props.people.map((person, i) => {
//           return <li key={i}>{person}</li>;
//         })}
//       </ul>
//     );
//   return null;
// };
const UserComp = (props) => {
  loggas.app.log("THE PROPS TO PEOPLE COMP", props);
  if (props?.user)
    return (
      <div>
        name: {props.user.name}
        <br />
        username: {props.user.userName}
        <br />
        born: {props.user.born}
        <br />
        status: {props.user.status}
        <br />
      </div>
    );
  return null;
};

const Index = () => {
  loggas.app.log("THE ENVIRONMENT CONFIG", CONFIG.GITHUB_APP_ID);
  loggas.app.log("OUR NODE ENV", process.env.NODE_ENV);
  loggas.app.log("OUR IMAGES: SEARCH", images.SearchImage);
  loggas.app.log("OUR IMAGES: STONES", images.StonesJPG);
  loggas.app.log("THE CSV", Reminder);
  loggas.app.log("USER XML", User);
  loggas.app.log("NAMES", names);
  // const peopleList = useSelector((state) => {
  //   loggas.app.log("STATE RECEIVED", state);
  //   return state.homeReducer.people;
  // });
  const [data, error] = useUniversalEffect(runAsEffect, []);
  const [dataTwo, errorTwo] = useUniversalEffect(getRandomNum, []);

  const user = useSelector((state) => {
    loggas.app.log("STATE RECEIVED", state);
    return state.homeReducer.user;
  });
  const dispatch = useDispatch();
  // const doList = () => {
  //   if (peopleList.length <= 0) dispatch(actions.showPeopleList());
  //   dispatch(actions.hidePeopleList());
  // };

  const doUser = () => {
    if (!user) dispatch(actions.showUser());
    dispatch(actions.hidePeopleList());
  };
  loggas.app.log("User data from useUniversalEffect", data, error);
  return (
    <Main>
      <Head title={"The-cap-guy home"} />
      
      <Hero>
        <HeroText className="doto-font">
          Ehance your style. 
          
        </HeroText>
        <HeroText className="doto-font">
          Express your personal
          
        </HeroText>

        <HeroText className="doto-font">
        Identify
          <PiBaseballCapFill style={{ 
          color: "red", 
          fontSize: "25px", 
          position: "absolute",
          top: "12px" }}/>
        </HeroText>
        
        {/* <Hero>{names[0]}</Hero> */}
        {/* <Path /> */}
        <StyledButton>
          <ButtonBackCard />
          {/* <ButtonFrontCard onClick={doList}>Learn More </ButtonFrontCard> */}
          <ButtonFrontCard>Shop Deals </ButtonFrontCard>
        </StyledButton>

        <img src={BlobSvg} style={{
          width: "400px",
          position: "absolute",
          display: "block",
          left: "30%",
          top: "10vh",
          color: "white !important",
        }} />

<img src={images.ManStaring} style={{
          width: "250px",
          position: "absolute",
          display: "block",
          left: "35%",
          top: "30vh",
          color: "white !important",
        }} />
        <p style={{
          width: "100px",
          position: "absolute",
          display: "block",
          left: "40%",
          top: "25vh",
          color: "white !important",
        }}>
          We got you.
        </p>

        <div style={{
          width: "300px",
          height: "300px",
         
          position: "absolute",
          display: "block",
          right: 0,
          bottom: "-10vh",
          backgroundColor: "white"
          
        }} >

<img src={images.CapHero} style={{
          width: "250px",
          display: "block",
          margin: "0 auto",
          marginTop:  "5px",
          borderRadius: "8px"
         
          
        }} /> 

        <small style={{
          display: "block",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "15px",
          marginBottom: "20px"
        }}>
          The Hexagon Light Cap
        </small>
        <p style={{textAlign:"center"}}>
          <small style={{
             display: "inline-block",
             fontSize: "30px",
             fontWeight: "bolder",
             color: "#9db915",
             marginRight: "2px"
          }}>R</small>
          <small style={{
            display: "inline-block",
            fontSize: "25px"
          }}>185.00</small>
        </p>

        <p style={{
            marginTop: "20px",
            cursor: "pointer",
            display: "flex",
            alignContent: "center",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap:15
          }}>
          <button style={{
            display: "flex",
            borderTopLeftRadius: "8px",
            padding: "0px",
            cursor: "pointer",
            backgroundColor: "black",
            borderBottomLeftRadius: "8px",
            height: "30px",
            alignContent: "center",
            flexDirection: "row",
            alignItems: "center"
          }}>
            <small style={{
              display: "inline-block",
              backgroundColor: "green",
              width: "40px",
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
              height: "100%"
            }}><BiCart style={{fontSize: "20px", color: "white", marginTop:"4px" }} /></small>
            <small style={{
                fontSize: "15px",
                display: "inline-block",
                marginLeft: "3px",
                marginRight: "5px",
                color: "white",
                textAlign: "center"
            }}>Add to cart</small>
          </button>
          <button style={{backgroundColor: "transparent", cursor:"pointer"}}>
            <BiHeart style={{fontSize: "25px", color: "#00BFA5"}} />
          </button>
        </p>

        </div>

        <div style={{
          width: "300px",
          height: "300px",
          position: "absolute",
          display: "block",
          left: "35%",
          top: "65vh"
  
          
        }}>
          <p  style={{
          fontSize: "50px",
          color: "white"
  
          
        }}>
            Up To 20% OFF
          </p>
          <p style={{fontSize: "12px", color:"white"}}>
            Sunny Day or Rainy Day. We have the best deals that will help you 
            stormy the weather.
          </p>
        </div>
{/* 
<img src={CornerBlobSvg} style={{
          width: "300px",
          position: "absolute",
          display: "block",
          right: "-5%",
          bottom: "-15vh",
          
        }} /> */}



        {/* {peopleList ? <PeopleList people={peopleList} /> : null} */}
        {/* {user ? <UserComp user={user} /> : null}
        <p className="text-color">
          The effect DATA: {data?.actor?.age || "nothing"}
        </p>
        <p className="text-color-yellow">
          The effect DATA: {dataTwo?.actor?.age || "nothing"}
        </p> */}
        {/* <img src={connectionsSvg} width={50} alt="connections svg" /> */}
      </Hero>
      <SHopH />
      <NewCollection />
      <Refferal />
      <Statement />
      <NewsLetter />
      <Company />
      <ReturnPolicy />
      
     
      
      {/* <img src={images.HeroImage} width={500} /> */}
    </Main>
  );
};

// export const getServerState = (store) => {
//   return store.dispatch(actions.showPeopleList());
// };

export const getServerState = (store) => {
  return store.dispatch(actions.showUser());
};
const runAsEffect = () => {
  return new Promise((resolve) => {
    resolve({
      actor: {
        type: "Personal website",
        age: `${Math.floor(Math.random() * 50)} years`,
        owner: "Ntsako Surprise",
        author: "Wix",
        WeeklyViews: 5,
      },
    });
  });


};
const getRandomNum = () => {
  return new Promise((resolve) => {
    resolve({
      actor: {
        type: "Personal website",
        age: `${Math.floor(Math.random() * 50)} years`,
        owner: "Ntsako Surprise",
        author: "Wix",
        WeeklyViews: 5,
      },
    });
  });

  
};

export const universalEffects = [runAsEffect, getRandomNum];

export default Index;
