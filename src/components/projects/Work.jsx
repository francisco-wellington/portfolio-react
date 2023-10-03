import React from 'react'
import './styleProject.css'
import WorkCardData from './WorkCardData'
import ProjectHome from './ProjectHome'

const Work = () => {
  return (
    <div id='project' className='work-container'>
      <h2>Projetos</h2>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <ProjectHome
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          )
        })}
      </div>

    </div>
  )
}

export default Work
