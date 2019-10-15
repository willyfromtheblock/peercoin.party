import React from "react";

const BlockButtonBar = ({ hash, blockIndex }) => {
  const downloadSVG = () => {
    const allSVGs = document.getElementsByTagName("svg");
    for (let svgElem of allSVGs) {
      if (hash + "pretty" === svgElem.getAttribute("data-jdenticon-value")) {
        //get svg source.
        const serializer = new XMLSerializer();
        let source = serializer.serializeToString(svgElem);

        //add name spaces.
        if (
          // eslint-disable-next-line
          !source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)
        ) {
          source = source.replace(
            /^<svg/,
            '<svg xmlns="http://www.w3.org/2000/svg"'
          );
        }
        // eslint-disable-next-line
        if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
          source = source.replace(
            /^<svg/,
            '<svg xmlns:xlink="http://www.w3.org/1999/xlink"'
          );
        }

        //add xml declaration
        source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

        //convert svg source to URI data scheme.
        const url =
          "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

        //set url value to a element's href attribute.
        const element = document.createElement("a");
        element.setAttribute("href", url);
        element.setAttribute("download", blockIndex + ".svg");
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

        break;
      }
    }
  };

  return (
    <div className="row mt-5 justify-content-center">
      <div className="col-lg-4 col-12 text-center">
        <button className="btn btn-secondary" onClick={() => downloadSVG()}>
          <span
            className="align-items-center"
            style={{ display: "flex" }}
            data-toggle="tooltip"
            data-placement="bottom"
            title="SVGs are scalable vector images. They're very cool."
          >
            <img
              className="mr-2"
              src="assets/img/download.png"
              style={{ width: "1rem" }}
              alt="download"
            />
            Download SVG
          </span>
        </button>
        <span className="text-muted">
          <br />
          scalable vector image
        </span>
      </div>
      <div className="col-lg-4 col-12 text-center">
        <div className="btn btn-secondary">
          <a
            className="footer-link"
            href={`https://chainz.cryptoid.info/ppc/block.dws?${blockIndex}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="align-items-center" style={{ display: "flex" }}>
              <img
                className="mr-2"
                src="assets/img/search.png"
                style={{ width: "1rem" }}
                alt="search"
              />
              See in Block Explorer
            </span>
          </a>
        </div>
        <span className="text-muted">
          <br />
          opens in new tab
        </span>
      </div>
    </div>
  );
};

export default BlockButtonBar;
