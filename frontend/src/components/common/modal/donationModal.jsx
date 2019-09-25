import React from "react";
import QRCode from "qrcode.react";

const DonationModal = () => {
  return (
    <React.Fragment>
      <div className="text-center">
        <QRCode value="PA3VZmupxdsX5TuS1PyXZPsbbhZGT2htPz" />
        <p className="donate_addr">PA3VZmupxdsX5TuS1PyXZPsbbhZGT2htPz</p>
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
