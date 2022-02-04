import React from "react";
import axios from "axios";
const CallDetails = (props) => {
  const [callDetails, setCallDetails] = React.useState({});

  const { id, call } = props;

  // React.useEffect(() => {
  //   axios
  //     .get(`https://aircall-job.herokuapp.com/activities/${id}`)

  //     .then((res) => {
  //       console.log("res.data", res.data);
  //       setCallDetails(res.data);
  //     })

  //     .catch((err) => console.log("err", err));
  // }, [id]);

  return (
    <div id="details">
      <span>
        <strong>Time of Call: </strong>
        {`${call.created_at.slice(0, 10)}, ${call.created_at
          .split("T")[1]
          .slice(0, 5)}`}
      </span>
      <span>
        <strong>From: </strong>
        {call.from ? call.from : "Null"}
      </span>
      <span>
        <strong>To: </strong>
        {call.to ? call.to : "Null"}
      </span>
      <span>
        <strong>Call placed via: </strong>
        {call.via}
      </span>
      <span>
        <strong>Duration: </strong>
        {call.duration} seconds
      </span>
      <span>
        <strong>Call Type: </strong>
        {`${call.call_type.charAt(0).toUpperCase()}${call.call_type.slice(1)}`}
      </span>
    </div>
  );
};

export default CallDetails;
