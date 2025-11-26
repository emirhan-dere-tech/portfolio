import React from 'react'

const info = () => {
  return (
    <div className='about__info grid'>
      <div className="about__box">
      <i class='bx bx-award about__icon'></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">8 months of experience as an Associate Software Engineer.</span>
      </div>

      <div className="about__box">
      <i class='bx bx-wrench about__icon'></i>

        <h3 className="about__title">Development Journey</h3>
        <span className="about__subtitle">
        Completed a few personal projects, with more in progress...</span>
      </div>

      <div className="about__box">
      <i class='bx bx-laptop about__icon'></i>

        <h3 className="about__title">Programming Proficiency</h3>
        <span className="about__subtitle">Practised 700+ coding problems across multiple leading platforms</span>
      </div>

    </div>
  )
}

export default info