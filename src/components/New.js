import React from "react";
import { useState, useEffect } from "react";
import "./Css/AboutUs.css";
// import Fetchapi from "./Fetchapi";
import axios from "axios";
import { useParams } from "react-router-dom";

function New() {
  const [movieData, setmovieData] = useState([]);
  let { movieId } = useParams();
  useEffect(() => {
    async function requestData() {
      const options = {
        method: "GET",
        url: `https://moviesdatabase.p.rapidapi.com/titles/${movieId}`,
        headers: {
          "X-RapidAPI-Key": "746a325d80msh485c8b520923065p183582jsn4b9f59888a7a",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setmovieData(response.data.results);
        console.log(response.data);
        console.log(movieData);
      } catch (error) {
        console.error(error);
      }
    }
    requestData();
  }, [movieId]);
  return (
    <div>
      <div class='container'>
        <div class='row' id='moviecard'>
          <h1>Movie Details</h1>
          <div class='col-md-4'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>{movieData.primaryImage && movieData.primaryImage.url ? <img src={movieData.primaryImage.url} class='card-img-top' /> : "Not available"}</h5>
                {/* <p>
                  <b>Movie Id: </b> {movieData.id}
                </p>
                <p>
                  <b> Movie Title: </b> {movieData.titleText && movieData.titleText.text ? movieData.titleText.text : "NA"}
                </p>
                <p>
                  <b>Movie Type: </b>
                  {movieData.titleType && movieData.titleType.text ? movieData.titleType.text : "Not available"}
                </p>
                <p>
                  <b>ReleaseDate:</b> {movieData.releaseDate && movieData.releaseDate.day ? movieData.releaseDate.day : "NA"}/{movieData.releaseDate && movieData.releaseDate.month ? movieData.releaseDate.month : "NA"}/{movieData.releaseDate && movieData.releaseDate.year ? movieData.releaseDate.year : "NA"}
                </p> */}
              </div>
            </div>
          </div>
          <div class='col-md-4'>
            <br />{" "}
            <p>
              <b>Movie Id: </b> {movieData.id}
            </p>
            <p>
              <b> Movie Title: </b> {movieData.titleText && movieData.titleText.text ? movieData.titleText.text : "NA"}
            </p>
            <p>
              <b>Movie Type: </b>
              {movieData.titleType && movieData.titleType.text ? movieData.titleType.text : "Not available"}
            </p>
            <p>
              <b>ReleaseDate:</b> {movieData.releaseDate && movieData.releaseDate.day ? movieData.releaseDate.day : "NA"}/{movieData.releaseDate && movieData.releaseDate.month ? movieData.releaseDate.month : "NA"}/{movieData.releaseDate && movieData.releaseDate.year ? movieData.releaseDate.year : "NA"}
            </p>
            <button>
              <a id='a' href='/404'>
                View More
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
