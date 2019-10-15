import React, { useState } from "react";

const FindBlock = ({
  raiseModalBlockSelectedData,
  showModal,
  highestBlock
}) => {
  const [formData, changeData] = useState({});
  const [inputError, changeInputError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      showModal("blockSingle");
      raiseModalBlockSelectedData({ blockIndex: formData["blockInput"] });
    }
  };

  const validateForm = () => {
    const regEx = new RegExp(/^\d+$/);
    changeInputError(null);
    let success = true;
    const inputValue = formData["blockInput"];

    //validate input
    if (!regEx.test(inputValue)) {
      changeInputError("Not a number!");
      success = false;
    } else if (parseInt(inputValue) > highestBlock) {
      success = false;
      changeInputError("Invalid block number!");
    }

    return success;
  };

  const handleChange = ({ currentTarget: input }) => {
    const data = { ...formData };
    data[input.name] = input.value;
    changeData(data);
  };

  const renderButtonClass = () => {
    if (!inputError) {
      return "btn btn-secondary";
    }
    return "btn btn-danger";
  };

  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <div className="p-5">
          <form onSubmit={e => handleSubmit(e)}>
            <div className="form-group">
              <label>Block #</label>
              <input
                type="text"
                name="blockInput"
                className="form-control"
                placeholder="Enter block number"
                onChange={e => handleChange(e)}
                value={formData["blockInput"] || ""}
              />
            </div>
            {inputError && (
              <div className="alert alert-danger" role="alert">
                {inputError}
              </div>
            )}
            <button
              className={renderButtonClass()}
              type="submit"
              style={{ marginLeft: 0 }}
            >
              <span className="align-items-center" style={{ display: "flex" }}>
                <img
                  className="mr-2"
                  src="assets/img/search-block.png"
                  style={{ width: "1rem" }}
                  alt="about"
                />
                Search
              </span>
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FindBlock;
