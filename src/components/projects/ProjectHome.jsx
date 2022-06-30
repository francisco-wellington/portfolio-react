import React from 'react'
import './styleProject.css'

const ProjectHome = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="" />
      <h3 className='project-title'>{props.title}</h3>
      <div className="pro-details">
        <p className="project-description"> {props.text}</p>
        <div className="btn-project">
          <a href={props.view} target="_blank">View</a>
          <a href={props.source} target="_blank">Source</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectHome
