import React, { useState } from "react";
import Header from "./header";
import Hero from "./hero";
import TableSwitch from "./blockTable/tableSwitch";
import Footer from "./footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalWrapper from "./common/modal/modal";

const Main = () => {
  const [modalStep, setModalStep] = useState(0);
  const [modalBlockSelectedData, setModalBlockSelectedData] = useState({});
  const [lowestBlock, setLowestBlock] = useState(0);
  const [highestBlock, setHighestBlock] = useState(0);
  const [searchAddress, setSearchAddress] = useState(undefined);

  return (
    <React.Fragment>
      <Header />
      <ToastContainer />
      <div className="container">
        <ModalWrapper
          modalBlockSelectedData={modalBlockSelectedData}
          raiseModalBlockSelectedData={setModalBlockSelectedData}
          modalStep={modalStep}
          showModal={setModalStep}
          hideModal={() => setModalStep(0)}
          highestBlock={highestBlock}
          raiseSearchAddress={setSearchAddress}
        />
        <Hero showModal={x => setModalStep(x)} />
        <hr className="col-xs-12" />
        <TableSwitch
          lowestBlock={lowestBlock}
          raiseLowestBlock={setLowestBlock}
          raiseHighestBlock={setHighestBlock}
          raiseModalBlockSelectedData={setModalBlockSelectedData}
          showModal={setModalStep}
          searchAddress={searchAddress}
        />
        <hr className="col-xs-12" />
      </div>
      <Footer showModal={() => setModalStep("donation")} />
    </React.Fragment>
  );
};

export default Main;
