import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View , TouchableOpacity ,Image } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

import ListItemUpdatAction from "../components/ListItemUpdatAction";
import AppButton from "../components/AppButton";
import colors from "../Config/colors";
import Routes from "../Config/Routes";

let initialMessages = [
  {
    id: 1,
     prenom: "Akacha ",
     nom: "Mohamed",
    mail: "Akachamohamed321@gmail.com",
    tel: "529458785",
    spécialité : "karate",
    image: require("../assets/mohamed.jpg"),
  },
  {
    id: 2,
    prenom: "User2",
    nom: "User2",
    mail: "User2@gmail.com",
    tel: "54587125",
    spécialité : "karate",
    image: require("../assets/user.jpeg"),
  },
  {
    id: 3,
    prenom: "User3",
    nom: "User3",
    mail: "User3@gmail.com",
    tel: "54587125",
    spécialité : "karate",
    image: require("../assets/user.jpeg"),
  },
  {
    id: 4,
    prenom: "User4",
    nom: "User4",
    mail: "User4@gmail.com",
    tel: "54587125",
    spécialité : "karate",
    image: require("../assets/user.jpeg"),
  },
  {
    id: 5,
    prenom: "User5",
    nom: "User5",
    mail: "User5@gmail.com",
    tel: "54587125",
    spécialité : "karate",
    image: require("../assets/user.jpeg"),
  },
  {
    id: 6,
    prenom: "User6",
    nom: "User6",
    mail: "User6@gmail.com",
    tel: "54587125",
    spécialité : "karate",
    image: require("../assets/user.jpeg"),
  },
  {
    id: 7,
    prenom: "User7",
    nom: "User7",
    mail: "User7@gmail.com",
    tel: "54587125",
    spécialité : "karate",
    image: require("../assets/user.jpeg"),
  },
  {
    id: 8,
    prenom: "User8",
    nom: "User8",
    mail: "User8@gmail.com",
    tel: "54587125",
    spécialité : "karate",
    image: require("../assets/user.jpeg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  Fetch_Data = () =>{


  };
  Add_Item = () =>{setMessages(initialMessages.concat({
    id: 9,
    prenom: "User9",
    nom: "User9",
    mail: "User9@gmail.com",
    Tel: "54587125",
    image: require("../assets/user.jpeg"),
  }))

    console.log("Ajout Avec Succés")
  };
  buttonClickded = () => {
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

  return (
    <Screen>

      <FlatList
       
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            nom={item.nom}
            mail={item.mail}
            image={item.image}
            onPress={() => (console.log("Akacha mohamed+++++++++++++++++++++++++++++++++", item), buttonClickded() )}
            
            renderRightActions={() => (
             
             
              <View>    
                
                 <ListItemDeleteAction 
                 onPress={() =>handleDelete(item)}
               />
               <ListItemSeparator/>
               <ListItemUpdatAction 
                 onPress={() =>props.navigation.navigate("Update",{Operation:"modifier",item:item})}
               />
               </View>

            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages)
            

        }}
      />
      <TouchableOpacity 
     onPress={() =>props.navigation.navigate("Update",{item:"Ajouter"})}
     style={{flexDirection: 'row',
    alignItems: 'center',
    alignSelf:"flex-end",
    marginRight: 30,
    backgroundColor: colors.primary,
    borderWidth: 0.5,
    alignContent:"flex-end",
    height: 80,
    width: "20%",
    borderRadius: 40,
    }} activeOpacity={0.5}>
    <Text style={{fontSize:70 , color : "white"}}> + </Text>
     
    </TouchableOpacity>
    {/*<AppButton nom="Ajout"  onPress={() => initialMessages=initialMessages.concat({
    id: 9,
    nom: "Khalil",
    mail: "User6@gmail.com",
    image: require("../assets/user.jpeg"),
  })}  />*/}
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
