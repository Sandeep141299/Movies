import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Css/Home.css";
import DataTable from "react-data-table-component";
// import Fetchapi from "./Fetchapi";
import axios from "axios";
import { useParams } from "react-router-dom";

function Home() {
  const [movieData, setmovieData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function requestData() {
      const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles",
        headers: {
          "X-RapidAPI-Key": "746a325d80msh485c8b520923065p183582jsn4b9f59888a7a",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setmovieData(response.data.results);
        console.log(movieData);
      } catch (error) {
        console.error(error);
      }
    }
    requestData();
  }, []);
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredMovies = movieData.filter((movie) => {
    const title = movie.titleText && movie.titleText.text ? movie.titleText.text.toLowerCase() : "";
    const input = searchInput.toLowerCase();
    return title.includes(input);
  });
  return (
    <div>
      <div class='container1'>
        <h1>List Of Movies</h1>
        <span>
          <input className='form-control' id='Searchinput' type='search' value={searchInput} onChange={handleSearch} placeholder='Search Movie Title' aria-label='Search' />
        </span>
        <DataTable
          className='DataTable'
          columns={[
            {
              name: "MovieId",
              selector: "id",
              sortable: true,
            },
            {
              name: "Movie Title",
              selector: "titleText.text",
              sortable: true,
              cell: (row) => (row.titleText && row.titleText.text ? row.titleText.text : "NA"),
            },
            {
              name: "Release Date",
              selector: "releaseDate",
              sortable: true,
              cell: (row) => `${row.releaseDate && row.releaseDate.day ? row.releaseDate.day : "NA"}/${row.releaseDate && row.releaseDate.month ? row.releaseDate.month : "NA"}/${row.releaseDate && row.releaseDate.year ? row.releaseDate.year : "NA"}`,
            },
            {
              name: "Title Type",
              selector: "titleType.text",
              sortable: true,
              cell: (row) => (row.titleType && row.titleType.text ? row.titleType.text : "Not available"),
            },
            {
              name: "View Details",
              cell: (row) => (
                <Link to={`/Movie/${row.id}`}>
                  <button className='btn btn-primary'>View</button>
                </Link>
              ),
              ignoreRowClick: true,
              allowOverflow: true,
              button: true,
            },
          ]}
          data={filteredMovies}
          pagination
          paginationPerPage={5}
          noHeader
          highlightOnHover
        />
      </div>
    </div>
  );
}

export default Home;
