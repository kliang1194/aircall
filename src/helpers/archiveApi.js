import axios from "axios";

const archiveApi = (id, state) => {
  axios
    .post(`https://aircall-job.herokuapp.com/activities/${id}`, {
      is_archived: state,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default archiveApi;
