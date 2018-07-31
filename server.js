import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import Home from './src/Home'
import template from './template'

const server = express()
const ssr = renderToString(<Home />)

server.use('/static', express.static('static'))

server.get('/', (req, res) => {
  res.send(template({
    ssr
  }))
})

server.listen(8080, () => console.log('Corriendo en el puerto 8080'))
