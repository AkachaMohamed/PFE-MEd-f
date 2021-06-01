import React from 'react';
import { ImageBackground, Text , Image} from 'react-native';
import Screen from "../../components/Screen";

function AcceuilAD(props) {
    return (
        <Screen>
        <ImageBackground source={require('../../assets/bgg11.png')}
        style={{ flex: 1,
            resizeMode: "cover",
            justifyContent: "center"}}
        >
            
        </ImageBackground>
       
        </Screen>
    );
}

export default AcceuilAD;
// // How to Hide Navigation Option from Navigation Drawer / Sidebar
// // https://aboutreact.com/how-to-hide-navigation-drawer-sidebar-option/

// /*import 'react-native-gesture-handler';

// import * as React from 'react';
// import { View, TouchableOpacity, Image } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import {
//   createDrawerNavigator
// } from '@react-navigation/drawer';

// import TrainersList from './TrainerList';
// import ParentsList from './Parents';
// import SPManagers from './SPManagers';
// import AdminList from './Admins';


// const Drawer = createDrawerNavigator();

// const NavigationDrawerStructure = (props) => {
//   //Structure for the navigatin Drawer
//   const toggleDrawer = () => {
//     //Props to open/close the drawer
//     props.navigationProps.toggleDrawer();
//   };

//   return (
//     <View style={{ flexDirection: 'row' }}>
//       <TouchableOpacity onPress={toggleDrawer}>
//         {/*Donute Button Image */}
//         <Image
//           source={{
//             uri:
//               'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
//           }}
//           style={{ width: 25, height: 25, marginLeft: 5 }}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// /* const TrainersListStack = ({ navigation }) => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: '#f4511e', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         },
//       }}>
//       <Stack.Screen
//         name="Trainers List"
//         component={TrainersList}
//         options={{
//           title: 'Trainers List', //Set Header Title
//         }}
//       />
//       <Stack.Screen name="Update_Ent" component={Updat_Ent} />
//       <Stack.Screen
//         name="Parents List"
//         component={ParentsList}
//         options={{
//           title: 'Parents List', //Set Header Title
//         }}
//       />
//       <Stack.Screen name="Update_Par" component={Updat_Par} />
//        <Stack.Screen
//         name="SPManagers List"
//         component={SPManagers}
//         options={{
//           title: 'SPManagers List', //Set Header Title
//         }}
//       />
//       <Stack.Screen name="Update_DS" component={Updat_DS} />

//         <Stack.Screen
//         name="Admins List"
//         component={AdminList}
//         options={{
//           title: 'Admins List', //Set Header Title
//         }}
//       />
//       <Stack.Screen name="Update_AD" component={Updat_AD} />
//     </Stack.Navigator>
//   );
// }; */
// const App = () => {
//   return (

//       <Drawer.Navigator
//         drawerContentOptions={{
//           activeTintColor: '#e91e63',
//           itemStyle: { padding: 0 },
//         }
//         }>
//         <Drawer.Screen
//           name="Trainers List"
//           component={TrainersList}
//         />
//         <Drawer.Screen
//           name="Parents List"
//           component={ParentsList}
//         />
//         <Drawer.Screen
//           name="SPManagers List"
//           component={SPManagers}
//         />
//         <Drawer.Screen
//           name="Admins List"
//           component={AdminList}
//         />
//         <Drawer.Screen
//           name="Admins List2"
//           component={AdminList}
//         />
       
        
//       </Drawer.Navigator>
 
//   );
// };

// export default App;
