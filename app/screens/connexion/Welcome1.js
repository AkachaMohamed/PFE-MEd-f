import React from 'react';
import { ImageBackground, Text , StyleSheet, Image,TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../../components/Card';
import Screen from '../../components/Screen';
import colors from '../../config/colors';


function Welcome1(props) {
    return (
        <Screen>
        <ImageBackground source={require('../../assets/8.jpg')}
        style={styles.image}
        >
    
           <TouchableOpacity
           activeOpacity={1.0}
           onPress={()=>props.navigation.navigate("Welcome")}
           >
          
           {/* <Image
                source={require("../../assets/LOGO2.png")}
                style={{width: 50, height: 50,borderRadius: 42}}
               /> */}
            {/*  <View style={{backgroundColor:"#fff" , height: 40, width:100 , borderRadius: 10}}>
            <Text style={{color:colors.secondary , alignContent: "center"}}>Votre Espace</Text> 
            </View> */}
           </TouchableOpacity>
           
            <Image
             source={require('../../assets/LOGO2.png')}
             style={styles.Logo}
            />
        <Text style={{fontSize:25, color:colors.secondary , alignSelf:"center"}}> WELOME To Champions Steps</Text> 
        <ScrollView>
        <View style={{width:"100%" , height: 250 , backgroundColor:"#fff" ,borderRadius: 20, alignItems:"center" , marginTop: 10}}>
          <Image
             style={{width:"100%" , height: "100%" ,borderRadius: 20}}
             source={require('../../assets/1.jpg')}
         />
          
         </View>
         <View style={{width:"100%" , height: 250 , backgroundColor:"#fff" ,borderRadius: 20, alignItems:"center" , marginTop: 10}}>
          <Image
             style={{width:"100%" , height: "100%" ,borderRadius: 20}}
             source={require('../../assets/2.jpg')}
         />
          
         </View>
          <View style={{width:"100%" , height: 250 , backgroundColor:"#fff" ,borderRadius: 20, alignItems:"center" , marginTop: 10}}>
          <Image
             style={{width:"100%" , height: "100%" ,borderRadius: 20}}
             source={require('../../assets/3.jpg')}
         />
          
         </View>
         <View style={{width:"100%" , height: 250 , backgroundColor:"#fff" ,borderRadius: 20, alignItems:"center" , marginTop: 10}}>
          <Image
             style={{width:"100%" , height: "100%" ,borderRadius: 20}}
             source={require('../../assets/4.jpg')}
         />
          
         </View>
         <View style={{width:"100%" , height: 250 , backgroundColor:"#fff" ,borderRadius: 20, alignItems:"center" , marginTop: 10}}>
          <Image
             style={{width:"100%" , height: "100%" ,borderRadius: 20}}
             source={require('../../assets/5.jpg')}
         />
          
         </View>
         <View style={{width:"100%" , height: 250 , backgroundColor:"#fff" ,borderRadius: 20, alignItems:"center" , marginTop: 10}}>
          <Image
             style={{width:"100%" , height: "100%" ,borderRadius: 20}}
             source={require('../../assets/6.jpg')}
         />
          
         </View>
         <View style={{width:"100%" , height: 250 , backgroundColor:"#fff" ,borderRadius: 20, alignItems:"center" , marginTop: 10}}>
          <Image
             style={{width:"100%" , height: "100%" ,borderRadius: 20}}
             source={require('../../assets/7.jpg')}
         />
          
         </View>
          
            </ScrollView>
            {/* <TouchableOpacity  onPress={()=>props.navigation.navigate("Quinous")}>
                <Text style={{fontSize: 20,color:colors.secondary}}>contact Us </Text>
                </TouchableOpacity> */}
        </ImageBackground>
        </Screen>
    );
}
const styles = StyleSheet.create({
    Logo: {
        width: 200,
        height: 200,
        alignSelf: "center",
     
      },
      touchableOpacityStyle: {
        position: 'absolute',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
     },   
     floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50
      },
   
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    Images:{
        width: "100%",
        
    },
    text:{
        alignSelf: "center",
        color: "#fff",
        fontSize: 20,

        

    }
   
  });

export default Welcome1;