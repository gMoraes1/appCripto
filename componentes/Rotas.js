import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import CadastrarCriptos from "./CadastrarCriptos";
import AlterarCriptos from "./AlterarCriptos";

const Tab = createStackNavigator();

export default function RotasTab() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="CadastrarCriptos" component={CadastrarCriptos} />
            <Tab.Screen name="AlterarCriptos" component={AlterarCriptos} />
        </Tab.Navigator>
    );
}
