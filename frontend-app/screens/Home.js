import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MenuButtons from '../components/MenuButtons'
import ContactsMenu from '../components/ContactsMenu'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <SafeAreaView style={{height: "100%"}}>
            <Header/>
            <SearchBar/>
            <MenuButtons navigation={navigation}/>
            <ContactsMenu/>
        </SafeAreaView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1C1C1C",
        padding: 10,
    }
})