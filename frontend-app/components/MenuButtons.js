import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';


const items = [
    {
        id: 1,
        name: "video-camera",
        title: "New Meeting",
        customColor: "#FF751F",
    },
    {
        id: 2,
        name: "plus-square",
        title: "Join",
    },
    {
        id: 3,
        name: "calendar",
        title: "Schedule",
    },
    {
        id: 4,
        name: "upload",
        title: "Share Screen",
    },
    
]


const MenuButtons = ({navigation}) => {
  return (
    <View style={styles.container}>
        {items.map((item, index) =>
            <View style={styles.buttonContainer} key={index}>
                <TouchableOpacity style={{...styles.button, backgroundColor: item.customColor? item.customColor: "#0470DC"}} onPress={() => navigation.navigate("Room")}>
                    <FontAwesome name={item.name} size={23} color="#efefef" />
                </TouchableOpacity>
                <Text style={styles.menuText}>{item.title}</Text>
            </View>
         )}
    </View>
  )
}

export default MenuButtons


const styles = StyleSheet.create({
    container:{
        marginTop: 25,
        paddingBottom: 10,
        borderBottomColor: "#1F1F1F",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    buttonContainer:{
        alignItems: "center",
        flex: 1,
    },
    button: {
        height: 50,
        width: 50,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    menuText: {
        color: "#858585",
        paddingTop: 10,
        fontSize: 12,
        fontWeight: "600",
    },
});