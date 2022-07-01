import React from 'react'
import './styleProject.css'
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";

const ProjectHome = (props) => {
  return (
    <div className="project-card">
      <div className="box-img"><img src={props.imgsrc} alt="" /></div>
      <div className="pro-details">
        <h3 className='project-title'>{props.title}</h3>
        <p className="project-description"> {props.text}</p>
        <div className="btn-project">
          <a href={props.view} target="_blank"> <TbWorld size={20} style={{ color: '#fff', verticalAlign: 'middle', marginRight: "0.5rem" }} /> website</a>
          <a className='outline' href={props.source} target="_blank"> <FaGithub size={18} style={{ color: '#fff', verticalAlign: 'middle', marginRight: "0.5rem" }} /> github</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectHome
