import React, { useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

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
    <div className="content-container">
      <div className="page-title">
        <h1 style={{ fontSize: 20, color: "rgb(42, 196, 32)" }}>
          <strong>Dial Pad</strong>
        </h1>
      </div>
      <div id="call-list">
        <div>
          <h1>{number}</h1>
          <RiDeleteBack2Fill
            className="dial-pad-icons"
            size={40}
            color="grey"
            onClick={() => {
              setNumber(number.substring(0, number.length - 1));
            }}
          />
        </div>
        <div>{renderKeyPad()}</div>
      </div>
    </div>
  );
};

export default DialPad;
