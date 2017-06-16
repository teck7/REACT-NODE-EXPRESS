const express = require('express')
const projectsRouter = require('./routes/projects')

//Create our Express server
const server = express()

//Add routes
server.use(projectsRouter)

//Start server
const port = 8000
server.listen (port, () => {
  console.log(`API server is running on port ${port}`)
})
