import React from "react";
import axios from "axios";
const CallDetails = ({ id }) => {
  const [callDetails, setCallDetails] = React.useState({});

  React.useEffect(() => {
    axios
      .get(`https://aircall-job.herokuapp.com/activities/${id}`)

      .then((res) => {
        console.log(res.data);
        setCallDetails(res.data);
      })
      .catch((err) => console.log("err", err));
  }, [id]);
  return (
    <div id="details">
      {/* <h1>
        <strong>Call Details</strong>
      </h1> */}
      <span>
        <strong>Time of Call: </strong> {callDetails.created_at}
      </span>
      <span>
        <strong>From: </strong>
        {callDetails.from ? callDetails.from : "Null"}
      </span>
      <span>
        <strong>To: </strong>
        {callDetails.to ? callDetails.to : "Null"}
      </span>
      <span>
        <strong>Call placed via: </strong>
        {callDetails.via}
      </span>
      <span>
        <strong>Duration: </strong>
        {callDetails.duration}
      </span>
      <span>
        <strong>Call Type: </strong>
        {callDetails.call_type}
      </span>
    </div>
  );
};

export default CallDetails;
