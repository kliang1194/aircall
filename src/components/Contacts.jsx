import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Contacts = () => {
  const [contacts, setContactsData] = useState({});

  const getContactsData = () => {
    axios
      .get("https:/aircall-job.herokuapp.com/")
      .then((res) => {
        setContactsData(res.data.contact);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <div className="content-container">
      <div className="page-title">
        <h1 style={{ fontSize: 20, color: "rgb(42, 196, 32)" }}>
          <strong>Contacts</strong>
        </h1>

        {Object.values(contacts).length ? null : (
          <div className="calls-message">
            <h2 className="message" style={{ margin: 10 }}>
              No Contacts
            </h2>
          </div>
        )}
      </div>
      <div id="call-list">
        {Object.values(contacts).length
          ? Object.entries(contacts).map(([key, value]) => {
              return (
                <div className="contact-card">
                  <div className="contact-name">
                    <span id="contact-name">
                      <strong>{key}</strong>
                    </span>
                  </div>

                  <div className="contact-email">
                    <span id="contact-email">{value}</span>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Contacts;
