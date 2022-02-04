import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Header.jsx";
import CallList from "./components/CallList.jsx";
import CallDetails from "./components/CallDetails.jsx";
import Navigation from "./components/Nav.jsx";
import Archive from "./components/Archive.jsx";
import Voicemail from "./components/Voicemail.jsx";
import DialPad from "./components/DialPad.jsx";
const App = () => {
  const [screen, setScreen] = useState("Home");
  const [callData, setCallData] = useState([]);

  const getCallData = () => {
    axios
      .get("https:/aircall-job.herokuapp.com/activities")
      .then((res) => {
        setCallData(res.data);
      })
      .catch((err) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getCallData();
  }, [callData]);

  return (
    <div className="container">
      <Header />
      {screen === "Home" && <CallList call={callData} />}
      {screen === "Archive" && <Archive call={callData} />}
      {screen === "Voicemail" && <Voicemail call={callData} />}
      {screen === "DialPad" && <DialPad />}

      <Navigation setScreen={setScreen} screen={screen} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
