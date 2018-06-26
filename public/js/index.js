var socket = io()

socket.on('newMessage', function (message){
	console.log('newMessage', message)
})

socket.emit('newMessage', {
	from: 'jen@email.com',
	text: 'Hello'
})