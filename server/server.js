const path = require('path')
const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')
const app = express()

var server = http.createServer(app)
var io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
	socket.on('newMessage', function (message) {
		console.log('newMessage', message)
	})

	socket.emit('newMessage', {
		from: 'ben@email.com',
		text: 'Hello',
		createAt: 123
	})
})

server.listen(port, () => console.log(`Example app listening on port ${port}!`))