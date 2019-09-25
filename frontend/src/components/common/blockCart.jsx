import React from "react";
import { Card } from "react-bootstrap";
import Jdenticon from "react-jdenticon";
import RenderFlags from "../common/renderFlags";
import TimeAgo from "react-timeago";

const BlockCart = ({
  showModal,
  raiseModalBlockSelectedData,
  clickAble,
  blockData,
  blockNumber
}) => {
  const blockIndex = Object.keys(blockData[blockNumber])[0];
  const { hash, time, flags, nTx } = blockData[blockNumber][blockIndex];

  return (
    <Card style={{ width: "18rem", marginTop: "1.5rem" }}>
      <span
        className={clickAble ? "text-center pointer" : "text-center"}
        onClick={() => {
          if (clickAble) {
            showModal("block");
            raiseModalBlockSelectedData({ blockIndex, hash });
          }
        }}
      >
        <Jdenticon size="160px" value={hash + "pretty"} />
      </span>
      <Card.Body>
        <div>
          <div className="justify-content-between" style={{ display: "flex" }}>
            <div
              className="font-weight-bold"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Block number"
            >
              #{blockIndex}{" "}
            </div>
            <div
              data-toggle="tooltip"
              data-placement="bottom"
              title="Transactions"
            >
              {nTx} Tx
            </div>
          </div>
          <div className="justify-content-between" style={{ display: "flex" }}>
            <TimeAgo date={time * 1000} />
            <span>
              <RenderFlags flags={flags} />
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BlockCart;
