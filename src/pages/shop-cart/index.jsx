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
import { BiSolidStar } from "react-icons/bi/index.js";
import { BiCart, BiSolidHeart, BiHeart,BiCheck } from "react-icons/bi/index.js";
import navigationItems from "./navigation-items.json"
import recommendedProducts from "./recommended.json"


const Products = styled("div")(() => {
  return {
   
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#e8ebee",
    flexWrap: "wrap",
    width: "100%",
    paddingBottom: 100

   
  
  
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


const ProductsSortLine = styled("div")({
  display: "flex",
  flexDirection: "row",
  marginTop: "20px",
  justifyContent:"space-between",
  alignItems: "center"

});

const ProductsSortContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "15px",
  justifyContent: "end",
  alignContent: "center",
  alignItems: "center",
  paddingRight: "2%",
  flex: 1

});

const ProductsSortTitle = styled("p")({
 
  display: "flex",
  flexDirection: "column",
  gap: 10,
  flexWrap: "wrap",
  paddingLeft: "2%",
  flex: 1
 
});

const ProductsTitle = styled("h2")({
 
  fontSize: "20px",
  fontWeight: "bolder",
 
  
 
});


const ProductsSort = styled("select")({
  backgroundColor: "transparent",
  border: "solid 1px green",
  borderRadius: "8px",
  padding: "4px",
  alignItems: "center",
  display: "flex",
  justifyContent: "center"

});

const ProductsSortText = styled("small")({
  fontSize: "14px",
  fontWeight: "bolder",

});

const ProductsSortOption = styled("option")({
  fontSize: "14px",

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
  justifyContent: "center",
  flex: 3.5
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
  color: "black",
  width: "100%"
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

const ListProductName = styled("p")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  fontSize: "20px",
  fontWeight: "bolder" 
})

const ListProductPrice = styled("p")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  fontSize: "18px",
  color: "#e6910c", fontWeight: "bolder" 
})

const ListProductStatusContainer = styled("p")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
 
  gap: 10
  
})

const ListProductStatus = styled("p")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  borderBottom: "solid 2px #e8dbdb", 
  paddingBottom: "10px",
  
})
const ProductRating = styled("p")({
 
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 20,
  justifyContent: "center"

  
})

const ActionButtons = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",

  justifyContent: "center",
  width: "100%"
})

const ProductsCount = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
   flex: 2,
  justifyContent: "center"
})

const ProductCart = styled("p")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 20,
  justifyContent: "center",
  flex: 4
})

const ProductsLike = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 20,
  justifyContent: "center",
  flex: 1
})

const AddRemoveButton = styled("button")({

  gap: "10px",
  backgroundColor: "rgb(0, 191, 165)",
  width: "20px",
  justifyContent: "center",
  fontSize: "15px",
  color: "white",
  fontWeight: "bold",
  height: "20px",
  border: "none",
  cursor: "pointer",
  position: "relative",
  alignSelf:"center",

  display: "flex"
  


});

const Count = styled("input")({


  width: "20px",
  backgroundColor: "#f2ebeb",
  fontSize: "15px",
  fontWeight: "bolder",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  border: "none",
  cursor: "pointer",
  position: "relative",
  display: "flex"
  


});

const AddCart = styled("button")({

  backgroundColor: "wheat",
  borderRadius: "10%",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",

  border: "none",
  cursor: "pointer",
  position: "relative",
  display: "flex",

  


});

const SortCategories = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 20,
 
  
})

const SortCategoryItem = styled(Link)({
  fontSize: "13px",
  fontWeight: "lighter",
  fontStyle: "italic",
  color: "black"
  
})

const ProductsFilter = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 20,
 
  
})

const Filter = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignSelf: "start",
  marginTop: 50,
  gap: 20,
  flex:1
 
  
})

const ColorFilter = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "start",
  paddingLeft: "10%",
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

const PriceFilter = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "start",
  paddingLeft: "10%",
  gap: 20,
})
const PriceFilterTitle = styled("p")({
  fontPrice: 14,
  fontWeight: "bold"
})
const PriceFilterSwatches = styled("p")({
  
  display: "flex", 
  flexDirection: "row", 
  flexWrap:"wrap",
  gap: "10px" 
})



const PriceFilterSort = styled("select")({
  backgroundColor: "transparent",
  border: "solid 1px green",
  borderRadius: "8px",
  padding: "4px",
  alignItems: "center",
  display: "flex",
  justifyContent: "center"

});

const PriceFilterSortOption = styled("option")({
  fontSize: "12px",
  fontWeight: "lighter"

});

const SizeFilter = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "start",
  paddingLeft: "10%",
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

const CollectionFilter = styled("div")((props)=>{

  return {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "start",
    paddingLeft: "10%",
    marginTop: 25,
    gap: 15,
}

  
})

const CollectionFilterText = styled("p")((props)=>{

  return {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "10px",
  justifyContent: "center",
  alignContent: "center",
  justifyContent: "center",
  fontSize: 15,
  fontWeight: "lighter",
  cursor: "pointer"
}

  
})

const BrandsFilter = styled("div")((props)=>{

  return {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "start",
    paddingLeft: "10%",
    marginTop: 25,
    gap: 15,
}

  
})

const BrandsFilterText = styled("p")((props)=>{

  return {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "10px",
  justifyContent: "center",
  alignContent: "center",
  justifyContent: "center",
  fontSize: 15,
  fontWeight: "lighter",
  cursor: "pointer"
}

  
})

const CheckBox = styled("button")((props)=>{

  return {
  display: "block",
  position: "relative",
  fontSize: 15,
  width: 15,
  height: 15,
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "solid 2px rgb(0, 191, 165)"
}

  
})



const ActiveFilters = styled("div")((props)=>{

  return {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "start",
    marginTop: 30,
    gap: 2,
    flex: 1,
}

  
})

const ActiveFiltersWrapper = styled("div")((props)=>{

  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "start",
    gap: 15,
}

  
})

const ActiveFilter = styled("section")((props)=>{

  return {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "start",
    marginTop: 25,
    gap: 5,
}

  
})

const ActiveTitle = styled("p")((props)=>{

  return {
    fontSize: 15,
    fontWeight: "lighter"

}

  
})

const ActiveDetail = styled("p")((props)=>{

  return {
    display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  fontSize: "14px",
  backgroundColor: "black",
  color: "white",
  padding: "5px",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  fontStyle: "italic"
  }

  
})




const UserNavigation = styled("ul")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "start",
  paddingLeft: "10%",
  marginTop: 30,
  gap: 2,
  justifyContent: "center",

})

const UserNavigationItem = styled("li")({
  margin: "0",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  backgroundColor: "#f9f4f4",
  width: "100%",
  borderRadius: "8px",
  paddingLeft: "5%",
  height: 40,
  cursor: "pointer"

  
})

const UserNavigationLink = styled(Link)({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  textDecoration: "none",
  color: "black",
  width: "100%",
})

const UserAccountImage = styled("img")({

  display: "flex",
  width: 120,
  height: 120,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  alignSelf: "center"
})

const UserNavigationImageContainer = styled("p")({

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

})

const DashboardSalutation = styled("div")({

  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: "wheat",
  width: "95%",
  height: "150px",
  borderRadius: "8px",
  paddingLeft: "2%",
  gap: "10px"

})

const UserAccount = styled("div")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  marginTop: 30,
  gap: 15,
  justifyContent: "center",
  flex: 3.5
})

const Recommeded = styled("div")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 15,
  justifyContent: "center",
  width: "95%"
 
})

const RecommededTitle = styled("p")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 15,
  justifyContent: "center",
  alignSelf: "start",
  marginTop: "30px",
  marginBottom: "30px",
  fontWeight: "lighter"
 
})

const RecommededList =  styled("ul")(()=>{
  return{
    display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  width: "95%"
  }
})

const WishList = styled("div")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 15,
  justifyContent: "center",
  width: "95%"

  
 
})

const WishListTitle = styled("p")({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 15,
  justifyContent: "center",
  alignSelf: "start",
  marginTop: "30px",
  marginBottom: "30px",
  fontWeight: "lighter"
 
})

const WishListList =  styled("ul")(()=>{
  return{
    display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  width: "95%",
  gap: "10px"
  }
})




