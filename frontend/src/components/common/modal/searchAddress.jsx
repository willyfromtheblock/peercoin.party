import React, { useState } from "react";
import http from "../../../services/httpService";
import Loader from "../../common/loader";

const SearchAddress = ({ showModal, raiseSearchAddress }) => {
  const [formData, changeData] = useState({});
  const [inputError, changeInputError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    if (await validateForm()) {
      showModal(0);
      raiseSearchAddress(formData["addressInput"]);
    }
  };

  const validateForm = async () => {
    setLoading(true);
    changeInputError(null);
    let success = true;
    const inputValue = formData["addressInput"];
    //validate input
    const { data } = await http.get("len.php?address=" + inputValue);
    if (data.length === 0) {
      changeInputError("Address not found.");
      success = false;
    }
    setLoading(false);
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
              <label>Address </label>
              <input
                type="text"
                name="addressInput"
                className="form-control"
                placeholder="Enter PPC address"
                onChange={e => handleChange(e)}
                value={formData["addressInput"] || ""}
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
            {loading && <Loader />}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchAddress;
