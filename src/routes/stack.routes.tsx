import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens'
import { Convert } from '../screens/Convert'

const StackRoutes = createStackNavigator()

export const AppRoutes: React.FC = () => {
    return (
        <StackRoutes.Navigator 
            initialRouteName="Homepage"
            headerMode="none" 
            screenOptions={{ cardStyle: { backgroundColor: '#fff'}}}
        >
            <StackRoutes.Screen name="Homepage" component={ Home } />
            <StackRoutes.Screen name="Convert" component={ Convert } />
        </StackRoutes.Navigator>
    )
}