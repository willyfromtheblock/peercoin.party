import React, { useState } from "react";
import http from "../../services/httpService";
import InfiniteScroll from "react-infinite-scroller";
import BlockCart from "../common/blockCart";
import Loader from "../common/loader";

const BlockTable = ({
  raiseModalBlockSelectedData,
  showModal,
  lowestBlock,
  raiseLowestBlock,
  raiseHighestBlock
}) => {
  const [blockData, setBlockData] = useState([]);
  const [hasMore, setMore] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  const fetchBlocks = async scroll => {
    const result = await http.get("blocks.php?scroll=" + scroll);
    const mergedData = blockData.concat(result.data);
    setBlockData(mergedData);
    raiseLowestBlock(Object.keys(result.data[result.data.length - 1])[0]);
    setInitialLoad(false);
  };

  const loadMore = () => {
    if (lowestBlock < 15 && lowestBlock !== 0) setMore(false);
    else fetchBlocks(lowestBlock === 0 ? "0" : lowestBlock - 1);
  };

  if (!blockData) return null;

  return (
    <div className="container">
      <InfiniteScroll
        pageStart={0}
        loadMore={() => loadMore()}
        hasMore={hasMore}
        threshold={500}
        loader={<Loader key={"spinner"} />}
      >
        <div className="row mt-4 justify-content-around">
          {Object.keys(blockData).map(blockNumber => {
            return (
              <div key={blockNumber}>
                <BlockCart
                  blockData={blockData}
                  blockNumber={blockNumber}
                  showModal={showModal}
                  raiseModalBlockSelectedData={raiseModalBlockSelectedData}
                  clickAble={true}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default BlockTable;
