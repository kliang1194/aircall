import React from "react";
import { IconContext } from "react-icons";
import { BsFillPersonFill } from "react-icons/bs";
import { BiDialpadAlt } from "react-icons/bi";
import { BsArchiveFill } from "react-icons/bs";
import { FiVoicemail } from "react-icons/fi";
import { RiHome2Fill } from "react-icons/ri";

const Nav = ({ screen, setScreen }) => {
  return (
    <footer>
      <span className="nav-icons">
        <IconContext.Provider
          value={{ color: "grey", size: 30, style: { cursor: "pointer" } }}
        >
          <RiHome2Fill
            color={screen === "Home" ? "rgb(42,196,32)" : "grey"}
            className="nav-icon"
            onClick={() => {
              setScreen("Home");
            }}
          />
          <BsFillPersonFill
            color={screen === "Address Book" ? "rgb(42,196,32)k" : "grey"}
            className="nav-icon"
            onClick={() => console.log("Address Book")}
          />
          <BiDialpadAlt
            color={screen === "DialPad" ? "rgb(42,196,32)" : "grey"}
            className="nav-icon"
            onClick={() => setScreen("DialPad")}
          />

          <BsArchiveFill
            color={screen === "Archive" ? "rgb(42,196,32)" : "grey"}
            className="nav-icon"
            onClick={() => {
              setScreen("Archive");
            }}
          />
          <FiVoicemail
            color={screen === "Voicemail" ? "rgb(42,196,32)" : "grey"}
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
