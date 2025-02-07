import styled from "kotii-styled";
const MainWrapper = styled("div")({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginTop: "35px",
    justifyContent: "space-between",
    position: "relative",
    backgroundColor: "#f2f3f4",
    flexWrap: "wrap",
  
    // @media only screen and (max-width: 450px)": {
    //   flexDirection: "column",
    // },
  });

  const Main = (props)=>{

    return (
        <MainWrapper>
          {props.children}
        </MainWrapper>
    )
  }

  export default Main