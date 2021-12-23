import React from "react";

import imageSlider from "./assets/db24b94e-d190-4d5a-b1dd-958f702cc8f5.jpg";
Slider.propTypes = {};

function Slider(props) {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={imageSlider} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Third slide" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
