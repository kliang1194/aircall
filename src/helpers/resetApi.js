import axios from "axios";

const reset = () => {
  axios
    .get("https://aircall-job.herokuapp.com/reset")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default reset;
