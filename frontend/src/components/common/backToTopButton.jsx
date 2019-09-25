import React from "react";

const BackToTopButton = () => {
  return (
    <div
      className="back-to-top pointer text-footer"
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      }
    >
      <img
        src="assets/img/arrow.png"
        alt="arrow-up"
        style={{ width: "2.0rem" }}
      />
      <span>Back to top</span>
    </div>
  );
};

export default BackToTopButton;
