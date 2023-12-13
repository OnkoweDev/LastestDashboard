import React from "react";

const OutputNumber = ({outputNumber, setOutputNumber}) => {
  // state to keep track of number of output
//   const [outputNumber, setOutputNumber] = useState(1);

  // handle decreament function
  const handleDecreament = (e) => {
    e.preventDefault();
    outputNumber === 1
      ? setOutputNumber(1)
      : setOutputNumber((prev) => prev - 1);
  };
  // handle increament function
  const handleIncreament = (e) => {
    e.preventDefault();
    setOutputNumber((prev) => prev + 1);
  };
  return (
    <div>
      <p className="product-p">Number of Output*</p>
      <div
        className="number-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          margin: "10px 0",
        }}
      >
        <button
          className="decrease count-btn"
          onClick={handleDecreament}
          style={{
            color: "var(--black)",
            fontSize: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            cursor: "pointer",
            fontWeight: "400",
          }}
        >
          {" "}
          &lt;{" "}
        </button>
        <p
          className="value"
          style={{
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "30px",
            letterSpacing: "0.05px",
          }}
        >
          {" "}
          {outputNumber}{" "}
        </p>
        <button
          className="increase count-btn"
          onClick={handleIncreament}
          style={{
            color: "var(--black)",
            fontSize: "20px",
            border: "none",
            outline: "none",
            background: "transparent",
            cursor: "pointer",
            fontWeight: "400",
          }}
        >
          {" "}
          &gt;{" "}
        </button>
      </div>
    </div>
  );
};

export default OutputNumber;
