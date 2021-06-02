import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "../screens/connexion/LoginScreen";
import RegisterScreen from "../screens/connexion/RegisterScreen";
import WelcomeScreen from "../screens/connexion/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Quinous from "../screens/connexion/Quinous";
import AcceuilAD from "../screens/Administrator/AcceuilAD";
import TrainersList from '../screens/SportManager/TrainerList';
import Listabonne from     "../screens/Trainer/Abone"
import SPManagers from '../screens/Administrator/SPManagers';
import AdminList from '../screens/Administrator/Admins';
import Updat_Ent from "../screens/SportManager/Updat_Ent";
import Update_ad from "../screens/Administrator/Update_ad";
import UpdateDS from "../screens/Administrator/Update_DS";
import Welcome1 from "../screens/connexion/Welcome1";
import SpecialiteList from "../screens/SportManager/Specialite";
import Update_spec from "../screens/SportManager/Update_spec";
import Add_Criters from "../screens/SportManager/Add_Criters";
import Planning from "../screens/SportManager/Add_Planning";
import welcomepar from "../screens/Parent/welcomePar";
import inscription from "../screens/Parent/Inscription";
import Planninga from "../screens/Parent/Planning";
import welcomeDS from "../screens/Parent/welcomePar"
import account from "../screens/Parent/Account";
import EvaluationFils from "../screens/Parent/Evaluationfils";
import confirmation from "../screens/Administrator/confirmation";
import expiration from "../screens/Administrator/expiration";
import presence from "../screens/Trainer/presence"; 
import AddScores from "../screens/Trainer/AddScores";

 const Tab = createBottomTabNavigator()
 const Drawer = createDrawerNavigator();
 const Stack = createStackNavigator();

//-----------------------------le navigation de L'entreneur ----------------------------
function Scores() {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="List des Abonnes" component={Listabonne}  options={{ headerShown: false }}/>
      <Stack.Screen name="AddScores" component={AddScores} />
      
     
    </Stack.Navigator>
   
  );
} 
function Trainers() {
  return (
<Drawer.Navigator>
         <Drawer.Screen name="Acceuil" component={AcceuilAD} />
         <Drawer.Screen name="EvaluationScores" component={Scores} />
         <Drawer.Screen name="AddScores" component={AddScores} />
         <Drawer.Screen name="Presence" component={presence} />
       
      </Drawer.Navigator>
         
  );
} 
//------------------------ le navigation de directeur Sportif--------------------------
function Trainer() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Trainers List" component={TrainersList}  options={{ headerShown: false }}/>
      <Stack.Screen name="Updat_Ent" component={Updat_Ent} />
      
     
    </Stack.Navigator>
    
  );
} 
function Specialite() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Specialite List" component={SpecialiteList} />
      <Stack.Screen name="Update_spec" component={Update_spec} />
    </Stack.Navigator>
  );
} 
function DS() {
  return (
<Drawer.Navigator>
      <Drawer.Screen name="Acceuil" component={welcomeDS} />
      <Drawer.Screen name="Ajouter les critéres d evaluation" component={Add_Criters} />
      <Drawer.Screen name="Planning " component={Planning} />
      <Drawer.Screen name="Specialite List " component={Specialite} />
      <Drawer.Screen name="Trainer List " component={Trainer} />
   </Drawer.Navigator>
  );}
  //------------------------ le navigation de L'admin--------------------------


function SPmanager() {
  
  return (
    <Stack.Navigator>      
      <Stack.Screen name="SPManagers" component={SPManagers} options={{ headerShown: false }} />    
      <Stack.Screen name="Update_DS" component={UpdateDS}/> 
    </Stack.Navigator>
  );
} 
function Admin() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="Admins List" component={AdminList} options={{ headerShown: false }} />
      <Stack.Screen name="Update_ad" component={Update_ad} />
    </Stack.Navigator>
  );
} 
function Admins() {
  return (

    <Drawer.Navigator>
      <Drawer.Screen name="Acceuil" component={AcceuilAD} />
      <Drawer.Screen name="Admins" component={Admin} />
      <Drawer.Screen name="Directeurs Sportifs" component={SPmanager} /> 
      <Drawer.Screen name="Cofirmer les Abonees" component={confirmation} /> 
      <Drawer.Screen name="Abonnement Exprée" component={expiration} /> 
    </Drawer.Navigator>
 
  );
} 
//------------------------ le navigation de Parents --------------------------


function par() {
  return (

    <Drawer.Navigator>
      <Drawer.Screen name="Acceuil" component={welcomepar} />
      <Drawer.Screen name="Inscription" component={inscription} />
       <Drawer.Screen name="Planning Annuel" component={Planninga} />
      <Drawer.Screen name="Acount" component={account} /> 
      <Drawer.Screen name="Evaluation Fils" component={EvaluationFils} /> 

    </Drawer.Navigator>
 
  );
} 
//---------------------------tab navigation-------------------------------------
function tab() {
  return (

    <Tab.Navigator>
      <Stack.Screen name="Home"component={Welcome1}    options={{tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} /> ) }} />
      <Stack.Screen name="Contact Us"component={Quinous}  options={{tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="phone" color={color} size={size} /> ) }}   />
      <Stack.Screen name="Connexion"component={WelcomeScreen}  options={{tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} /> ) }}  />  
      
    </Tab.Navigator>
 
  );
} 
const AuthNavigator = () => (
  <NavigationContainer>
        <Stack.Navigator>
                {/* <Stack.Screen name="Welcome1"component={Welcome1}  options={{ headerShown: false }}/>
                <Stack.Screen name="Quinous"component={Quinous}  /> 
                <Stack.Screen name="Welcome"component={WelcomeScreen}  />   */} 
                <Stack.Screen name="tab"component={tab}  options={{ headerShown: false }}/>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Trainer" component={Trainers} options={{ headerShown: false }} />
                <Stack.Screen name="DirecteurSportif" component={DS} options={{ headerShown: false }} />
                <Stack.Screen name="Admin" component={Admins} options={{ headerShown: false }} />
                <Stack.Screen name="Parent" component={par} options={{ headerShown: false }} />
                
        </Stack.Navigator>
  </NavigationContainer>
);

export default AuthNavigator;
