import React, { useState,useEffect } from 'react';

import {StyleSheet, View, Text , RefreshControl ,  ScrollView} from 'react-native';
import * as Progress from 'react-native-progress';

import Timeline from 'react-native-timeline-flatlist'
import Screen from '../../components/Screen';
import {DataImport} from '../../api/database/affichage';
import colors from '../../config/colors';
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Planning=(props)=> {
 
  //state management
  const [data1, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(true);
  const [loading, setLoading] = useState(true);
  const onRefresh = React.useCallback(() => {
  //Importation de données apres refresh 
  const datum =  DataImport("planning").then((ee)=>{
      setData(ee);
      setRefreshing(false);
      setRefreshing(false)
    })
    
  }, []);
  // Suppression d'un entraineur
   
  

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
      <View>
          <Text>Aucun Planning dans la base de données</Text>
      </View>
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
    <View style={styles.MainContainer}>

      <Text style={styles.text}>Planning Annuel</Text>
    
      <Timeline
        data={data1}
        separator={true}
        circleSize={20}
        circleColor='#0091EA'
        lineColor='grey'
        timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:15}}
        style={styles.listStyle}
        descriptionStyle={{color:colors.bl}}
      />
      
    </View>
    </Screen>
   
    );
 }
 const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  listStyle: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20
  },

  text:{
    textAlign: 'center',
    fontSize: 24,
    marginTop: 20
  }

});
export default Planning;