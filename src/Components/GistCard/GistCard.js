import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import "./GistCardStyle.css";
import { starGist } from "../../api/StarsGist";
import { forkGist } from "../../api/ForksGist";

const GistCard = ({ gist, onUpdate }) => {
  const navigate = useNavigate();

  const handleStar = async (gistId) => {
    const success = await starGist(gistId);
    if (success) {
      alert("Gist starred successfully!");
      if (onUpdate) onUpdate(); // Notify parent to refresh data
    } else {
      alert("Failed to star the gist.");
    }
  };

  const handleFork = async (gistId) => {
    const success = await forkGist(gistId);
    if (success) {
      alert("Gist forked successfully!");
      if (onUpdate) onUpdate(); // Notify parent to refresh data
    } else {
      alert("Failed to fork the gist.");
    }
  };

  return (
    <div className="gist-card" onClick={() => navigate(`/gist/${gist.id}`)}>
      <pre className="gist-json">{gist.content.slice(0, 200)}...</pre>
      <div className="gist-info">
        <img
          src={gist.owner?.avatar_url || ""}
          alt="Avatar"
          className="avatar"
        />
        <div className="gist-meta">
          <p>
            {gist.user}/<strong> {gist.notebook} </strong>
          </p>
          <p>Language: {gist.keyword}</p>
          <p>Created {new Date(gist.created_at).toLocaleString()}</p>
        </div>
        <div className="gist-actions">
          <AiOutlineFork
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent click handler
              handleFork(gist.id);
            }}
          />
          {gist.forksCount}
          <AiOutlineStar
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent click handler
              handleStar(gist.id);
            }}
          />
          {gist.starsCount}
        </div>
      </div>
    </div>
  );
};

export default GistCard;
