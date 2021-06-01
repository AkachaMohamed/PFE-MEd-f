import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import Planning from "./Update_Planning";
import Update_spec from "./Update_spec";
import Add_Criters from "./Add_Criters";
import welcomeDS from "../Parent/welcomePar";
import SpecialiteList from "./Specialite";

const Stack = createStackNavigator();
 const Drawer = createDrawerNavigator();

 function Specialite() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Specialite List" component={SpecialiteList} />
        <Stack.Screen name="Update Specialite" component={Update_spec} />
      </Stack.Navigator>
    );
  } 


export default function App() {
    return (
<NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Acceuil" component={welcomeDS} />
      <Drawer.Screen name="Ajouter les critéres d evaluation" component={Add_Criters} />
      <Drawer.Screen name="Planning " component={Planning} />
      <Drawer.Screen name="Specialite List " component={Specialite} />
   </Drawer.Navigator>
  </NavigationContainer> 
  
  );
   
}