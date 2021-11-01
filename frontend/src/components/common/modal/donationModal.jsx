import React from "react";
import QRCode from "qrcode.react";

const DonationModal = () => {
  return (
    <React.Fragment>
      <div className="text-center">
        <QRCode value="PM7jjBUPjzpkZy1UZtD7mvmHoXJ2BGvbx9" />
        <p className="donate_addr">PM7jjBUPjzpkZy1UZtD7mvmHoXJ2BGvbx9</p>
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
