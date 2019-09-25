import React from "react";

const RenderFlags = ({ flags }) => {
  if (flags.includes("proof-of-stake")) {
    return (
      <span>
        <img
          src="/assets/img/staking.png"
          style={{ width: "1rem" }}
          alt="proof of stake"
        />{" "}
        <span
          data-toggle="tooltip"
          data-placement="bottom"
          title="Proof of Stake"
        >
          PoS
        </span>
      </span>
    );
  }
  return (
    <span>
      <img
        src="/assets/img/mining.png"
        style={{ width: "1.5rem" }}
        alt="proof of work"
      />
      <span data-toggle="tooltip" data-placement="bottom" title="Proof of Work">
        PoW
      </span>
    </span>
  );
};

export default RenderFlags;
