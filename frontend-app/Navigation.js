import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MeetingRoom from './screens/MeetingRoom';
import Home from './screens/Home';

const Navigation = () => {
    const Stack = createStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    headerShown: false,
                }}
                />
            <Stack.Screen 
                name='Room' 
                component={MeetingRoom}
                options={{
                    title: "Start a meeting",
                    headerStyle: {
                        shadowColor: "#1C1C1C",
                        backgroundColor: "#1C1C1C",
                        shadowColor: "transparent",
                        shadowOpacity: 0,
                    },
                    headerTintColor: "#efefef",
                    headerTitleAlign: "center"
                }}
                />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation