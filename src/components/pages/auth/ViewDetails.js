import React, { useState,useEffect } from "react";
import axios from "axios"
const ViewDetails  = (props) => {
  const [product, setProduct]=useState("")

  useEffect(() => {
    init();
  }, []);

const init=(props)=>{
    axios.get("http://localhost:8081/product/getProducts", product.productno)
    .then(response => {
        console.log('Printing product data', response.data);
        setProduct(response.data);
    })
    .catch(error => {
        console.log('Something went wrong', error);
    });
    return (
       <div style={{width:"1200px", margin:"auto", padding:"60px", border:"2px solid red"}}>
       <div style={{display:"flex", gap:"50px"}}>
       {
                   product.map((product)=>{
                       return(
                           <>
           <div style={{width:"50%"}}>
            {/* <img className="card-img-top" src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/> */}
            <img className="card-img-top" src={product.productimg} alt="Card image cap"/>
           </div>
           <div style={{width:"50%"}}>
              
                          
                            <h3>{product.name}</h3>
                            <p>{product.desc}</p>
                            <p>{product.baseprice}</p>
                            <p>{product.startdate} </p>
                            <p>{product.enddate }</p>
                            <p>{product.increment}</p>
                            <p>{product.city}</p>
                       
                       
               
           </div>
           </>
           )
        })
    }
       </div>
       </div>
    )
}
}

export default ViewDetails