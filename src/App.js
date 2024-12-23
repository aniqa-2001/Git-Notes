import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import GistList from "./Components/GistList/GistList.js";
import { getData } from "./api/PublicApi.js";
import { transformData } from "./Components/Table/DataTable";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        const transformedData = transformData(response); // Use the imported function
        setData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App" style={{ height: "100vh" }}>
      <Header /> {/* Render the Header component here */}
      {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}
      <GistList data={data} error={error} />
    </div>
  );
}

export default App;
