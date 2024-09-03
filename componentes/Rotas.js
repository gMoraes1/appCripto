import {React} from "react";
import {createStackNavigator} from "@react-navigation/stack";

import {Home} from "Home";
import {Cadastrar} from "./CadastrarCriptos";
import {Alterar} from "./AlterarCriptos";

const stack = createStackNavigator();

export default function Rotas() {
    return (
        <stack.Navigator>
            <stack.Screen name="Home" component={Home}/>
            <stack.Screen name="Cadastrar" component={Cadastrar}/>
            <stack.Screen name="Alterar" component={Alterar}/>
        </stack.Navigator>
    );

}

