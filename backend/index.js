const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 3001;
const users = []

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// io.on('connection', (socket) => {
//   socket.on('join-room', (roomId, userId) => {
//     socket.join(roomId);
//     socket.to(roomId).broadcast.emit('user-connected', userId);
//     socket.on('disconnect', () => {
//       socket.to(roomId).broadcast.emit('user-disconnected', userId);
//     });
//   });
// });

const addUser = (userName, roomId) => {
    users.push({
        userName: userName,
        roomId: roomId
    });
}

const userLeave = (userName) => {
    users = users.filter(user => user.userName !== userName);
}

const getRoomUsers = (roomId) => {
    return users.filter(user => user.roomId === roomId);
}

io.on('connection', socket => {
    console.log('a user connected');
    socket.on('join-room', ({roomId, userName}) => {
        console.log("User joined room");
        console.log(roomId);
        console.log(userName);
        socket.join(roomId);
        addUser(userName, roomId);
        socket.to(roomId).emit('user-connected', userName);

        io.to(roomId).emit('all-users', getRoomUsers(roomId));

        socket.on("disconnect", () => {
            console.log("User disconnected");
            socket.leave(roomId);
            userLeave(userName);
            io.to(roomId).emit('all-users', getRoomUsers(roomId));
        });
    });
})

server.listen(port, () => {
  console.log(`Zoom clone api listening at http://localhost:${port}`);
});