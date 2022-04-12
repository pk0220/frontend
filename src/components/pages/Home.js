import { Fullscreen, FullscreenExit } from "@mui/icons-material";
import { Grid } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
// import { Card } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  // const token = JSON.parse(localStorage.getItem("jwttoken"));
  useEffect(() => {
    ViewDetails();
  }, []);
  const ViewDetails = () => {
    axios
      .get("http://localhost:8081/product/getProducts")
      //{ headers: { 'authorization': `Bearer ${token}` } }
      .then((response) => {
        console.log("Printing product", response);
        console.log("Printing product data", response.data);

        setProduct(response.data);
        console.log("productimg", product.productImg);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  const ShowDetails = () => {
    alert("djshjksh");
    navigate("/details");
  };

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
        <button onClick={ViewDetails} className="btn btn-primary my-3">
          ViewDetails
        </button>

        <div
          style={{
            display: "flex",
            padding: "20px",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {product.map((prod, productno) => {
            return (
              <div key={productno} className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Card image cap"
                />
                {/* <img className="card-img-top" src={prod.productImg} alt="Card image cap"/> */}
                <div className="card-body">
                  <h5 className="card-title">{prod.name}</h5>
                  <p className="card-text">{prod.baseprice}</p>
                  <button onClick={ShowDetails} className="btn btn-primary">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
