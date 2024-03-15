import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import StartMeeting from '../components/StartMeeting'
import {io} from 'socket.io-client'
import { Camera, CameraType } from 'expo-camera'
import { FontAwesome } from '@expo/vector-icons';

const menuIcons = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    customColor: "#efefef"
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop Video",
  },
  {
    id: 3,
    name: "upload",
    title: "Share Content",
  },
  {
    id: 4,
    name: "group",
    title: "Participants",
  },
]

let socket

const MeetingRoom = () => {

  const [name, setName] = useState()
  const [roomId, setRoomId] = useState()
  const [activeUsers, setActiveUSers] = useState()
  const [startCamera, setStartCamera] = useState(false)

  const startCameraPermission = async () => {
    const {status} = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
      setStartCamera(true)
    } else {
      console.log("Access denied")
    }
  }

  const joinRoom = () => {
    startCameraPermission()
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
      {startCamera? (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.cameraContainer}>
            <Camera
              type={"front"}
              style={{height: "85%", width: "100%"}}
            ></Camera>
          </View>
          <View style={styles.menu}>
            {menuIcons.map(icon => (
              <TouchableOpacity key={icon.id} style={styles.tile}>
                <FontAwesome name={icon.name} size={24} color={icon.customColor? icon.customColor: "white"} />
                <Text style={styles.textTile}>{icon.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      ):
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      }
    </View>
  )
}

export default MeetingRoom


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textTile: {
    color: "#efefef",
    margin: 10,
  },
  tile: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 15,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  }
  }
)