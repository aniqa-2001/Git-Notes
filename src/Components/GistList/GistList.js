import React, { useState, useEffect } from "react";
import "./GistList.css";
import { getData } from "../../api/PublicApi";

const GistList = () => {
  const [gists, setGists] = useState([]);
  const [error, setError] = useState(null);

  const getGistData = async () => {
    try {
      const data = await getData();
      setGists(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getGistData();
  }, []);
};

export default GistList;
