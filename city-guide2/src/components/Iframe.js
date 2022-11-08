


import "./Iframe.css"
import React from "react";
import { MDBContainer, MDBIframe } from "mdbreact";

const Iframe = () => {
  return (
    <div className="container" id="iframeflex">
    <MDBContainer className="mapcs">
      <MDBIframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30223.314333684702!2d73.3941703423497!3d18.757365031368735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be801098bdf8145%3A0x696b4a60a5e28658!2sLonavla%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1658137953998!5m2!1sen!2sin" />
    </MDBContainer>
    </div>
  );
}

export default Iframe;