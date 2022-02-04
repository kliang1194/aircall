import React from "react";
import { IconContext } from "react-icons";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BiDialpadAlt } from "react-icons/bi";
import { BsArchiveFill } from "react-icons/bs";
import { FiVoicemail } from "react-icons/fi";

const Nav = ({ screen, setScreen }) => {
  return (
    <footer>
      <span className="nav-icons">
        <IconContext.Provider
          value={{ color: "grey", size: 30, style: { cursor: "pointer" } }}
        >
          <BsFillTelephoneFill
            color={screen === "Home" ? "black" : "grey"}
            className="nav-icon"
            onClick={() => {
              setScreen("Home");
            }}
          />
          <BsFillPersonFill
            color={screen === "Address Book" ? "black" : "grey"}
            className="nav-icon"
            onClick={() => console.log("Address Book")}
          />
          <BiDialpadAlt
            color={screen === "DialPad" ? "black" : "grey"}
            className="nav-icon"
            onClick={() => setScreen("DialPad")}
          />

          <BsArchiveFill
            color={screen === "Archive" ? "black" : "grey"}
            className="nav-icon"
            onClick={() => {
              setScreen("Archive");
            }}
          />
          <FiVoicemail
            color={screen === "Voicemail" ? "black" : "grey"}
            className="nav-icon"
            onClick={() => {
              setScreen("Voicemail");
            }}
          />
        </IconContext.Provider>
      </span>
    </footer>
  );
};

export default Nav;
