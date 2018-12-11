const express = require('express')

const app = express()


// Set template engine ejs
app.set('view engine', 'ejs')

// Middlewares
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
    //res.render('index')
    res.send('Hellow World')
})

// Listening on port 3000
server = app.listen(3000);

//socket.io instantiation
const io = require("socket.io")(server)

//listen on every connection
io.on('connection', (socket) => {
    console.log('New user connected')
})