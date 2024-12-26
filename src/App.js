import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.js";
import GistList from "./Components/GistList/GistList.js";
import SkeletonLoader from "./Components/SkeletonLoader/SkeletonLoader.js";
import { getData } from "./api/PublicApi.js";
import { transformData } from "./Components/Table/DataTable";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        const transformedData = transformData(response);
        setData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <SkeletonLoader />
              ) : error ? (
                <div className="error-message">{error}</div>
              ) : (
                <GistList data={data} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
