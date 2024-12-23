import React, { useState } from "react";
import GistCard from "../GistCard/GistCard.js"; // Import your GistCard component
import "./GistList.css"; // Add styles for grid and list views
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";

const GistList = ({ data }) => {
  const [view, setView] = useState("list"); // 'list' or 'grid'

  const toggleView = (viewType) => {
    setView(viewType);
  };

  return (
    <div className="gist-container">
      <div className="view-toggle">
        <button
          className={view === "list" ? "active" : ""}
          onClick={() => toggleView("list")}
        >
          List View
        </button>
        <button
          className={view === "grid" ? "active" : ""}
          onClick={() => toggleView("grid")}
        >
          Grid View
        </button>
      </div>

      {view === "list" ? (
        <table className="gist-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Notebook Name</th>
              <th>Keyword</th>
              <th>Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((gist) => (
              <tr key={gist.id}>
                <td>
                  <img
                    src={gist.owner?.avatar_url || ""}
                    alt="Avatar"
                    className="table-avatar"
                  />
                  {gist.user}
                </td>
                <td>{gist.notebook}</td>
                <td>
                  <button className="keyword-button">
                    {gist.keyword || "No Keyword"}
                  </button>
                </td>
                <td>{new Date(gist.updated_at).toLocaleString()}</td>
                <td>
                  <AiOutlineFork />
                  <AiOutlineStar />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="gist-grid">
          {data.map((gist) => (
            <GistCard key={gist.id} gist={gist} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GistList;
