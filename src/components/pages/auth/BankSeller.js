import { Fullscreen, FullscreenExit } from "@mui/icons-material";
import { Grid } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState ,useEffect} from "react";
// import { Card } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
const Home = () => {
  // const[data, setData] = useState([

  //   {
  //     Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmh5dlx5-m4G5dq97EO6yYKrmfAY1Qh_kC0pp3WHvqXA3O4dtYAcYg2D59kF3sfviC7o&usqp=CAU",
  //     title:"Gulmohar Villa",
  //     desc:""
  //   },
  //   {
  //     Img:"https://lh3.googleusercontent.com/-VcDXRa9LhRA/XwcfPBaieYI/AAAAAAAApHE/cV5ymFrnHB0ymTN5EoabSswHoZFgQ1AvACLcBGAsYHQ/s1600/1594302584791943-0.png",
  //     title:"SwapnShilp House",
  //     desc:"Description:"
  //   },
  //   {
  //     Img:"http://www.chennaibankauction.in/wp-content/uploads/2021/04/ICICI-Property-Nandambakkam.jpeg",
  //     title:"Bhat Villa",
  //     desc:""
  //   },
  //   {
  //     Img:"https://www.dealaprop.com/wp-content/uploads/2019/09/property-for-sale-in-kotturpuram-chennai-330x230.jpg",
  //     title:"Vrundavan",
  //     desc:""
  //   },

  //   {
  //     Img:"https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/121991547_106669034559442_4075946153400920667_n.jpg?stp=dst-jpg_s600x600&_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=uMIBn4qsRkUAX_tBk1z&_nc_ht=scontent.fpnq16-1.fna&oh=00_AT-JRXGGuDj_7_TYdtBH87aVAmza_ptOGGO_nK-sPkeGWA&oe=6269B759",
  //     title:"Porsche Germany ",
  //     desc:"Panamera Turbo Model March Carrar white Petrol Price 1.10 Cr"

  //   },
  //   {
  //     Img:"https://www.dealaprop.com/wp-content/uploads/2019/02/06ebb39b-4507-40a2-8f02-599520e4f7c7.jpg",
  //     title:"Plot sale ",
  //     desc:"OMR Kalavakkam"
  //   },
  //   {
  //     Img:"https://scontent.fpnq16-1.fna.fbcdn.net/v/t1.6435-9/121470503_101711131721899_8466648731122400985_n.jpg?stp=dst-jpg_p552x414&_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=03D5R3uEoAwAX8pRoCm&_nc_ht=scontent.fpnq16-1.fna&oh=00_AT_hx7HEuheL14dJND3mVHRmlcrSCWuEKfKftWVuRQGFvQ&oe=6267E1EE",
  //     title:"BMW",
  //     desc:"Model: 2013 Owner:"
  //   },
  //   {
  //     Img:"https://images.livemint.com/img/2019/04/16/600x338/Kerala_1555430371601.jpg",
  //     title:"Shanti Niwas",
  //     desc:""
  //   }
  // ]);
  const navigate = useNavigate();
  const [product, setProduct] = useState([])
  

  // const token = JSON.parse(localStorage.getItem("jwttoken"));
    useEffect(() => {
      ViewDetails();
    }, [])
    const ViewDetails = () => {
         axios.get("http://localhost:8081/product/getProducts")
         //{ headers: { 'authorization': `Bearer ${token}` } }
            .then(response => {
                console.log('Printing product', response);
                console.log('Printing product data', response.data);
                
                setProduct(response.data);
                console.log("productimg",product.productImg)
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
           
    }

  return (
    <div>
      <div>
       
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img
                  src="https://www.omservices.co.in/property-consultant/assets/images/demo-content/banner1.jpg"
                  className="d-block w-100 "
                  alt="image1"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://www.omservices.co.in/property-consultant/assets/images/demo-content/banner1.jpg"
                  className="d-block w-100 "
                  alt="image2"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://www.omservices.co.in/property-consultant/assets/images/demo-content/banner1.jpg"
                  className="d-block w-100 "
                  alt="image3"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://www.omservices.co.in/property-consultant/assets/images/demo-content/banner1.jpg"
                  className="d-block w-100 "
                  alt="image4"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://www.omservices.co.in/property-consultant/assets/images/demo-content/banner1.jpg"
                  className="d-block w-100 "
                  alt="image5"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
           
    
          </div>
  
      </div>
      <div>
        <button onClick={ViewDetails} className="btn btn-primary my-3">ViewDetails</button>
       
          <div style={{display:"flex",padding:"20px", flexWrap: "wrap", gap:"10px"}}>
          {
            product.map((prod, productno) => {
              return(
                <div key={productno} className="card" style={{width:"18rem"}}>
                  <img className="card-img-top" src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
                  {/* <img className="card-img-top" src={prod.productImg} alt="Card image cap"/> */}
                  <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text">{prod.baseprice}</p>
                    <Link to="/viewDetails" className="btn btn-primary">View Details</Link>
                  </div>
              </div>
              )
            })
          }
        
       </div>
      </div>
    </div>
  );
};

export default Home;
