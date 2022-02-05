import React from "react";
import { useContactsData } from "../hooks/useContactsData.js";

const Contacts = () => {
  const { contacts } = useContactsData();

  return (
    <div className="content-container">
      <div className="page-title">
        <h1 style={{ fontSize: 20, color: "rgb(42, 196, 32)" }}>
          <strong>Contacts</strong>
        </h1>
      </div>
      <div id="call-list">
        {Object.values(contacts).length
          ? Object.entries(contacts).map(([key, value]) => {
              return (
                <div className="contact-card" key={key}>
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
