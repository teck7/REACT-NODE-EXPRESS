import React from 'react'
import Project from './Project' //import {title} from this file

export default function ProjectList ({
    items
}) {
    return (
      <div>
        {
          items.map((item) => (
              <Project title={ item.title } />
          ))
        }
      </div>
    )
}
