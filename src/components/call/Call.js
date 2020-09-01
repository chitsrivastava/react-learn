import React from "react";
import "./Call.css";

export default class Call extends React.Component {
  render() {
    return (
      <div className="main-div">
        <a href="tel:+91-206-642-5000">
          <button>Contact Us</button>
        </a>
      </div>
    );
  }
}
