import React from "react";
import Item from "./Item.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsArchive } from "react-icons/bs";

const CallList = ({ call }) => {
  const archiveAll = () => {
    call.map((each) => {
      let id = each.id;
      axios
        .post(`https://aircall-job.herokuapp.com/activities/${id}`, {
          is_archived: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div className="content-container">
      <div className="page-title">
        <h1 style={{ fontSize: 20, color: "rgb(42, 196, 32)" }}>
          <strong>Activity Feed</strong>
        </h1>
      </div>
      <div id="call-list">
        {call.map((each, index) => {
          if (!each.is_archived) {
            return <Item call={each} key={index} />;
          }
        })}
        {call.find((each) => !each.is_archived) ? (
          <div className="calls-message">
            <button
              class="archive-button"
              style={{ margin: 10, color: "rgb(42, 196, 32)" }}
              onClick={archiveAll}
            >
              <BsArchive style={{ paddingRight: 5, marginBottom: -1.5 }} />
              Archive All
            </button>
          </div>
        ) : (
          <div className="calls-message">
            <h2 className="message">No Activity</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallList;
