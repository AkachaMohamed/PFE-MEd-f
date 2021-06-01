import React from 'react';
import { ImageBackground, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Screen from '../../components/Screen';
import colors from "../../config/colors";
import MapView from 'react-native-maps';

function Quinous(props) {
    return (
       
           
         <ImageBackground
            style={{ flex: 1,
                resizeMode: "cover",
                justifyContent: "center"}}
            source={require('../../assets/8.jpg')}
        >
            <MapView   style={{ flex: 1 }} provider={MapView.PROVIDER_GOOGLE}  
            initialRegion={{
                
                         latitude:34.73522048464515,
                
                         longitude: 10.711551866448984,
            
                         latitudeDelta: 0.04,
            
                         longitudeDelta: 0.05}}
            
            
            
            ></MapView>
        <Text style={{ color:colors.secondary  , fontSize: 30}}> Welcome to chopions Steps : </Text>
        <Text style={{color:colors.secondary  , fontSize: 15}}>champions steps est une complexe sportif qui rendre votre enfant un champion dans le domaine de sport qui l'aime . pour bien compris notre complexe sportif vous peut  contact nous </Text>
        <Text style={{color:colors.secondary  , fontSize: 30}}> Contact US : </Text>
        <Text style={{color:colors.secondary  , fontSize: 15}}> Phone : +966 55 846 6322 </Text>
        <Text style={{color:colors.secondary  , fontSize: 15}}> Email : chompions.Steps@gmail.com  </Text>
        <Text style={{color:colors.secondary , fontSize: 15}}> WhatsApp : +966 55 846 6322 </Text>
        <Text style={{color:colors.secondary  , fontSize: 15}}> Actuellement ouvert : 9:00-22:00 </Text>
        </ImageBackground>
        
       
    );
}

export default Quinous;