import React from 'react'

export default function Project ({
    title,
    skills,
    duration
}) {
    return (
      <div>
          <h2>{ title }</h2>
          <h4>Skills: { skills.join(', ') }</h4>
          <h4>Project Duration: { duration }</h4>
      </div>
    )
}
