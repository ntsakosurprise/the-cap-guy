import { Head } from "kotii-scripts";
import React,{useState} from "react";
import Main from "../../shared/main.jsx";
import styled from "kotii-styled";
import { Link } from "wouter";
import { BiSearch } from "react-icons/bi/index.js";
import { BiX } from "react-icons/bi/index.js";
import productsList from "./products.json"
import colors from "./colors.json"
import collections from "./collections.json"
import brands from "./brands.json"
import sizes from "./sizes.json"
import appFilters from "./active-filters.json"
import {images} from "Assets"

import { BiCart, BiSolidHeart, BiHeart,BiCheck } from "react-icons/bi/index.js";

import { useParams,useSearch } from "wouter";



const Products = styled("div")(() => {
  return {
   
  display: "flex",
  flex: 1,
  flexDirection: "column",
  backgroundColor: "#FF0066",
  flexWrap: "wrap",
  width: "100%",
  paddingBottom: "100px",
  height: "100vh",
  paddingTop: "35px",
  gap: "20px"
   
  
  
  };
});

const ProductInfo = styled("div")(() => {
  return {
   
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: "60px",
    width: "100%"
  };
});


const ProductDetail = styled("div")(() => {
  return {
   
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    flex: 1,
    gap: "60px",
    paddingLeft: "5%",
    color: 'white',
    alignItems: "start"
  };
});

const ProductName = styled("p")(() => {
  return {
   
    display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexWrap: "wrap",
  fontSize: "40px"
  };
});

const ProductStockCount = styled("p")(() => {
  return {
   
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center"
    
  };
});

const ProductImage = styled("img")(() => {
  return {
   
    display: "flex",
    width: "80%"

    
  };
});

const ProductImageContainer = styled("p")(() => {
  return {
   
    display: "flex",
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center"


    
  };
});


const ProductTitle = styled("p")((props)=>{

  return {
    fontSize: "15px",
  fontWeight: "lighter",
  alignSelf: "center",
  color: "white",
  width: "100%",
  textAlign: "center",
  marginBottom: "50px"

}

  
})

const ProductFilters = styled("div")((props)=>{

  return {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "start",
  flexWrap: "wrap",
  gap: 50

}

  
})


const SizeFilter = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "start",
  paddingLeft: "2%",
  gap: 20,
})
const SizeFilterTitle = styled("p")({
  fontSize: 14,
  fontWeight: "bold"
})
const SizeFilterSwatches = styled("p")({
  fontSize: 14,
  fontWeight: "bold",
  display: "flex", 
  flexDirection: "row", 
  flexWrap:"wrap",
  gap: "10px" 
})

const SizeFilterSwatch = styled("p")((props)=>{

  return {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "10px",
    justifyContent: "center",
    alignContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    cursor: "pointer",
    border: "solid 2px aliceblue",
    position: "relative"
  
}

  
})



const ColorFilter = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "start",
  paddingLeft: "2%",
  gap: 20,
})
const ColorFilterTitle = styled("p")({
  fontSize: 14,
  fontWeight: "bold"
})
const ColorFilterSwatches = styled("p")({
  fontSize: 14,
  fontWeight: "bold",
  display: "flex", 
  flexDirection: "row", 
  gap: "10px" 
})

const ColorFilterSwatch = styled("p")((props)=>{

  return {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "10px",
  justifyContent: "center",
  alignContent: "center",
  justifyContent: "center",
  width: 16,
  height: 16,
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: props.color.color || "red",
}

  
})


const getSizeFilter = ()=>{
  return (
    <SizeFilter>
        <SizeFilterTitle>Pick Size</SizeFilterTitle>
        <SizeFilterSwatches>

        {sizes.map((size,i)=>{
            return (
              <SizeFilterSwatch>

                {size.size.toLowerCase() === "m"
                ? <BiCheck  style={{
                  position: "absolute",
                  top: "-5px",
                  left: "50%",
                  color: "green",
                  fontWeight: "bolder",
                  fontSize: "18px"
                   }}/>
                :null
                }
                
                {size.size.toUpperCase()
              } 
              </SizeFilterSwatch>
            )
        })}
        
        </SizeFilterSwatches>
        </SizeFilter>
  )
}

