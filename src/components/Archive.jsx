import React from "react";
import Item from "../components/Item.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const Archive = ({ call }) => {
  const handleClick = () => {
    axios
      .get("https://aircall-job.herokuapp.com/reset")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div id="call-list">
      <button onClick={handleClick}>Reset Archive</button>
      {call.map((each, index) => {
        if (each.is_archived) {
          return <Item call={each} key={index} />;
        }
      })}
    </div>
  );
};

export default Archive;