const renderRecommended = (recoms)=>{
  
  return recoms.map((recom)=>{
    return(
      <CollectionItem>
         <CollectionPair>
          <CollectionItemImage image={images[recom.image]} />
    
         </CollectionPair>
              
         <CollectionTraits>
            <CollectionPrice>
              {`${recom.currency} ${recom.price}`}
            </CollectionPrice>
            <CollectionColor />
            
            
         </CollectionTraits>
      </CollectionItem>
    )
  })
}
const renderWishlist = (recoms)=>{
  
  return recoms.map((recom)=>{
    return(
      <WishListItem>
         <WishListPair>
          <WishListItemImage image={images[recom.image]} />
    
         </WishListPair>
              
         <WishListTraits>
            <WishListPrice>
              {`${recom.currency} ${recom.price}`}
            </WishListPrice>
            <WishListColor>
              {recom.name}
            </WishListColor>
            
            
         </WishListTraits>
      </WishListItem>
    )
  })
}
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
          <ListProductName>{product.name}</ListProductName>
          <ListProductPrice>{product.currency} {product.price}</ListProductPrice>
          <ListProductStatusContainer>
           <ListProductStatus>
             <small style={{fontSize: "20px", fontWeight: "bolder" }}>
             {product.count}
             </small>
             <small style={{fontSize: "14px", fontWeight: "lighter"}}>
               Available
             </small>
             
             </ListProductStatus>

             {/* <ListProductStatus>
             <small style={{fontSize: "20px", fontWeight: "bolder" }}>
             {product.status}
             </small>
             <small style={{fontSize: "14px", fontWeight: "lighter"}}>
               Stock Status
             </small>
             
             </ListProductStatus> */}
          </ListProductStatusContainer>

          <ActionButtons>
            <ProductsCount>
              
              <AddRemoveButton>
                 -
              </AddRemoveButton>
              <Count placeholder="1" />
               

              <AddRemoveButton>
                 +
              </AddRemoveButton>

            </ProductsCount>
            <ProductCart>
               <AddCart >
                 Add to cart
               </AddCart>
            </ProductCart>
            <ProductsLike>
            <BiHeart style={{color: "green", fontSize: 17}} />
            </ProductsLike>
          </ActionButtons>
         
          
        </ListLink>
     </ListItem>
  })

}


const RenderProducts = (props)=>{

  return (
     <ProductsFilter>
      <Filter>
        
        <UserAccountImage src={images.CapHero} />
        <UserNavigation>
        {
          renderNavigation(navigationItems)
        }
        </UserNavigation>

       


     
      </Filter>
      <UserAccount>
        <DashboardSalutation>
          <small style={{fontSize: "30px", fontWeight: "bolder" }}>
            Hi, SurpriseNtsako
          </small>
          <small style={{ fontWeight: "lighter"}}>
            Check out your wish list below
          </small>
        </DashboardSalutation>

        <Recommeded>
          <RecommededTitle>
          Recommended products
          </RecommededTitle>
          <RecommededList>
            {
              renderRecommended(recommendedProducts)
            }
            
          </RecommededList>
        </Recommeded>

       
        
        
        
        {/* {renderProducts(props.products)} */}
      </UserAccount>
     </ProductsFilter>
      
  )
}

const renderNavigation = (navigationItems)=>{

  return navigationItems.map((navigationItem)=>{
     return <UserNavigationItem>
        <UserNavigationLink href={`${navigationItem.link}`}>
          <UserNavigationImageContainer>
           
           <small style={
             {
              fontSize: "13px", fontWeight: "lighter" 
           }}
           >{
              navigationItem.name
             }</small>

          </UserNavigationImageContainer>   
        </UserNavigationLink>
     </UserNavigationItem>
  })

}


const CollectionItem = styled(("div"))({
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  gap: 30,
  flex:1
})

const CollectionPair = styled(("p"))({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  "&:hover button":{
    display: "block"
  }
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



const WishListItem = styled(("div"))({

  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  gap: "30px",
  flex: 1,
  backgroundColor: "#eae0e0",
  borderRadius: "5px",
  height: "200px",
  paddingTop: "15px"
})

const WishListPair = styled(("p"))({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  "&:hover button":{
    display: "block"
  }
})


const WishListTraits = styled(("section"))({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "10px"
})

const WishListPrice = styled(("section"))({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around"
})


const WishListColor = styled(("p"))((props)=>{
  
  return {
    fontSize: "15px",
    fontWeight: "bold"
  }
})

const WishListItemImage = (props)=>{
  
  return(
    <img src={props.image} style={{
      width: 70
    }} />
  )
}

const Shop = () => {

  const [products,setProducts] = useState(productsList)
  console.log("THE ACTIVE FILTERS",appFilters)
   
  return (
    
      // <Head title={"Products | TheCapGuy"} />
      
      <Products>


          
           
            
            {products ? <RenderProducts products={products} /> : <ProductListingError />}
  
          
          
         

        </Products>
        
      
      
    
  );
};

export default Shop;
