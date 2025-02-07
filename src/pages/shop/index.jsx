import { Head } from "kotii-scripts";
import React,{useState} from "react";
import Main from "../../shared/main.jsx";
import styled from "kotii-styled";
import { Link } from "wouter";
import { BiSearch } from "react-icons/bi/index.js";
import { BiX } from "react-icons/bi/index.js";
import productsList from "./products.json"
import {images} from "Assets"
import { BiSolidStar } from "react-icons/bi/index.js";

const Products = styled("div")(() => {
  return {
   
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  
    backgroundColor: "#e8ebee",
    flexWrap: "wrap",
    width: "100%",

   
  
  
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
  width: "350px",
  backgroundColor: "inherit",
  cursor: "pointer",
  position: "relative",
  alignSelf:"center",
  marginBottom: "10px",
  marginTop: "15px"


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


const ProductsTitle = styled("div")({
  display: "flex",
  flexDirection: "row",
  marginTop: "50px",
  gap: "15px",
  alignSelf: "center",
  fontSize: "30px",
  fontWeight: "bolder"
});

const List = styled("ul")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  marginTop: 30,
  gap: 15,
  justifyContent: "center"
})

const ListItem = styled("li")({
  margin: "0",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  width: "300px",
  height: "auto",
  gap: "30px",
  marginBottom: "50px",
  backgroundColor: "#f9f4f4",
  paddingTop: "15px",
  paddingBottom: "25px",

  
  
  
})

const ListLink = styled(Link)({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 20,
  textDecoration: "none",
  color: "black"
})

const ListImage = styled("img")({

  display: "flex",
  width: 80
})

const ListImageContainer = styled("p")({

  display: "flex",
  backgroundColor: 'wheat',
  height: 150,
  width: 150,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%"



})




const ListText = styled("p")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  fontSize: "18px"
})

const ProductRating = styled("p")({
 
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 20,
  justifyContent: "center"

  
})

const renderProducts = (productItems)=>{

   return productItems.map((product)=>{
      return <ListItem>
         <ListLink href={`/product?id=${product.id}`}>
           <ListImageContainer>
            <ListImage src={images[product.image]} />
           </ListImageContainer>
          <ProductRating>
             <small>
              <BiSolidStar style={{color: "green", fontSize: 17}} />
             </small>
             <small style={{fontSize: 15}}>
               {product.rating}
             </small>
          </ProductRating>
           <ListText>{product.name}</ListText>
           <ListText>{product.currency} {product.price}</ListText>
           <ListText>Available: {product.count}</ListText>
           <ListText>Status: {product.status}</ListText>
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
    <p style={{
      display: "flex",
      alignSelf: "center",
      textAlign: "center",
      marginTop: "30px",
      fontSize: "40px",
      width: "50%"
          }}>
        No match was found for the product you are looking for
      </p>
  )
}

const OutOfStock = ()=>{

  return (
      <p style={{

        display: "flex",
        alignSelf: "center",
        textAlign: "center",
        marginTop: "30px",
        fontSize: "40px",
        width: "50%"
      }}>
        The searched product is out of stock
      </p>
  )
}
const Shop = () => {

  const [products,setProducts] = useState(productsList)
   
  return (
    
      // <Head title={"Products | TheCapGuy"} />
      
      <Products>


          
            <ProductsTitle>
              Products
            </ProductsTitle>
            
            {products ? <RenderProducts products={products} /> : <ProductListingError />}
  
          
          
         

        </Products>
        
      
      
    
  );
};

export default Shop;
