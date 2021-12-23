import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div id="footer" className="p-3 d-flex bg-dark">
      <img
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
        alt="Udemy"
        width="91"
        height="34"
      />
      <span class="text-white font-weight-light mt-1">© 2021 Udemy, Inc.</span>
    </div>
  );
}

export default Footer;
