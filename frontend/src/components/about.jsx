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
        block hash is turned into a beautiful and unique
        <span className="footnote-star">*</span> drawing.
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
            rel="noopener noreferrer"
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
        <p className="mt-2 footnote">
          * approximately 873,600 available{" "}
          <a
            href="https://ppc.lol/gL9nW"
            target="_blank"
            rel="noopener noreferrer"
          >
            read more
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
