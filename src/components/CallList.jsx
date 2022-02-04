import React from "react";
import Item from "./Item.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const CallList = ({ call }) => {
  return (
    <div id="call-list">
      <div class="page-title">
        <h1 style={{ fontSize: 20, color: "rgb(42, 196, 32)" }}>
          <strong>Activity Feed</strong>
        </h1>
      </div>
      {call.map((each, index) => {
        if (!each.is_archived) {
          return <Item call={each} key={index} />;
        }
      })}
    </div>
  );
};

export default CallList;
