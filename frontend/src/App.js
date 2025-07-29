import React, { useState, useEffect } from 'react';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
  fetch("http://localhost:8000/news")
    .then(res => res.json())
    .then(data => {
      console.log("Fetched articles:", data);  // <-- Add this log
      setArticles(data);
    })
    .catch(err => console.error("Error fetching articles:", err));
}, []);


  return (
    <div style={{ padding: 20 }}>
      <h1>News Articles</h1>
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Published At</th>
            <th>Description</th>
            <th>Read More</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>{new Date(article.published_at).toLocaleDateString()}</td>
              <td>{article.description?.slice(0, 50)}...</td>
              <td>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read original
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
