
import React from 'react';
import "../project/project.css";
// Tạo một đối tượng đại diện cho thư mục assets
function project() {
  return (
    <div className="project-container">
    <ul>
      <li><a href="/">All</a></li>
      <li><a href="/about">Mobile</a></li>
      <li><a href="/products">Website</a></li>
      <li><a href="/contact">Game</a></li>
    </ul>
  </div>

  );
}
export default project;
