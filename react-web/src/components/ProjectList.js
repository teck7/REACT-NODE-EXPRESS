import React from 'react'
import Project from './Project' //import {title} from this file

export default function ProjectList ({
    items
}) {
    return (
      <div>
        {
          items.map((item, index) => (
              <Project key={ index }
              title={ item.title } />
          ))
        }
      </div>
    )
}
