import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import "./about.css";
import t from "../../Images/twitter.png";
import i from "../../Images/Instagram logo.png";
import f from "../../Images/facebook.png";


function About() {
  return (
    <>
      <Navbar name={"fahad"}/>
      <div className="about-page">
        <div>
          <h1 className="text-center">ABOUT US</h1>
          <p>
            In today's fast-paced world, keeping track of your shipments is
            crucial. Our shipment tracking app seamlessly integrates into your
            busy life, providing you with real-time updates and detailed
            information about your shipments, empowering you to stay informed and
            in control. With our app, you can effortlessly track shipments from
            multiple carriers, eliminating the need to navigate through multiple
            websites or apps. Receive real-time notifications about shipment
            status and location, ensuring you're always up-to-date on the
            whereabouts of your packages. View detailed shipment information,
            including tracking numbers, delivery dates, and estimated delivery
            times, allowing you to plan accordingly.
            <hr />
            Team Members: Majid , Fahad {':)'}
          </p>

          <div className="social-container">
            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="_blank"><img src={t} alt="Twitter login" title="Visit us on twitter" /></a>
            <a href="https://www.instagram.com/accounts/login/" target="_blank" title="Visit us on Instagram"><img src={i} alt="Instagram login" /></a>
            <a href="https://www.facebook.com/" target="_blank" title="Visit us on Facebook"><img src={f} alt="Facebook login" /></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
