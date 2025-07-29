import React from "react";

export default function NewsModal({ isOpen, onClose, article }) {
  if (!isOpen || !article) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{ backgroundColor: "white", padding: 20, borderRadius: 8, maxWidth: 600 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read full article
        </a>
        <br />
        <button onClick={onClose} style={{ marginTop: 10 }}>
          Close
        </button>
      </div>
    </div>
  );
}
