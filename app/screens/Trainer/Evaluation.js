
/* import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';




export default function App() {
  const [ columns, setColumns ] = useState([
    "Name",
    "Gender",
    "Breed",
    "Weight",
    "Age"
  ])
  const [ direction, setDirection ] = useState(null)
  const [ selectedColumn, setSelectedColumn ] = useState(null)
  const [ pets, setPets ] = useState([
    {
      Name: "Charlie",
      Gender: "Male",
      Breed: "Dog",
      Weight: 12,
      Age: 3
    },
    {
      Name: "Max",
      Gender: "Male",
      Breed: "Dog",
      Weight: 23,
      Age: 7
    },
    {
      Name: "Lucy",
      Gender: "Female",
      Breed: "Cat",
      Weight: 5,
      Age: 4
    },
    {
      Name: "Oscar",
      Gender: "Male",
      Breed: "Turtle",
      Weight: 13,
      Age: 23
    },
    {
      Name: "Daisy",
      Gender: "Female",
      Breed: "Bird",
      Weight: 1.7,
      Age: 3
    },
    {
      Name: "Ruby",
      Gender: "Female",
      Breed: "Dog",
      Weight: 6,
      Age: 3
    },
    {
      Name: "Milo",
      Gender: "Male",
      Breed: "Dog",
      Weight: 11,
      Age: 7
    },
    {
      Name: "Toby",
      Gender: "Male",
      Breed: "Dog",
      Weight: 34,
      Age: 19
    },
    {
      Name: "Lola",
      Gender: "Female",
      Breed: "Cat",
      Weight: 4,
      Age: 3
    },
    {
      Name: "Jack",
      Gender: "Male",
      Breed: "Turtle",
      Weight: 13,
      Age: 23
    },
    {
      Name: "Bailey",
      Gender: "Female",
      Breed: "Bird",
      Weight: 2,
      Age: 4
    },
    {
      Name: "Bella",
      Gender: "Female",
      Breed: "Dog",
      Weight: 6,
      Age: 10
    }
  ])

  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc" 
    const sortedData = _.orderBy(pets, [column],[newDirection])
    setSelectedColumn(column)
    setDirection(newDirection)
    setPets(sortedData)
  }
  const tableHeader = () => (
    <View style={styles.tableHeader}>
      {
        columns.map((column, index) => {
          {
            return (
              <TouchableOpacity 
                key={index}
                style={styles.columnHeader} 
                >
                <Text style={styles.columnHeaderTxt}>{column + " "} 
                  { selectedColumn === column && <MaterialCommunityIcons 
                      name={direction === "desc" ? "arrow-down-drop-circle" : "arrow-up-drop-circle"} 
                    />
                  }
                </Text>
              </TouchableOpacity>
            )
          }
        })
      }
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList 
        data={pets}
        style={{width:"90%"}}
        keyExtractor={(item, index) => index+""}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        renderItem={({item, index})=> {
          return (
            <View style={{...styles.tableRow, backgroundColor: index % 2 == 1 ? "#f5deb3" : "white"}}>
              <Text style={{...styles.columnRowTxt, fontWeight:"bold"}}>{item.Name}</Text>
              <Text style={styles.columnRowTxt}>{item.Gender}</Text>
              <Text style={styles.columnRowTxt}>{item.Breed}</Text>
              <Text style={styles.columnRowTxt}>{item.Weight}</Text>
              <Text style={styles.columnRowTxt}>{item.Age}</Text>
            </View>
          )
        }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:80
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fc5c65",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50
  },
  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems:"center",
  },
  columnHeader: {
    width: "20%",
    justifyContent: "center",
    alignItems:"center"
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
  columnRowTxt: {
    width:"20%",
    textAlign:"center",
  }
}); */
import React, { useState,useEffect } from "react";
import { RefreshControl,Alert, FlatList, StyleSheet, Text, View , TouchableOpacity ,Image,ScrollView, Button } from "react-native";
import { SearchBar } from 'react-native-elements';
import Screen from "../../components/Screen";
import ListItem from "../../components/ListItem2";
import ListItemSeparator from "../../components/ListItemSeparator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";
import ListItemUpdatAction from "../../components/ListItemUpdatAction";
import {DataImport} from '../../api/database/affichage'
import {DeleteData} from '../../api/database/suppression'
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
let initialdatas = [
  {
    id: 1,
     prenom: "Akacha ",
     nom: "Mohamed",
    mail: "Akachamohamed321@gmail.com",
    tel: "529458785",
    sepecialite : "karate",
    image: require("../../assets/User2.jpg"),
  }
];
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
const TrainerScreen=(props)=> {
 
  //state management
  const [data1, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(true);
  const [loading, setLoading] = useState(true);
  const onRefresh = React.useCallback(() => {
  //Importation de données apres refresh 
  const datum =  DataImport("evaluation").then((ee)=>{
      setData(ee);
      setRefreshing(false);
      setRefreshing(false)
    })
    
  }, []);
  // Suppression d'un entraineur
   const handleDelete = (data) => {    
    const x=DeleteData("evaluation",data).then((reponse)=>{ 
      Alert.alert(
        "",
        "Entraineur supprimé avec succès",
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
        const contenu=  DataImport("evaluation");
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
      <TouchableOpacity
      
          activeOpacity={1.0}
          onPress={()=>props.navigation.navigate("Update")}
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
  <SearchBar
        placeholder="Recheche..."
             
      />
    <FlatList       
        data={data1}
        keyExtractor={(dat) => dat.mail.toString()}
        renderItem={({ item }) => (
          <ListItem
            nom={item.nom  +" ( Specialite: "+item.specialite+")"}
            mail={item.mail}
            crit1={"Poids : "+item.crit1}
            crit2={"Longeur : "+item.crit2}
            crit3={ "Rapport Musculaire : "+item.crit3}
             renderRightActions={() => (   
              <View> 
                  <ListItemDeleteAction 
                 onPress={() =>handleDelete(item)}
               /> 
               <ListItemSeparator/>
                <ListItemUpdatAction 
                 onPress={() =>props.navigation.navigate("Update",{item:item})}
               /> 
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

export default TrainerScreen;