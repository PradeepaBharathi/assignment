import React from "react";
import "./Banner.css";
import data from "./Banner.json";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Products from "../Products/Products";
function Banner() {
  return (
    <>
      <div className="container">
        <svg className="curved-triangle" viewBox="0 0 500 400">
          <path d="M 0,400 Q 250,-450 500,400" />
        </svg>
        <div className="small-svg">
          <svg viewBox="0 0 500 200">
            <path d="M 0,400 Q 280,-500 500,400" fill="magenta" />
          </svg>
        </div>
        <div className="content">
          {data.map((val) => {
            return (
              <div key={val.title} className="banner-item">
                <h1>{val.title}</h1>
                <div className="bcard">
                  <div className="blackCard">
                    <h2> {val.cardAmount}</h2>
                    <p> {val.cardText}</p>
                  </div>
                  <div className="sidebar">
                    <div className="para">
                      <p>{val.paragraph}</p>
                    </div>
                    <div className="time">
                      <div className="gift-card">
                        <span>
                          <b>{val.yellocard}</b>
                        </span>
                        <p>
                          <b>{val.yeltext}</b>
                        </p>
                      </div>

                      <div className="timeline-container">
                        <span className="days">{val.timeline}</span>
                        <b>{val.time}</b>
                      </div>
                    </div>
                    <button className="offer">
                      <b>{val.offer}</b>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card-container">
        <div className="card card1"></div>
        <div className="card card2"></div>
        <div className="card card3"></div>
        <div className="card card4"></div>
        <div className="card card5"></div>
        <div className="card card6"></div>
        <div className="card card7"></div>
        <div className="deal">
          <div className="text">
            <p>
              <span className="dealShop">Shop By Deal</span> Special Deals for
              New and Existiing customers
            </p>
          </div>
          <div className="arrow">
            <div className="circle-border">
              <FaArrowLeft />
            </div>
            <div className="circle-border">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
}

export default Banner;
