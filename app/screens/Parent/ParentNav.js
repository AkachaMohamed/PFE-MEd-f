import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Evaluation from "../Trainer/Evaluation";
import Planning from "./Planning";
import ListENT from "./ListENT";
import welcomePar from "./welcomePar";
import { createDrawerNavigator } from '@react-navigation/drawer';


 const Drawer = createDrawerNavigator();


export default function App() {
    return (
<NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Acceuil" component={welcomePar} />
      <Drawer.Screen name="Liste des Entreneur " component={ListENT} />
       <Drawer.Screen name="Plannig Annuel" component={Planning} />
      <Drawer.Screen name="Evalution " component={Evaluation} />
   </Drawer.Navigator>
  </NavigationContainer> 
  
  );
   
}