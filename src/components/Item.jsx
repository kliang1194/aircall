import React from "react";
import moment from "moment";
import CallDetails from "./CallDetails.jsx";
import { BsArchiveFill } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BsArchive } from "react-icons/bs";
import { FiVoicemail } from "react-icons/fi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { useState } from "react";
import archiveApi from "../helpers/archiveApi.js";

const Item = ({ call }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isId, setIsId] = useState("");

  const handleClickDetail = (id) => {
    setIsOpen(!isOpen);
    setIsId(id);
  };

  const handleClickArchive = (id, is_archived) => {
    archiveApi(id, !is_archived);
  };

  return (
    <div>
      <div className="individual-call">
        <div id="call-details">
          <div id="call-icon">
            <p>
              {call.direction === "inbound" && call.call_type === "answered" ? (
                <BsFillTelephoneInboundFill color="grey" size={20} />
              ) : null}
              {call.direction === "inbound" && call.call_type === "missed" ? (
                <BsFillTelephoneInboundFill color="red" size={20} />
              ) : null}
              {call.direction === "outbound" &&
              call.call_type === "answered" ? (
                <BsFillTelephoneOutboundFill color="grey" size={20} />
              ) : null}
              {call.direction === "outbound" && call.call_type === "missed" ? (
                <BsFillTelephoneOutboundFill color="red" size={20} />
              ) : null}
              {call.call_type === "voicemail" ? (
                <FiVoicemail color="red" size={20} />
              ) : null}
            </p>
          </div>
          <div id="caller-information">
            <span>{moment(call.created_at).format("MMMM DD, YYYY h:mmA")}</span>
            {(() => {
              if (
                call.direction === "inbound" &&
                call.call_type === "answered"
              ) {
                return (
                  <span style={{ color: "black" }}>
                    <strong>{call.from ? call.from : "Unknown"}</strong>
                  </span>
                );
              } else if (
                call.direction === "inbound" &&
                call.call_type === "voicemail"
              ) {
                return (
                  <span style={{ color: "red" }}>
                    <strong>{call.from ? call.from : "Unknown"}</strong>
                  </span>
                );
              } else if (
                call.direction === "inbound" &&
                call.call_type === "missed"
              ) {
                return (
                  <span style={{ color: "red" }}>
                    <strong>{call.from ? call.from : "Unknown"}</strong>
                  </span>
                );
              } else if (
                call.direction === "outbound" &&
                call.call_type === "missed"
              ) {
                return (
                  <span style={{ color: "red" }}>
                    <strong>{call.to ? call.to : "Unknown"}</strong>
                  </span>
                );
              } else {
                return (
                  <span color="black">
                    <strong>{call.to ? call.to : "Unknown"}</strong>
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
            <div className="call-actions">
              {isOpen ? (
                <HiInformationCircle
                  size={20}
                  color="grey"
                  className="action-icon"
                  onClick={() => {
                    handleClickDetail(call.id);
                  }}
                />
              ) : (
                <HiOutlineInformationCircle
                  size={20}
                  color="grey"
                  className="action-icon"
                  onClick={() => {
                    handleClickDetail(call.id);
                  }}
                />
              )}

              {call.is_archived ? (
                <BsArchiveFill
                  color="grey"
                  className="action-icon"
                  size={20}
                  onClick={() => {
                    handleClickArchive(call.id, call.is_archived);
                  }}
                />
              ) : (
                <BsArchive
                  color="grey"
                  className="action-icon"
                  size={20}
                  onClick={() => {
                    handleClickArchive(call.id, call.is_archived);
                  }}
                />
              )}
            </div>
          </div>
        </div>
        {isOpen && isId === call.id ? <CallDetails call={call} /> : null}
      </div>
    </div>
  );
};

export default Item;
