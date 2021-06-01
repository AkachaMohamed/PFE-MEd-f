import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import AcceuilAD from "../Administrator/AcceuilAD";
import TrainersList from './Abone';
import AddScores from './AddScores';
import SPManagers from './Evaluation';


const Stack = createStackNavigator();
 const Drawer = createDrawerNavigator();

  function Scores() {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="List des Abonnes" component={TrainersList} />
      <Stack.Screen name="AddScores" component={AddScores} />
      
     
    </Stack.Navigator>
   
  );
} 

export default function App() {
    return (
      
  
      <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Acceuil" component={AcceuilAD} />
        <Drawer.Screen name="Trainers" component={Scores} />
         <Drawer.Screen name="Admins" component={SPManagers} />
        
       
      </Drawer.Navigator>
    </NavigationContainer>  
   
    
   
  
     );
     
  }