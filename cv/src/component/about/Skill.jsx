import React from 'react'
import './skill.css'
const webSkill = [
  {
    title: 'HTML',
    width: '70%',
    percentage:'70%'
  },
  {
    title: 'CSS',
    width: '60%',
    percentage:'60%'
  },
  {
    title: 'Reactjs',
    width: '70%',
    percentage:'70%'
  },
  {
    title: 'Redux',
    width: '50%',
    percentage:'50%'
  },
  {
    title: 'Bootstrap',
    width: '70%',
    percentage:'70%'
  },
  ]

const Skill = () => {
  return (
    <div className='skill_wrapper'>
      <div className="web_skill">
      {
        webSkill.map((item,index)=>{
          <div className="skill_data">
          <div className='skill_title'>
          <h6>{item.title}</h6>
          <span>{item.percentage}</span>
          </div>
          
          <div className='skill_bar'>
          <span className="skill_bar-percentage"></span>
          </div>
          </div>
        })
      }
      </div>
      <div className="graphic_design">
      
      </div>
      <div className="microsoft">
        
      </div>
      <div className="language">
      
      
      </div>
    </div>
    )
}

export default Skill