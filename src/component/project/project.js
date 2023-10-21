import React, { useState } from 'react';
import "../project/project.css";

const projects = [
  { id: 1, name: 'Dự án 1', type: 'Mobile' },
  { id: 2, name: 'Dự án 2', type: 'Website' },
  { id: 3, name: 'Dự án 3', type: 'Game' },
  { id: 5, name: 'Dự án 5', type: 'Mobile' },
  { id: 6, name: 'Dự án 6', type: 'Website' },
  { id: 7, name: 'Dự án 7', type: 'Game' },
  // Thêm các dự án khác ở đây
];

function Project() {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.type === filter);

  return (
    <div>
      <div className="project-container">
        <ul>
          <li><button onClick={() => setFilter('All')}>All</button></li>
          <li><button onClick={() => setFilter('Mobile')}>Mobile</button></li>
          <li><button onClick={() => setFilter('Website')}>Website</button></li>
          <li><button onClick={() => setFilter('Game')}>Game</button></li>
        </ul>
      </div>
      <div className="personal-project">
        <ul>
          {filteredProjects.map(project => (
            <li key={project.id}>
              <a href={`/project/${project.id}`}>{project.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
