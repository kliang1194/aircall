import { useState, useEffect } from "react";
import axios from "axios";

export function useContactsData() {
  const [contacts, setContactsData] = useState({});

  const getContactsData = () => {
    axios
      .get("https:/aircall-job.herokuapp.com/")
      .then((res) => {
        setContactsData(res.data.contact);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return { contacts };
}
