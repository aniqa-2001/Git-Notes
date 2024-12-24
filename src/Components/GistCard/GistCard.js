import React from "react";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import "./GistCardStyle.css";

const GistCard = ({ gist, onStar, onFork }) => {
  return (
    <div className="gist-card">
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
            onClick={() => onFork(gist.id)}
          />
          {gist.forksCount}
          <AiOutlineStar
            style={{ cursor: "pointer" }}
            onClick={() => onStar(gist.id)}
          />
          {gist.starsCount}
        </div>
      </div>
    </div>
  );
};

export default GistCard;
