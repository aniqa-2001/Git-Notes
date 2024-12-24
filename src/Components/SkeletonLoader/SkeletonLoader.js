import React from "react";
import "./SkeletonLoader.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      <h2 className="skeleton-title">Public Gists</h2>
      <div className="skeleton-list">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="skeleton-item"></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
