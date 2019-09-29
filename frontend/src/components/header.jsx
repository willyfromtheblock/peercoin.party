import React from "react";

const Header = () => {
  return (
    <header>
      <div className="navbar_ppc navbar-dark shadow-sm">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-2 col text-center"
              style={{ paddingRight: 0 }}
            >
              <a href="/">
                <img
                  className="logo"
                  style={{ maxWidth: "100%", margin: 10, height: "3rem" }}
                  src="https://peercoinexplorer.net/peercoin-horizontal-greenleaf-whitetext-transparent.svg"
                  alt="Peercoin Logo"
                />
              </a>
            </div>
            <div className="col-md-2 col-5 my-auto">
              <span className="my-auto header-text">...is art</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
