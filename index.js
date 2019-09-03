// see a list of repopulated movies
// add a movie to the list
// update movie information
// remove a movie
// see only released movies

const server = require('./server')
// import { server } from './server'

const port = 8000;
server.listen(port, () => console.log(`\n API on port ${port}`))