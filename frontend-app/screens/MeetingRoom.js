import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import StartMeeting from '../components/StartMeeting'
import {io} from 'socket.io-client'

let socket

const MeetingRoom = () => {

  const [name, setName] = useState()
  const [roomId, setRoomId] = useState()
  const [activeUsers, setActiveUSers] = useState()

  const joinRoom = () => {
    socket.emit('join-room', {roomId:roomId, userName:name})
  }

  useEffect(() => {
    const url = "http://192.168.1.5:3001"
    socket = io(url)
    console.log("Connecting to socket")
    socket.on('connection', () => {
      console.log("Connected to socket")
    })
    // socket.on('all-users', (users) => {
    //   console.log(users)
    //   setActiveUSers(users)
    // })
  })

  return (
    <View style={styles.container}>
      <StartMeeting
        name={name}
        setName={setName}
        roomId={roomId}
        setRoomId={setRoomId}
        joinRoom={joinRoom}
      />
    </View>
  )
}

export default MeetingRoom


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  }
)