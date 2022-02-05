import React from "react";
import Item from "../components/Item.jsx";
import { BsArchiveFill } from "react-icons/bs";
import reset from "../helpers/resetApi.js";
const Archive = ({ call }) => {
  const handleClick = () => {
    reset();
  };

  return (
    <div className="content-container">
      <div className="page-title">
        <h1 style={{ fontSize: 20, color: "rgb(42, 196, 32)" }}>
          <strong>Archived Calls</strong>
        </h1>
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
            <h2 className="message" style={{ marginTop: 20 }}>
              No Archived Calls
            </h2>
          </div>
        )}
      </div>
      <div id="call-list">
        {call.map((each, index) => {
          if (each.is_archived) {
            return <Item call={each} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default Archive;
