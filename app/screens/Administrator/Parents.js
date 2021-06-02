import React, { useState,useEffect } from "react";
import { RefreshControl,Alert, FlatList, StyleSheet, Text, View , TouchableOpacity ,Image,ScrollView, Button } from "react-native";

import Screen from "../../components/Screen";
import ListItem from "../../components/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";
import {DataImport} from '../../api/database/affichage'
import {DeleteData} from '../../api/database/suppression'
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
const parentScreen=(props)=> {
 
  //state management
  const [data1, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(true);
  const [loading, setLoading] = useState(true);
  const onRefresh = React.useCallback(() => {
  //Importation de données apres refresh 
  const datum =  DataImport("parents").then((ee)=>{
      setData(ee);
      setRefreshing(false);
      setRefreshing(false)
    })
    
  }, []);
  // Suppression d'un entraineur
   const handleDelete = (data) => {    
    const x=DeleteData("parents",data).then((reponse)=>{ 
      Alert.alert(
        "",
        "Parents supprimé avec succès",
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
        const contenu=  DataImport("parents");
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
      <View><Text>Aucun Entraineur dans la base de données</Text></View>
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      } > 
      </ScrollView>
      
    </Screen>
    );
 }
return (
<Screen>
  <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}> 
    <FlatList       
        data={data1}
        //keyExtractor={(dat) => dat.mail.toString()}
        renderItem={({ item }) => (
          <ListItem
            nom={item.prenom +" "+ item.nom +" (NomC:"+item.nomc+")"}
            mail={item.mail}
            tel={item.tel +"(TelC:"+item.telc+")"}
            image={require("../../assets/User2.jpg")}
            renderRightActions={() => (   
              <View> 
                 <ListItemDeleteAction 
                 onPress={() =>handleDelete(item)}
               />
               <ListItemSeparator/>
               
               </View>
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        
      />
      </ScrollView>
      
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

export default parentScreen;