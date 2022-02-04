import React from "react";
import Item from "./Item.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const CallList = ({ call }) => {
  return (
    <div id="call-list">
      {call.map((each, index) => {
        if (!each.is_archived) {
          return <Item call={each} key={index} />;
        }
      })}
    </div>
  );
};

export default CallList;
