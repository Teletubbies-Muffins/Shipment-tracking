import React from "react";
import "./AnimatedCard.css";
export default function AnimatedCard({ shipment }) {
  return (
    <div className="animated-card">
      <div class="parent">
        <div class="card">
          <div class="logo">
            <span class="circle circle1"></span>
            <span class="circle circle2"></span>
            <span class="circle circle3"></span>
            <span class="circle circle4"></span>
            <span class="circle circle5">
              {/* left top ain */}
            </span>
          </div>
          <div class="glass"></div>
          <div class="content">
            <span class="title">To - {shipment.to}</span>
            <span class="text">
              {shipment.description}
            </span>
          </div>
          <div class="bottom">
            <div class="social-buttons-container">
              <p>{getFullDate(shipment.arrivalTime)}</p>
            </div>
            <div class="view-more">
              <button class="view-more-button">Details</button>
              <svg
                class="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const getFullDate = (dateStr) => {
  const date = new Date(dateStr)
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!

  const yyyy = date.getFullYear();

  return `${dd}-${mm}-${yyyy}`;
}