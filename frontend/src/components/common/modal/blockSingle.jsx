import React, { useEffect, useState } from "react";
import BlockCart from "../blockCart";
import BlockButtonBar from "./blockButtonBar";
import http from "../../../services/httpService";
import Loader from "../loader";

const BlockSingle = ({ block, showModal }) => {
  const [blockData, setBlockData] = useState([]);

  useEffect(() => {
    const fetchBlock = async () => {
      const result = await http.get(
        "blocks.php?scroll=" + block + "&single=true"
      );
      const mergedData = blockData.concat(result.data);
      setBlockData(mergedData);
    };
    fetchBlock();
  }, []);

  if (blockData && blockData.length === 0) {
    return <Loader />;
  }

  const blockIndex = Object.keys(blockData[0])[0];
  const { hash } = blockData[0][blockIndex];

  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <BlockCart
          blockData={blockData}
          blockNumber={0}
          showModal={() => null}
          raiseModalBlockSelectedData={() => null}
          clickAble={false}
        />
      </div>
      <BlockButtonBar hash={hash} blockIndex={blockIndex} />
      <div className="row mt-3 justify-content-end">
        <div
          className="col-lg-2 col-md-3 col-5 pointer mr-1 div-link"
          onClick={() => showModal("findblock")}
          style={{ textAlign: "right" }}
        >
          New search
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlockSingle;
