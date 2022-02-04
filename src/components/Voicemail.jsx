import React from "react";
import Item from "./Item.jsx";
const Voicemail = ({ call }) => {
  return (
    <div id="call-list">
      {call.map((each, index) => {
        if (each.call_type === "voicemail") {
          return <Item call={each} key={index} />;
        }
      })}
    </div>
  );
};

export default Voicemail;
