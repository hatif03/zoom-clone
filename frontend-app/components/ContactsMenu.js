import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


const contactMenuButtons = [
    {
        type: "starred",
        name: "Starred",
    },
    {
        type: "contact",
        name: "Hatif Osmani",
        photo: require("../assets/profile.jpg"),
    },
    {
        type: "contact",
        name: "Hatif Osmani 2",
        photo: require("../assets/profile.jpg"),
    },
]


const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      {contactMenuButtons.map((contact, index) =>
            <View style={styles.row} key={index}>
                {contact.type === "starred" ? (
                    <View style={styles.starredIcon}>
                        <AntDesign name="star" size={30} color="#efefef" />
                    </View>
                ): (
                    <Image source={contact.photo} style={{width: 55, height: 55, borderRadius: 20}} />
                )}
                <Text style={styles.text}>{contact.name}</Text>
            </View>
      )}
    </View>
  )
}

export default ContactsMenu


const styles = StyleSheet.create({
    container:{},
    row: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
    },
    text: {
        color: "#efefef",
        paddingLeft: 15,
        fontSize: 18,
    },
    starredIcon: {
        backgroundColor: "#333333",
        width: 55, 
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
})