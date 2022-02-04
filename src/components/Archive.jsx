import React from "react";
import Item from "../components/Item.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsArchiveFill } from "react-icons/bs";

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
    <div className="content-container">
      <div className="page-title">
        <h1 style={{ fontSize: 20, color: "rgb(42, 196, 32)" }}>
          <strong>Archived Calls</strong>
        </h1>
      </div>
      <div id="call-list">
        {call.map((each, index) => {
          if (each.is_archived) {
            return <Item call={each} key={index} />;
          }
        })}
        {call.find((each) => each.is_archived) ? (
          <div className="calls-message">
            <button
              className="archive-button"
              style={{ margin: 10, color: "rgb(42, 196, 32)" }}
              onClick={handleClick}
            >
              <BsArchiveFill style={{ paddingRight: 5, marginBottom: -1.5 }} />
              Remove All From Archive
            </button>
          </div>
        ) : (
          <div className="calls-message">
            <h2 className="message">No Archived Calls</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Archive;
