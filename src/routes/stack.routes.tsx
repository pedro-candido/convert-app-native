import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../pages'
import { Convert } from '../pages/Convert'

const StackRoutes = createStackNavigator()

export const AppRoutes: React.FC = () => {
    return (
        <StackRoutes.Navigator 
            headerMode="none" 
            screenOptions={{ cardStyle: { backgroundColor: '#fff'}}}
        >
            <StackRoutes.Screen name="Homepage" component={ Home } />
            <StackRoutes.Screen name="Convert" component={ Convert } />
        </StackRoutes.Navigator>
    )
}