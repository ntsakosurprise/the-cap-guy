import { Head } from "kotii-scripts";
import React,{useState} from "react";
import Main from "../../shared/main.jsx";
import styled from "kotii-styled";
import { Link } from "wouter";
import { BiSearch } from "react-icons/bi/index.js";
import { BiX } from "react-icons/bi/index.js";
import productsList from "./products.json"
import {images} from "Assets"


const Search = styled("div")(() => {
  return {
   
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    backgroundColor: "#e8ebee",
    flexWrap: "wrap",
    width: "100%",
    height: "100vh",
    top: "0",
    zIndex: 1000
  
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
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  alignItems:"center",
  marginTop: "20px",
  gap: 10,
  flexWrap:"wrap"
})

const FormInput = styled(("input"))({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "50px",
  border: "none",
  width: "80%",
  borderRadius: "8px",
  backgroundColor: "#f2f3f4",
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
  gap: 15,
  
});

const SearchResults = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 15,
  top: "20vh",
  position: "absolute",
  height: "100vh",
  width: "100%",
  
});


const Results = styled("div")({
  display: "flex",
  flexDirection: "column",
 
  gap: 15,
  top: "20vh",
  position: "absolute",
  height: "100vh",
  width: "100%",
  
});


const SearchResultsTitle = styled("div")({
  display: "flex",
  flexDirection: "row",
  marginTop: 50,
  gap: 15,
  alignSelf: "center",
  fontSize: "30px"
});

const List = styled("ul")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center"
})

const ListItem = styled("li")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center"
})

const ListLink = styled(Link)({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center"
})

const ListImage = styled("img")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center"
})


const ListText = styled("p")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center"
})

const renderProducts = (productItems)=>{

   return productItems.map((product)=>{
      return <ListItem>
         <ListLink href={`/product?id=${product.id}`}>
           <ListImage src={images[product.image]} />
           <ListText>{product.name}</ListText>
           <ListText>{product.price}</ListText>
         </ListLink>
      </ListItem>
   })

}

const RenderProducts = (props)=>{

  return (
      <List>
        {renderProducts(props.products)}
      </List>
  )
}

const NotFound = ()=>{

  return (
      <p>
        No match was found for the product you are looking for
      </p>
  )
}

const OutOfStock = ()=>{

  return (
      <p>
        The product is out of stock
      </p>
  )
}
const ProductSearch = () => {

  const [products,setProducts] = useState(productsList)
   
  return (
    
      // <Head title={"Search | TheCapGuy"} />
      
      <Search>


        <Form>
          <BiSearch style={{ color: "#00BFA5", fontSize: "25px", cursor: "pointer" }} />
          <FormInput placeholder="Search for any cap you wish to purchase" />
          <BiX style={{ color: "#00BFA5", fontSize: "25px", cursor: "pointer" }} />
        
          {/* <SignUpLoginContainer>
            <StyledButton>
                  <ButtonBackCard />
                  <ButtonFrontCard>Create</ButtonFrontCard>
            </StyledButton>
            

          </SignUpLoginContainer> */}

          </Form>

          <SearchResults >
            <SearchResultsTitle>
              Search results for
            </SearchResultsTitle>
          </SearchResults>
          <Results>
            {products ? <RenderProducts products={products} /> : <NotFound />}
          </Results>
         

        </Search>
        
      
      
    
  );
};

export default ProductSearch;
