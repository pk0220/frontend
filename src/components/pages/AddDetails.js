import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddDetails() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [increment, setIncrement] = useState("");
  const [category, setCategory] = useState("");
  let [image, setImage] = useState(null);

  useEffect(() => {
    if (
      sessionStorage.getItem("user") == null ||
      sessionStorage.getItem("role") != "Bank"
    ) {
      window.location = "/login";
    }
  }, []);

  async function AddData() {
    let form = new FormData();

    console.log(image);

    form.append("product", image);
    form.append("name", name);
    form.append("details", desc);

    form.append("baseprice", price);
    form.append("city", city);
    form.append("startdate", startdate);
    form.append("enddate", enddate);
    form.append("increment", increment);
    form.append("category", category);
    await axios.post(" http://localhost:8081/product/add-product", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  return (
  <container  >
      <form style={{backgroundImage: url('https://c0.wallpaperflare.com/preview/450/707/805/gavel-auction-hammer-justice.jpg'), width: "600px", margin: "auto", marginTop: "40px"}}>
        <div className="form-group">
          <label style={{ margin: "10px" }} htmlFor="exampleInputEmail1">
            Property Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Property name"
          />
        </div>
        <div className="form-group">
          <label style={{ margin: "10px" }} htmlFor="exampleInputPassword1">
            Property Description
          </label>
          <textarea
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Property Description"
          />
        </div>
        <div className="form-group">
          <label style={{ margin: "10px" }} htmlFor="exampleInputPassword1">
            Base Price
          </label>
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="text"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Enter base price"
          />
        </div>
        <div className="form-group">
          <label style={{ margin: "10px" }} htmlFor="exampleInputPassword1">
            City
          </label>
          <input
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Enter City"
          />
        </div>

        <div className="form-group">
          <label style={{ margin: "10px" }} htmlFor="exampleInputPassword1">
            Start Date
          </label>
          <input
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
            type="text"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Enter Start Date"
          />
        </div>
        <div className="form-group">
          <label style={{ margin: "10px" }} htmlFor="exampleInputPassword1">
            End Date
          </label>
          <input
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
            type="text"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Enter End Date"
          />
        </div>
        <div className="form-group">
          <label style={{ margin: "10px" }} htmlFor="exampleInputPassword1">
            Minimum Increment
          </label>
          <input
            onChange={(e) => {
              setIncrement(e.target.value);
            }}
            type="text"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Enter Minimum Increment"
          />
        </div>
        <select
          id="category"
          name="category"
          placeholder="Choose a category"
          className="form-control my-2 form-control-md mb-2"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="" disabled>
            Select Category
          </option>

          <option value="PLOT">Plot</option>
          <option value="BUNGALOW">Bunglow</option>
          <option value="VEHICLE">Vehicle</option>
          <option value="GOLD">Gold</option>
        </select>
        <div className="form-group">
          <label style={{ margin: "10px" }} htmlFor="exampleFormControlFile1">
            Add image
          </label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>

        <button
          onClick={() => {
            AddData();
          }}
          style={{ margin: "10px" }}
          type="button"
          className="btn btn-primary"
        >
          Add
        </button>
      </form>
  </container>
    
  
  );
}