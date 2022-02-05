import React from "react";
import Item from "./Item.jsx";
import { BsArchive } from "react-icons/bs";
import archiveApi from "../helpers/archiveApi.js";
const CallList = ({ call }) => {
  const handleClick = () => {
    call.map((each) => {
      let id = each.id;
      archiveApi(id, true);
    });
  };

  return (
    <div className="content-container">
      <div className="page-title">
        <h1 style={{ fontSize: 20, color: "rgb(42, 196, 32)" }}>
          <strong>Activity Feed</strong>
        </h1>
        {call.find((each) => !each.is_archived) ? (
          <div className="calls-message">
            <button
              className="archive-button"
              style={{ margin: 10, color: "rgb(42, 196, 32)" }}
              onClick={handleClick}
            >
              <BsArchive style={{ paddingRight: 5, marginBottom: -1.5 }} />
              Archive All
            </button>
          </div>
        ) : (
          <div className="calls-message">
            <h2 className="message" style={{ marginTop: 20 }}>
              No Activity
            </h2>
          </div>
        )}
      </div>
      <div id="call-list">
        {call.map((each, index) => {
          if (!each.is_archived) {
            return <Item call={each} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default CallList;
