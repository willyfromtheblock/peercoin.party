import React, { useState, useEffect } from "react";
import http from "../../services/httpService";
import InfiniteScroll from "react-infinite-scroller";
import BlockCart from "../common/blockCart";
import Loader from "../common/loader";

const BlockTableAddress = ({
  raiseModalBlockSelectedData,
  showModal,
  lowestBlock,
  raiseLowestBlock,
  searchAddress
}) => {
  const [blockData, setBlockData] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [hasMore, setMore] = useState(true);

  useEffect(() => {
    if (!initialLoad) {
      setInitialLoad(true);
      setBlockData([]);
      setCurrentScroll(0);
      fetchBlocks(0);
    }
  }, [searchAddress]);

  const fetchBlocks = async scroll => {
    let newScroll = scroll;
    if (initialLoad) {
      const lenResult = await http.get("len.php?address=" + searchAddress);
      raiseLowestBlock(lenResult.data.length);
      setInitialLoad(false);
    } else {
      if (scroll + 15 <= lowestBlock - 1) {
        newScroll += 15;
      } else {
        setMore(false);
      }
    }
    const result = await http.get(
      "blocks.php?address=" + searchAddress + "&scroll=" + newScroll
    );
    const mergedData = blockData.concat(result.data);
    setBlockData(mergedData);
    setCurrentScroll(newScroll);
  };

  const loadMore = () => {
    fetchBlocks(currentScroll);
  };

  if (!blockData) return null;

  return (
    <div className="container">
      <h3 className="text-center text-break"> {searchAddress} </h3>
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

export default BlockTableAddress;
