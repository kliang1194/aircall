import { useState, useEffect } from "react";
import axios from "axios";

export function getCallsApi() {
  const [callData, setCallData] = useState([]);

  const getCallData = () => {
    axios
      .get("https://aircall-job.herokuapp.com/activities")
      .then((res) => {
        setCallData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    getCallData();
  }, [callData]);

  return [callData];
}
