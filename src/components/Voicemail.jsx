import React from "react";
import Item from "./Item.jsx";
const Voicemail = ({ call }) => {
  return (
    <div id="call-list">
      <div className="page-title">
        <h1 style={{ fontSize: 20, color: "rgb(42, 196, 32)" }}>
          <strong>Voicemail</strong>
        </h1>
        {call.find((each) => each.call_type === "voicemail") ? null : (
          <h2 className="message" style={{ margin: 10 }}>
            You have no voicemails!
          </h2>
        )}
      </div>
      {call.map((each, index) => {
        if (each.call_type === "voicemail") {
          return <Item call={each} key={index} />;
        }
      })}
    </div>
  );
};

export default Voicemail;
