import React from "react";
// import GetAppIcon from "@material-ui/icons/GetApp";
import "./Download.css";

export class Download extends React.Component {
  render() {
    return (
      <div className="main-div">
        <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" download ="dummy.pdf">
          <button>Download</button>
        </a>
      </div>
    );
  }
}
