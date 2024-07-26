import React from "react";
import "./Css/Contactus.css";

function Contactus() {
  return (
    <div>
      <div class='contact-1 py-4 md:py-12'>
        <div class='container mx-auto px-4'>
          <div class='xl:flex -mx-4'>
            <div class='xl:w-10/12 xl:mx-auto px-4'>
              <div class='xl:w-3/4 mb-4'>
                <h1 class='text-3xl text-medium mb-4'>We would love to hear from you</h1>
                <p class='text-xl mb-2'>Please submit your information and we will get back to you.</p>
              </div>

              <div class='md:flex md:-mx-4 mt-4 md:mt-10'>
                <section class=''>
                  <div class='container h-100'>
                    <div class='row d-flex justify-content-center align-items-center h-100'>
                      <div class='col-lg-12 col-xl-11'>
                        <div class='card text-black' style={{ borderradius: "25px", backgroundColor: "#eee" }}>
                          <div class='card-body p-md-5'>
                            <div class='row justify-content-center'>
                              <div class='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                                <p class='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Contact Us </p>

                                <form class='mx-1 mx-md-4'>
                                  <div class='d-flex flex-row align-items-center mb-4'>
                                    <i class='fas fa-user fa-lg me-3 fa-fw'></i>
                                    <div class='form-outline flex-fill mb-0'>
                                      <input type='text' name='Name' id='form3Example1c' class='form-control' placeholder='firstName' />
                                    </div>
                                  </div>
                                  <div class='d-flex flex-row align-items-center mb-4'>
                                    <i class='fas fa-lock fa-lg me-3 fa-fw'></i>
                                    <div class='form-outline flex-fill mb-0'>
                                      <input type='number' name='number' id='form3Example4c' class='form-control' placeholder='Contact No.' />
                                    </div>
                                  </div>
                                  <div class='d-flex flex-row align-items-center mb-4'>
                                    <i class='fas fa-lock fa-lg me-3 fa-fw'></i>
                                    <div class='form-outline flex-fill mb-0'>
                                      <input type='email' name='email' id='form3Example4c' class='form-control' placeholder='Email' />
                                    </div>
                                  </div>

                                  <div class='d-flex flex-row align-items-center mb-4'>
                                    <i class='fas fa-key fa-lg me-3 fa-fw'></i>
                                    <div class='form-outline flex-fill mb-0'>
                                      <textarea class='form-control' rows='5' id='comment' placeholder='Message' />
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
                                      Submit
                                    </button>
                                  </div>
                                </form>
                              </div>
                              <div class='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>
                                <div class='md:w-1/3 md:px-4 mt-10 md:mt-0'>
                                  <div class='bg-indigo-100 rounded py-4 px-6'>
                                    <h5 class='text-xl font-medium mb-3'>Help</h5>
                                    <p class='text-gray-700 mb-4'>
                                      Need help or have any query? Don't hesitate, you can directly shoot us an{" "}
                                      <a href='mailto:' class='text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block'>
                                        email
                                      </a>{" "}
                                      or call us at{" "}
                                      <a href='tel:' class='text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block'>
                                        +1 231 456 1231
                                      </a>
                                    </p>
                                    <p class='text-gray-700'>
                                      You can move to{" "}
                                      <a href='#' class='text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block'>
                                        FAQs
                                      </a>{" "}
                                      or{" "}
                                      <a href='#' class='text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block'>
                                        Support
                                      </a>{" "}
                                      page to get more information about our site.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
