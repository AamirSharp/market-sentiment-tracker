import React from "react";

export default function NewsTable({ articles, onReadMore }) {
  return (
    <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Published At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article) => (
          <tr key={article.id}>
            <td>{article.title}</td>
            <td>{new Date(article.published_at).toLocaleString()}</td>
            <td>
              <button onClick={() => onReadMore(article)}>Read More</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
