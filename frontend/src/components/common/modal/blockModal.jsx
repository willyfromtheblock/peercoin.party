import React, { useRef } from "react";
import BlockButtonBar from "./blockButtonBar";
import Jdenticon from "react-jdenticon";

const BlockModal = ({ modalBlockSelectedData }) => {
  const { hash, blockIndex } = modalBlockSelectedData;
  const refImg = useRef(null);

  return (
    <React.Fragment>
      <div className="row justify-content-center" ref={refImg}>
        <Jdenticon size="200px" value={hash + "pretty"} />
      </div>
      <BlockButtonBar hash={hash} blockIndex={blockIndex} />
    </React.Fragment>
  );
};

export default BlockModal;
