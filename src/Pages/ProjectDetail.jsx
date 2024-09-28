import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './projects.json'; 
import './../Pages_css/ProjectDetail.css'; 

const ProjectDetail = () => {
  const { id } = useParams(); 
  const project = projects.find(p => p.project_id === id);

  if (!project) {
    return <div>Проект не найден</div>; 
  }

  return (
    <div className="project-detail">
      <h1>{project.project_name}</h1>
      <p><strong>Команда:</strong> {project.team_name}</p>
      <p><strong>Руководитель:</strong> {project.lead_name}</p>
      <p><strong>Описание:</strong> {project.description}</p>
      <p><strong>Прогресс:</strong> {project.progress}%</p>
      <p><strong>Начало:</strong> {project.begin}</p>
      <p><strong>Окончание:</strong> {project.end}</p>

      <h2>Задачи</h2>
      {project.tasks.length === 0 ? (
        <p>Нет задач для данного проекта.</p>
      ) : (
        <ul>
          {project.tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.name}:</strong> 
              {task.description} 
              (Прогресс: {task.progress}%)
              <button className='SubTasks' onClick={
                () => setSubTasksVisible(index,!subTasksVisible)
              }>
                Показать подзадачи
              </button>
            </li>
          ))}
          
        </ul>
      )}
      
    </div>
  );
};

export default ProjectDetail;