import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
function Banner() {
  return (
    <div className="">
      <div
        id="non-student-cta-wrapper"
        class="mt-3 mb-5 row justify-content-center"
      >
        <div class="col-md-4 d-flex justify-content-end">
          <img
            src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
            alt=""
            width="400px"
          />
        </div>
        <div class="col-md-4 d-flex flex-column justify-content-center ">
          <h3 id="" class="align-self-start">
            Become an instructor
          </h3>
          <span class="w-auto banner-content-right">
            Instructors from around the world teach millions of students on
            Udemy. We provide the tools and skills to teach what you love.
          </span>

          <a
            className="learning-btn bg-dark p-3 text-white ml-2 text-center banner-button mt-3"
            href="./learning"
          >
            Start learning today
          </a>
        </div>
      </div>
      <section class="text-center collab-company pt-4 ">
        <h5 class="d-block">Trusted by companies of all sizes</h5>
        <a href=".." class="d-flex justify-content-center">
          <div class="logo-item m-2">
            <img
              alt="Nasdaq"
              width="115"
              height="44"
              src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
            />
          </div>
          <div class="logo-item m-2">
            <img
              alt="Volkswagen"
              width="44"
              height="44"
              src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
            />
          </div>
          <div class="logo-item m-2">
            <img
              alt="Box"
              width="67"
              height="44"
              src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
            />
          </div>
          <div class="logo-item m-2">
            <img
              alt="Netflix"
              width="101"
              height="44"
              src="https://s.udemycdn.com/partner-logos/v4/netflix-dark.svg"
            />
          </div>
          <div class="logo-item m-2">
            <img
              alt="Eventbrite"
              width="115"
              height="44"
              src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
            />
          </div>
        </a>
      </section>
      <div id="non-student-cta-wrapper-left" class="mt-3 mb-5 row">
        <div class="col-md-4 d-flex flex-column justify-content-center">
          <h3 id="" class="align-self-start">
            Become an instructor
          </h3>
          <span class="w-auto banner-content-left align-self-start">
            Instructors from around the world teach millions of students on
            Udemy. We provide the tools and skills to teach what you love.
          </span>

          <a
            className="learning-btn bg-dark p-3 text-white ml-2 text-center banner-button mt-3 align-self-start"
            href="./learning"
          >
            Start learning today
          </a>
        </div>
        <div class="col-md-4">
          <img
            className="align-self-start"
            src="https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg"
            alt=""
            width="400px"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
