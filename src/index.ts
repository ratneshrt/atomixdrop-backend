import express from 'express'
import http from 'http'
import { Server, Socket } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*'
    }
})

let rooms: Record<string, string[]> = {}

io.on('connection', (socket: Socket) => {
    console.log(`New Connection: ${socket.id}`)

    socket.on('join room', (roomId: string) => {
        if(!rooms[roomId]){
            rooms[roomId] = []
        }
        rooms[roomId].push(socket.id)

        console.log(`User ${socket.id} joined room: ${roomId}`)
        console.log('Rooms:', rooms)

        const otherUser = rooms[roomId].filter((id) => id !== socket.id)
        if(otherUser.length > 0){
            socket.to(otherUser[0]).emit('user connected', socket.id)
        }
    })

    socket.on('sending signal', (payload: {
        target: string,
        callerID: string,
        signal: any
    }) => {
        io.to(payload.target).emit('user joined', payload)
    })

    socket.on('returning signal', (payload: {
        target: string,
        signal: any
    }) => {
        io.to(payload.target).emit('receiving returned signal', payload)
    })

    socket.on('disconnect', () => {
        console.log('User disconnected')
        console.log('Room before disconnect', rooms)
        
        for(const roomId in rooms){
            rooms[roomId] = rooms[roomId].filter(id => id !== socket.id)
            if(rooms[roomId].length === 0){
                delete rooms[roomId]
            }
        }

        console.log('Updated rooms after disconnect:', rooms)
    })
})

server.listen(8080, () => {
    console.log('Server running on port 8080')
})