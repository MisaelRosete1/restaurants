import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Account from '../screens/account/Account'
import Login from '../screens/account/Login'

const Stack = createStackNavigator()

export default function AccountStack() {
    return (
       <Stack.Navigator>
           <Stack.Screen
               name="account"
               component={Account}
               options={{ title: "Cuenta"}}
           />
            <Stack.Screen
               name="login"
               component={Login}
               options={{ title: "Iniciar Sesion"}}
           />
       </Stack.Navigator>
    )
}
