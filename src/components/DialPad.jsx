import React, { useState } from "react";

const DialPad = () => {
  const [number, setNumber] = useState("");
  const renderKeyPad = () => {
    const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    return (
      <div>
        {array.map((each, index) => {
          return (
            <button
              onClick={() => {
                setNumber(number + each);
              }}
              key={index}
            >
              {each}
            </button>
          );
        })}
      </div>
    );
  };
  return (
    <div id="call-list">
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            setNumber(number.substring(0, number.length - 1));
          }}
        >
          Del
        </button>
      </div>
      <div>{renderKeyPad()}</div>
    </div>
  );
};

export default DialPad;
