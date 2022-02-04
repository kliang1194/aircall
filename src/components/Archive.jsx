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
      <div class="page-title">
        <h1 style={{ fontSize: 20, color: "rgb(42, 196, 32)" }}>
          <strong>Archived Calls</strong>
        </h1>
      </div>
      {call.map((each, index) => {
        if (each.is_archived) {
          return <Item call={each} key={index} />;
        }
      })}

      {call.find((each) => each.is_archived) ? (
        <div className="reset-archive">
          <button
            id="reset-archive"
            style={{ margin: 10 }}
            onClick={handleClick}
          >
            Reset Archive
          </button>
        </div>
      ) : (
        <div className="reset-archive">
          <span>You have no archived calls!</span>
        </div>
      )}
    </div>
  );
};

export default Archive;
