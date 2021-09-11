import io from 'socket.io-client'
const socket = io('http://localhost:8000')
console.log('se conectó al sokect')
export default socket