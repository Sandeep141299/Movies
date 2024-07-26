import React from "react";
import "./Css/Footer.css";

function Footer() {
  return (
    <div>
      {" "}
      {/* <!-- Site footer --> */}{" "}
      <footer class='site-footer'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-12 col-md-6'>
              <h6> About </h6> <p class='text-justify'>This is a website for movie enthusiasts to discover and explore movies.We are passionate about movies and strive to provide the best movie information to our users.Contact us at support@movieswebsite.com for any queries or feedback. </p>
            </div>
            <div class='col-xs-6 col-md-3'>
              <h6> Categories </h6>{" "}
              <ul class='footer-links'>
                <li>
                  <a href=''> Action </a>{" "}
                </li>{" "}
                <li>
                  <a href=''> Drama</a>{" "}
                </li>{" "}
                <li>
                  <a href=''> Comedy </a>{" "}
                </li>{" "}
                <li>
                  <a href=''> Action </a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>
            <div class='col-xs-6 col-md-3'>
              <h6> Quick Links </h6>{" "}
              <ul class='footer-links'>
                <li>
                  <a href='/aboutus'> About Us </a>{" "}
                </li>{" "}
                <li>
                  <a href='/contactus'> Contact Us </a>{" "}
                </li>{" "}
                <li>
                  <a href='/Register'> Register </a>{" "}
                </li>{" "}
                <li>
                  <a href='/dashboard'>Dashboard </a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          <hr />
        </div>{" "}
        <div class='container'>
          <div class='row'>
            <div class='col-md-8 col-sm-6 col-xs-12'>
              <p class='copyright-text'>
                Copyright & copy; 2023 All Rights Reserved by <a href='/'> Movies</a>.{" "}
              </p>{" "}
            </div>
            <div class='col-md-4 col-sm-6 col-xs-12'>
              <ul class='social-icons'>
                <li>
                  <a class='facebook' href='#'>
                    <i class='fa fa-facebook'> </i>{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  <a class='twitter' href='#'>
                    <i class='fa fa-twitter'> </i>{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  <a class='dribbble' href='#'>
                    <i class='fa fa-dribbble'> </i>{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  <a class='linkedin' href='#'>
                    <i class='fa fa-linkedin'> </i>{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
}

export default Footer;
