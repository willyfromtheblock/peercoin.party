import React from "react";
import QRCode from "qrcode.react";

const DonationModal = () => {
  return (
    <React.Fragment>
      <div className="text-center">
        <QRCode value="PPXMXETHJE3E8k6s8vmpDC18b7y5eKAudS" />
        <p className="donate_addr">PPXMXETHJE3E8k6s8vmpDC18b7y5eKAudS</p>
        <img
          src="assets/img/thumbsup.png"
          alt="thumbs-up"
          style={{ width: "1rem" }}
        />
      </div>
    </React.Fragment>
  );
};

export default DonationModal;
