import React, { Component } from "react";
import axios from "axios";

import "./Webcam.css";

import Webcam from "react-webcam";
import { Button, ButtonGroup } from "react-bootstrap";

import CameraIcon from "../../assets/icons8-camera-100.png";

class WebcamCapture extends Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  };

  captureHandler = () => {
    const imageSrc = this.webcam.getScreenshot();
    let detectionData;

    axios.post("http://localhost:5000/detection", imageSrc).then((response) => {
      detectionData = response.data;
      this.props.callbackFromParent(detectionData);
    });
  };

  render() {
    return (
      <div className="WebcamMainContainer">
        <div className="WebcamContainer">
          <div className="InsideWebcamContainer">
            <Webcam ref={this.setRef} width="90%" height="50%" />
          </div>
          <ButtonGroup className="me-2">
            <ButtonGroup className="me-2">
              <Button kind="danger" className="camera-button">
                {/* <a class="waves-effect waves-light btn"> */}
                <img
                  onClick={this.captureHandler}
                  src={CameraIcon}
                  alt="Camera Icon"
                  className="image"
                />
              </Button>
              {/* </a> */}
            </ButtonGroup>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default WebcamCapture;
