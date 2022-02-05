import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Header.jsx";
import CallList from "./components/CallList.jsx";
import Contacts from "./components/Contacts.jsx";
import Navigation from "./components/Nav.jsx";
import Archive from "./components/Archive.jsx";
import Voicemail from "./components/Voicemail.jsx";
import DialPad from "./components/DialPad.jsx";
import { getCallsApi } from "./hooks/getCallsApi.js";

const App = () => {
  const { callData } = getCallsApi();
  const [screen, setScreen] = useState("Home");

  return (
    <div className="container">
      <Header />
      {screen === "Home" && <CallList call={callData} />}
      {screen === "Contacts" && <Contacts />}
      {screen === "Archive" && <Archive call={callData} />}
      {screen === "Voicemail" && <Voicemail call={callData} />}
      {screen === "DialPad" && <DialPad />}
      <Navigation setScreen={setScreen} screen={screen} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
