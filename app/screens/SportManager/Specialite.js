import React, { useState,useEffect } from "react";
import { RefreshControl,Alert, FlatList, StyleSheet, Text, View , TouchableOpacity ,Image,ScrollView, Button } from "react-native";

import Screen from "../../components/Screen";
import ListItem from "../../components/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";
import ListItemUpdatAction from "../../components/ListItemUpdatAction";
import colors from "../../config/colors";
import {DataImport} from '../../api/database/affichage'
import {DeleteData} from '../../api/database/suppression'
import routes from "../../navigation/routes";
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const buttonClickded = () => {
    Alert.alert(
      "Alert nom",
      "Alert Msg",
      [
        { text: "Later", onPress: () => console.log("later pressed") },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
};
const Specialite=(props)=> {
 
  //state management
  const [data1, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [refreshing, setRefreshing] = useState(true);
  const [loading, setLoading] = useState(true);
  const onRefresh = React.useCallback(() => {
  //Importation de données apres refresh 
  const datum =  DataImport("specialite").then((ee)=>{
      setData(ee);
      setRefreshing(false);
      setRefreshing(false)
    })
    
  }, []);
  //--------------------------*
  /*  firestore()
  .collection('Users')
  // Filter results
  .where('age', '>=', 18)
  .get()
  .then(querySnapshot => {
   ...
  }); */
 /*  getUsers = async () => {
    const userDocument = await firestore().collection ("specialite").where('nombre' , '>=' , 20).get()
       console.log(userDocument)      
        } */
  // Suppression d'un entraineur
   const handleDelete = (data) => {    
    const x=DeleteData("specialite",data).then((reponse)=>{ 
      Alert.alert(
        "",
        "Specialite supprimé avec succès",
        [
          { text: "OK"}
        ],
        { cancelable: false }
      );
    onRefresh()  
    })
  }; 
  useEffect( () => {
    function fetchData() {
        const contenu=  DataImport("specialite");
        return contenu
    }
    try {
     setLoading(true);
      const datum =  fetchData().then((ee)=>{
        setData(ee);        
        setRefreshing(false)
      })      
    } catch (error) {      
    }
 }, []);

 if(loading)
 {
  setLoading(false);
  setRefreshing(false)
  return (
    <View><Text>Loading</Text></View>
 );
 }
 if (!data1 || data1.length==0)
 {
  return (
    <Screen>
      <View><Text>Aucun Specialite dans la base de données</Text></View>
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      } > 
      </ScrollView>
      <TouchableOpacity
      
          activeOpacity={1.0}
          onPress={()=>props.navigation.navigate(routes.Update1)}
          style={styles.touchableOpacityStyle}>
          <Image
            source={require('../../assets/addbtn.png')}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity> 
    </Screen>
    );
 }
return (
   <Screen>
  <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}> 
    <FlatList       
        data={data1}
        keyExtractor={(dat) => dat.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            nom={item.nom }
           
            mail={item.nombre}
            image={require("../../assets/Karate.png")}
            renderRightActions={() => (   
              <View> 
                 <ListItemDeleteAction 
                 onPress={() =>handleDelete(item)}
               />
               <ListItemSeparator/>
               <ListItemUpdatAction 
                 onPress={() =>props.navigation.navigate(routes.Update1,{item:item})}
               />
               </View>
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        
      />
      </ScrollView>
      <TouchableOpacity
      
          activeOpacity={1.0}
          onPress={()=>props.navigation.navigate(routes.Update1)}
          style={styles.touchableOpacityStyle}>
          <Image
            source={require('../../assets/addbtn.png')}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity> 
        </Screen>
  );    
}
const styles = StyleSheet.create({
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
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
      }
});

export default Specialite;