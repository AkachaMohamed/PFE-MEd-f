import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import AcceuilAD from "./AcceuilAD";
import TrainersList from '../SportManager/TrainerList';
import ParentsList from './Parents';
import SPManagers from './SPManagers';
import AdminList from './Admins';
import Updat_Ent from "../SportManager/Updat_Ent";
import Update_ad from "./Update_ad";
import Update_par from "./Update_par";
import UpdateDS from "./Update_DS";


const Stack = createStackNavigator();
 const Drawer = createDrawerNavigator();

  function Trainer() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Trainers List" component={TrainersList} />
      <Stack.Screen name="Update" component={Updat_Ent} />
      
     
    </Stack.Navigator>
    
  );
} 
function SPmanager() {
  
  return (
    <Stack.Navigator>      
      <Stack.Screen name="SPManagers" component={SPManagers} />    
      <Stack.Screen name="Update_DS" component={UpdateDS}/> 
    </Stack.Navigator>
  );
} 
function Admin() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="Admins List" component={AdminList} />
      <Stack.Screen name="Update_ad" component={Update_ad} />
    </Stack.Navigator>
  );
} 
function Parents() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="Parents List" component={ParentsList} />
      <Stack.Screen name="Update_par" component={Update_par} />
     
    </Stack.Navigator>
  );
}  
export default function App() {
    return (
      
  
      <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Acceuil" component={AcceuilAD} />
        <Drawer.Screen name="Trainers" component={Trainer} />
         <Drawer.Screen name="Admins" component={Admin} />
        <Drawer.Screen name="Parents" component={Parents} />
        <Drawer.Screen name="Directeurs Sportifs" component={SPmanager} /> 
       
      </Drawer.Navigator>
    </NavigationContainer>  
   
    
   
  
     );
     
  }