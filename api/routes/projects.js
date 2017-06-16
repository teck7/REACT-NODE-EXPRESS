const express = require('express')

const router = express.Router()

const projects = [
    {
      title: 'Portfolio website',
      skills: ['html', 'css', 'design', 'wireframing'],
      duration: '2 weeks'
    },
    {
      title: 'Ruby command line app',
      skills: ['ruby', 'command line', 'user stories', 'csv'],
      duration: '1 week'
    },
    {
      title: 'Rails two-sided marketplace',
      skills: ['ruby', 'rails', 'command line',
      'user stories','html', 'css', 'design', 'wireframing'],
      duration: '2 weeks'
    },
    {
      title: 'React + Node.js + MongoDB client project',
      skills: ['javascript', 'react JS', 'node JS', 'mongoDB', 'express JS'],
      duration: '3 weeks'
    }
]

router.get('/projects', (req, res) => {
    res.json(projects)
})

module.exports = router
//export default router
