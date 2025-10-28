import React from 'react'
import experience from './data/experience.json'

const Experience = () => {
  return (
    <>
    <div className="container exp" id='experience'>
      <h1>EXPERIENCE</h1>
      {
        experience.map((data)=>(
          <>
            <div key={data.id} className='exp-item text-center my-5'data-aos="zoom-in" data-aos-duration="1000">
              <div className="text-div">
                <h2 style={{fontWeight: "bold"}}>{data.role}{" at "}{data.organisation}</h2>
                <h4>{data.location}</h4>
                <h4 style={{color: "yellowgreen"}}>{data.startDate}{" - "}{data.endDate}</h4>
                <h5 style={{color: "yellow"}}>{data.experiences[0]}</h5>
                <h5 style={{color: "yellow"}}>{data.experiences[1]}</h5>
              </div>
            </div>
          </>
        ))
      }
    </div>
    </>
  )
}

export default Experience