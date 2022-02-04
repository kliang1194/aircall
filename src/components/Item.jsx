import React from "react";
import CallDetails from "./CallDetails.jsx";
import { BsArchiveFill } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BsArchive } from "react-icons/bs";
import { FiVoicemail } from "react-icons/fi";
import { HiOutlineInformationCircle } from "react-icons/hi";

import axios from "axios";
import { useEffect, useState } from "react";
const Item = ({ call }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isId, setIsId] = useState("");
  const handleClickDetail = (id) => {
    setIsOpen(!isOpen);
    setIsId(id);
  };

  const handleClickArchieve = (id, is_archieved) => {
    console.log(id, is_archieved);
    axios
      .post(`https://aircall-job.herokuapp.com/activities/${id}`, {
        is_archived: !is_archieved,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div id="individual-call">
        <div id="call-details">
          <div id="call-icon">
            <p>
              {call.direction === "inbound" && call.call_type === "answered" ? (
                <BsFillTelephoneInboundFill color="grey" size={20} />
              ) : null}
              {call.direction === "outbound" ? (
                <BsFillTelephoneOutboundFill color="grey" size={20} />
              ) : null}
              {call.call_type === "voicemail" ? (
                <FiVoicemail color="red" size={20} />
              ) : null}
            </p>
          </div>
          <div id="caller-information">
            {(() => {
              if (
                call.direction === "inbound" &&
                call.call_type === "answered"
              ) {
                return (
                  <span style={{ color: "black" }}>
                    <strong>{call.from ? call.from : "Null"}</strong>
                  </span>
                );
              } else if (
                call.direction === "inbound" &&
                call.call_type === "voicemail"
              ) {
                return (
                  <span style={{ color: "red" }}>
                    <strong>{call.from ? call.from : "Null"}</strong>
                  </span>
                );
              } else {
                return (
                  <span color="black">
                    <strong>{call.to ? call.from : "Null"}</strong>
                  </span>
                );
              }
            })()}
            <span>
              <strong>Via: </strong>
              {call.via ? call.via : "Null"}
            </span>
          </div>
          <div id="call-right">
            <span>{call.created_at.split("T")[1].slice(0, 5)}</span>
            <div className="call-actions">
              {isOpen ? (
                <HiInformationCircle
                  size={20}
                  color="grey"
                  onClick={() => {
                    handleClickDetail(call.id);
                  }}
                />
              ) : (
                <HiOutlineInformationCircle
                  size={20}
                  color="grey"
                  onClick={() => {
                    handleClickDetail(call.id);
                  }}
                />
              )}

              {call.is_archived ? (
                <BsArchiveFill
                  color="grey"
                  size={20}
                  onClick={() => {
                    handleClickArchieve(call.id, call.is_archived);
                  }}
                />
              ) : (
                <BsArchive
                  color="grey"
                  size={20}
                  onClick={() => {
                    handleClickArchieve(call.id, call.is_archived);
                  }}
                />
              )}
            </div>
          </div>
        </div>
        {isOpen && isId === call.id ? (
          <CallDetails call={call} id={call.id} />
        ) : null}
      </div>
    </div>
  );
};

export default Item;
