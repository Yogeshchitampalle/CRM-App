import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <div>
     {/* <br /><br /> */}
    <footer class="bg-dark text-center text-white">
    {/* <!-- Grid container --> */}
    <div class="container p-4 pb-0">
      {/* <!-- Section: Social media --> */}
      <section class="mb-4">

        {/* <!-- Linkedin --> */}
        <a class="btn btn-outline-light btn-floating m-1" href="www.linkedin.com/in/chitampalle-yogesh084b41158" role="button"
          ><i class="fab fa-linkedin-in"></i></a>

        {/* <!-- Github --> */}
        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/Yogeshchitampalle" role="button"
          ><i class="fab fa-github"></i></a>

        {/* <-- Presonal Portfolio --> */}
        <a class="btn btn-outline-light btn-floating m-1" href="https://yogichi95.netlify.app/" role="button">
        <i class="fa-solid fa-user"></i></a>        
      
        {/* <!-- Instagram --> */}
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/chitampalle_yogesh_tanajirao/" role="button"
          ><i class="fab fa-instagram"></i></a>
  
      </section>
      {/* <!-- Section: Social media --> */}
    </div>
    {/* <!-- Grid container --> */}
  
    {/* <!-- Copyright --> */}
    <div class="text p-3" >
      © 2023 Copyright All Right are Resreved 
      &nbsp;  &nbsp; Yogichi95
    </div>
    {/* <!-- Copyright --> */}
  </footer>
    </div>
  )
}

export default Footer