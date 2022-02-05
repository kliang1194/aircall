import React, { useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { MdCall } from "react-icons/md";

const DialPad = () => {
  const [number, setNumber] = useState("");

  const renderKeyPad = () => {
    const array = [
      "1",
      "2.A B C",
      "3.D E F",
      "4.G H I",
      "5.J K L",
      "6.M N O",
      "7.P Q R S",
      "8.T U V",
      "9.W X Y Z",
      "*",
      "0.+",
      "#",
    ];

    return (
      <div className="dial-pad">
        {array.map((each, index) => {
          const digit = each.split(".")[0];
          const letters = each.split(".")[1];
          return (
            <button
              className="dial-pad"
              onClick={() => {
                setNumber(number + digit);
              }}
              key={index}
            >
              <h1 style={{ fontSize: 20, color: "black" }} className="dial-pad">
                <strong>{digit}</strong>
              </h1>
              <h5 className="dial-pad" style={{ color: "grey" }}>
                {letters}
              </h5>
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
      <div id="dial-list">
        <span
          className="numbers-dialed"
          style={{ fontSize: 40, color: "rgb(42, 196, 32)" }}
        >
          {number}
        </span>

        <div className="dial-pad-container">{renderKeyPad()}</div>
        <div className="dial-icons">
          <MdCall
            className="dial-pad-icons"
            size={50}
            style={{ marginRight: 62 }}
            onClick={() => {
              setNumber(number.substring(0, number.length - 1));
            }}
          />

          <RiDeleteBack2Fill
            className="dial-pad-icons"
            size={50}
            style={{ marginRight: 53 }}
            onClick={() => {
              setNumber(number.substring(0, number.length - 1));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DialPad;
