const express = require('express')

const app = express()

// Set template engine ejs
app.set('view engine', 'ejs')

// Middlewares
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
    //res.send('Hellow World')
    res.render('index')
})

// Listening on port 3000
server = app.listen(3000);

//socket.io instantiation
const io = require("socket.io")(server)

//listen on every connection
io.on('connection', (socket) => {
    console.log('New user connected')

    // default username
    socket.username = "Anonymous"

    // listen on change username
    socket.on('change_username', (data) => {
        socket.username = data.username
    })

    socket.on('new_message', (data) => {
        console.log(data)
            //broadcast the new message
        io.sockets.emit('new_message', { message: data.message, username: socket.username })
    })
})