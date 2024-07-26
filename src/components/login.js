import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if email and password match expected values
    if (email === "Admin" && password === "Admin") {
      // Set local variable to indicate user is authenticated
      localStorage.setItem("isAuthenticated", true);
      setIsAuthenticated(true);
    } else {
      alert("Incorrect email or password");
    }
  };
  if (isAuthenticated) {
    return navigate("/");
  } else {
    return (
      <div>
        <section class=''>
          <div class='container h-100'>
            <div class='row d-flex justify-content-center align-items-center h-100'>
              <div class='col-lg-12 col-xl-11'>
                <div class='card text-black' style={{ borderradius: "25px", backgroundColor: "#eee" }}>
                  <div class='card-body p-md-5'>
                    <div class='row justify-content-center'>
                      <div class='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                        <p class='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Login</p>

                        <form class='mx-1 mx-md-4' onSubmit={handleSubmit}>
                          <div class='d-flex flex-row align-items-center mb-4'>
                            <i class='fas fa-lock fa-lg me-3 fa-fw'></i>
                            <div class='form-outline flex-fill mb-0'>
                              <input type='email' name='email' value={email} onChange={handleInputChange} id='form3Example4c' class='form-control' placeholder='Email' />
                            </div>
                          </div>
                          <div class='d-flex flex-row align-items-center mb-4'>
                            <i class='fas fa-key fa-lg me-3 fa-fw'></i>
                            <div class='form-outline flex-fill mb-0'>
                              <input type='password' name='password' value={password} onChange={handleInputChange} id='form3Example4cd' class='form-control' placeholder='password' />
                            </div>
                          </div>
                          <div class='form-check d-flex justify-content-center mb-5'>
                            <input class='form-check-input me-2' type='checkbox' value='' id='form2Example3c' />
                            <label class='form-check-label' for='form2Example3'>
                              I agree all statements in <a href='#!'>Terms of service</a>
                            </label>
                          </div>
                          <div class='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                            <button type='submit' class='btn btn-primary btn-lg'>
                              Login
                            </button>
                          </div>
                          Create Your Account <a href='/Register'>Sign up</a>
                        </form>
                      </div>
                      <div class='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>
                        <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' class='img-fluid' alt='Sample image' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;