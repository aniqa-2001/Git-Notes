import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import GistList from "./Components/GistList/GistList.js";
import DataTable from "./Components/Table/DataTable.js";
import { getData } from "./api/PublicApi.js";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();

        // Transform data to include 'keyword' field
        const transformedData = response.map((gist) => {
          const firstFile = Object.values(gist.files)[0];
          return {
            ...gist,
            user: gist.owner?.login || "Unknown",
            notebook: firstFile?.filename || "Unknown",
            keyword: firstFile?.language || "Unknown",
          };
        });

        setData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="App"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header /> {/* Render the Header component here */}
      <div style={{ flexGrow: 1 }}>
        {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}
        <GistList />
        <DataTable data={data} />
      </div>
    </div>
  );
}

export default App;
