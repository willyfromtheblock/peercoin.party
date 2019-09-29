import React, { useState } from "react";
import About from "./about";

const Hero = ({ showModal }) => {
  const [showCollapse, setCollapse] = useState(false);
  return (
    <React.Fragment>
      <div className="row justify-content-center mt-4">
        <div className="col-xs-6 col-12 text-center">
          <h1>Peercoin blocks are pretty.</h1>
          <button
            className="btn btn-secondary my-3"
            type="button"
            onClick={() => setCollapse(!showCollapse)}
          >
            {showCollapse ? (
              "Hide About"
            ) : (
              <span className="align-items-center" style={{ display: "flex" }}>
                <img
                  className="mr-2"
                  src="assets/img/about.png"
                  style={{ width: "1rem" }}
                  alt="about"
                />
                About
              </span>
            )}
          </button>
          <button
            className="btn btn-secondary my-3"
            type="button"
            onClick={() => showModal("findblock")}
          >
            <span className="align-items-center" style={{ display: "flex" }}>
              <img
                className="mr-2"
                src="assets/img/search.png"
                style={{ width: "1rem" }}
                alt="search"
              />
              Find Block
            </span>
          </button>
          <button
            className="btn btn-secondary my-3"
            type="button"
            onClick={() => showModal("searchaddress")}
          >
            <span className="align-items-center" style={{ display: "flex" }}>
              <img
                className="mr-2"
                src="assets/img/search-block.png"
                style={{ width: "1rem" }}
                alt="search"
              />
              Search address
            </span>
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        {showCollapse && <About />}
      </div>
    </React.Fragment>
  );
};

export default Hero;
