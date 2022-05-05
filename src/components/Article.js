import React from "react";

export default function Article({ title, desc }) {
  return (
    <div className="article-container">
      <div className="article-title">{title}</div>
      <div className="article-desc">{desc}</div>
      <div className="article-button">Read More</div>
    </div>
  );
}
