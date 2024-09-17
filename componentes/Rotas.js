import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import CadastrarCriptos from "./CadastrarCriptos";
import AlterarCriptos from "./AlterarCriptos";

const Stack = createStackNavigator();

export default function Rotas() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CadastrarCriptos" component={CadastrarCriptos} />
            <Stack.Screen name="AlterarCriptos" component={AlterarCriptos} />
        </Stack.Navigator>
    );
}
