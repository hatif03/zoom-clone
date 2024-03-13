import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const MeetingRoom = () => {

  const [name, setName] = useState()
  const [roomId, setRoomId] = useState()

  return (
    <View style={styles.container}>
      <View style={styles.meetingContainer}>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChange={text => setName(text)}
            placeholder='Enter name'
            placeholderTextColor={"#767476"}
          />
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={roomId}
            onChange={text => setRoomId(text)}
            placeholder='Enter room id'
            placeholderTextColor={"#767476"}
          />
        </View>
        <View style={{alignItems: "center"}}>
          <TouchableOpacity style={styles.startMeetingButton} onPress={() => {}}>
            <Text style={{color: "white", fontWeight: "bold"}}>Start Meeting</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default MeetingRoom


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center"
  },
  textInput: {
    color: "#efefef",
    fontSize: 18
  },
  startMeetingButton: {
    width: "80%",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "#0470dc",
    borderRadius: 15,
  },
  }
)