const getColorFilter = ()=>{

  return(
    <ColorFilter>
        <ColorFilterTitle>Pick Color</ColorFilterTitle>
        <ColorFilterSwatches>

        {colors.map((color,i)=>{
            return (
              <ColorFilterSwatch color={color}>
                {i === 0 
                ? <BiCheck style={{color: color.shouldShowContrast ? color.contrast : ""}} />
                : null
              } 
              </ColorFilterSwatch>
            )
        })}
        
        </ColorFilterSwatches>
    </ColorFilter>
  )
}



const ProductPriceWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "20px",
  width: "100%",
  justifyContent: "space-around"
})

const ProductPriceInfo = styled("div")({
  fontSize: "18px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "start",
  gap: "20px",
  flex: 1,
  paddingLeft:"5%"
})

const ProductPrice = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "20px",
  fontSize: "40px",
  flex: 1,
  color:"white"

})

const ProductPurchase = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "20px",
  flex: 1,
  paddingLeft: "10%"
})


const BuyProduct = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "start",
  gap: "20px"
})

const ProductsCount = styled("div")({

  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px"
})


const AddRemoveButton = styled("button")({

  gap: "10px",
  border: "solid 1px rgb(242, 245, 245)",
  width: "20px",
  justifyContent: "center",
  fontSize: "15px",
  color: "white",
  fontWeight: "lighter",
  height: "20px",
  borderRadius: "20%",
  cursor: "pointer",
  position: "relative",
  alignSelf: "center",
  display: "flex",
  backgroundColor: "transparent",
  alignItems: "center"
  


});

const Count = styled("input")({


  width: "20px",
  backgroundColor: "transparent",
  fontSize: "15px",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  border: "none",
  cursor: "pointer",
  position: "relative",
  display: "flex",
  color: "white",
  fontWeight: "bolder"
  


});



const ProductView = () => {

  const params = useParams();
  const searchString = useSearch();
  const [products,setProducts] = useState(productsList)
  const singleProduct = products[4]

  
   
  return (
    
     
      
      <Products>

        <ProductTitle>
          Product Detail
        </ProductTitle>
        <ProductInfo>
          <ProductDetail>
            <ProductName>
              {singleProduct.name}
            </ProductName>
            <ProductStockCount>
               <small style={
                 { fontSize: "18px", fontWeight: "bold" }
                 
               }>
                 {singleProduct.count}

               </small>
               <small style={
                 { fontSize: "25px" }
               }>
                 Available
               </small>
            </ProductStockCount>
          </ProductDetail>
          <ProductImageContainer>
           <ProductImage src={images[singleProduct.image]} />
          </ProductImageContainer>
          
          <ProductFilters>
              {getSizeFilter()}
              {getColorFilter()}
          </ProductFilters>
        </ProductInfo>

        <ProductPriceWrapper>
          <ProductPriceInfo>
            <small style={
              { fontSize: "15px", fontWeight: "lighter", color: '#e9dcdc' }
            }>
              We accept full returns on our products, our return
              period is 14 days.
            </small>
          </ProductPriceInfo>
          <ProductPrice>
            R {singleProduct.price}
          </ProductPrice>
          <ProductPurchase>
            <ProductsCount>
                
                <AddRemoveButton>
                    -
                </AddRemoveButton>
                <Count placeholder="1" />
                <AddRemoveButton>
                    +
                </AddRemoveButton>

            </ProductsCount>
            <BuyProduct>
             <button style={{
               border: "none",
               backgroundColor: "white",
               padding: "5px",
               borderRadius: "8px",
               cursor: "pointer"
             }}>
               Buy now
             </button>
            </BuyProduct>
          </ProductPurchase>
        </ProductPriceWrapper>

      </Products>
        

  );
};

export default ProductView;
