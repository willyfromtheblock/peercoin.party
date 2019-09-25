import React from "react";

const About = () => {
  return (
    <div className="col-8 card">
      <div className="m3 text-center" style={{ padding: "0.5rem" }}>
        Each{" "}
        <a
          href="https://ppc.lol/283FE"
          target="_blank"
          rel="noopener noreferrer "
        >
          Peercoin
        </a>{" "}
        block hash is turned into a beautiful and unique drawing.
        <p>
          Created with love and made possible by{" "}
          <a
            href="https://ppc.lol/Wj85E"
            target="_blank"
            rel="noopener noreferrer "
          >
            Jdenticon
          </a>
        </p>
        <br />
        <p>
          Love data? Check out{" "}
          <a
            href="https://ppc.lol/5XPvF"
            target="_blank"
            rel="noopener noreferrer "
          >
            Peercoinexplorer.net
          </a>
        </p>
        <br />
        <p>
          {" "}
          Wanna chat? <br />
          <img
            className="mx-1"
            src="/assets/img/mail.png"
            style={{ width: "2rem" }}
            alt="mail"
          />
          hi@peercoin.party
        </p>
      </div>
    </div>
  );
};

export default About;
