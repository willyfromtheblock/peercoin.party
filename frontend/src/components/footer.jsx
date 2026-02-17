import React from "react";
import BackToTopButton from "./common/backToTopButton";

const Footer = (props) => {
  return (
    <footer className="footer navbar_ppc">
      <div className="container-fluid footer-container">
        <div className="row justify-content-center">
          <div className="col-lg-2 col-md-2 col-3 text-light text-footer my-auto pt-1">
            Icons:
            <a
              className="footer-link"
              href="https://ppc.lol/XGWWE"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              icons8.de
            </a>
            <a href="https://www.coinerella.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://fonts.peercoinexplorer.net/coinerella.png"
                alt="Coinerella"
                style={{ height: "25px", verticalAlign: "middle" }}
              />
            </a>
          </div>
          <div className="col-lg col-md col-4">
            <p className="donate_addr text-light text-footer">
              <span className="footer-donation-text">
                If you're enjoying this service, please consider donating to
              </span>

              <button
                type="button"
                onClick={() => props.showModal()}
                className="btn btn-secondary donate_addr"
              >
                <span className="footer-donation-text-mobile ">Donate </span>
                <span className="footer-donation-text">
                  PM7jjBUPjzpkZy1UZtD7mvmHoXJ2BGvbx9
                </span>
              </button>
            </p>
          </div>
          <div className="col-lg-2 col-md-2 col-5 back-to-top-container">
            <BackToTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
