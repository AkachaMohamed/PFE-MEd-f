import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import Liste_Ent from "../screens/Administrator/Parents";
import Updat_Ent from "../screens/Administrator/Update_par";
import AcceuilAD from "../screens/Administrator/AcceuilAD";
import AdminScreen from "../screens/Administrator/Admins";
import Update_ad from "../screens/Administrator/Update_ad";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    
    <Stack.Screen
      name="Entraineurs"
      component={Liste_Ent}
     
    />
    <Stack.Screen name="Update" component={Updat_Ent} />
    <Stack.Screen
      name="Admins"
      component={AdminScreen}
     
    />
    <Stack.Screen name="Update" component={Update_ad} />
  </Stack.Navigator>
);

export default AuthNavigator;
