import React from "react";
import axios from "axios";
import moment from "moment";
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
        {moment(call.created_at).format("MMMM DD, YYYY h:mmA")}
      </span>
      <span>
        <strong>From: </strong>
        {call.from ? call.from : "Unknown"}
      </span>
      <span>
        <strong>To: </strong>
        {call.to ? call.to : "Unknown"}
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
