/*  import React, { useState } from "react";
import { AppLoading } from "expo";
import Connexion_Nav from "./app/navigation/ConnxionNav";
import TrainerList from './app/screens/connexion/RegisterScreen';
import AdminNav from './app/screens/Administrator/Parents';
import AddPlanning from "./app/screens/SportManager/Add_Criters";
import Addcriteres from "./app/screens/Trainer/Evaluation";
import TrainerNav from "./app/screens/Trainer/trainerNAV";
import R from "./app/components/Accordian";
import Quinous from "./app/screens/connexion/Welcome1";
import Confirmation from "./app/screens/Administrator/confirmation";
import Iscription from "./app/screens/Parent/Inscription";
import Updat_Ent from "./app/screens/Parent/Inscription";
import aluation from "./app/screens/Parent/Evaluationfils";




 

export default function App() {
  return (
  <AddPlanning/>
   );
   
} 
  */
import React, {Component,useEffect,useState,useRef} from 'react';
import { StyleSheet, Text, View,Button , TouchableOpacity , Image} from 'react-native';
import Accordian from './app/components/Accordian';
import  Colors  from './app/config/colors';
import {DataImport} from './app/api/database/affichage';

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton
} from "./app/components/forms";
import { set } from 'react-native-reanimated';

const menu =[
  { 
    title: 'Physique', 
    data: ['Longueur','Poids'],
  },
  { 
    title: 'Ecartement du jeu',
    data: ['longues passes','passes courtes']
  },
  { 
  title: 'Maîtrise du ballon',
  data: ['dribble']
  }
]
//Importation de données apres refresh 
const datum =  DataImport("criteres").then((ee)=>{
  setData(ee);
  
})
//**************************************************

export default function App(){
  const[abonnes,setAbonnes]=useState(['mohamed akacha','khalil elwaer','jamel akacha'])
  const[currentAbonne,setCurrent]=useState(0)
  const [items1,setItem] = useState([]);
  const  renderAccordians=()=>{
    if(items1.length==0)
    {const itemst = [];
    
    let j=100;
    let k=0
    let i=0
    for(const ab of abonnes)
    {
      
      i++
      const items=[]
      for (const item of menu) {
        k++
        items.push(
            <Accordian 
            key={k}
                title = {item.title}
                data = {item.data}
                num={i+j}
            />
        );
        
      }
      j=parseInt(j/100)*100+100
      itemst.push(items)
    }
    
    setItem(itemst)
    return itemst  
  }
  else
  return items1 
  }
  const first=()=>{
    if(currentAbonne===0)
      return abonnes[0]
      return abonnes[currentAbonne];
  }
  const next=()=>{   
    console.log('nnnnnnnnnnnnnnnnnnnnnnnn')
    if(currentAbonne<abonnes.length-1)
      setCurrent(currentAbonne+1)  
  }
  let previous=()=>{ 
    console.log('pppppppppppppppppppppppp',currentAbonne-1)  
    if(currentAbonne>0)
      setCurrent(currentAbonne-1)
  }
 

 

const handleSubmitted = (values) => {
let x=items1
/* let y=abonnes
y.shift() */

/* let ca=currentAbonne


if(ca==abonnes.length)
setCurrent(abonnes.length-1)
else
setCurrent(++ca)
console.log(currentAbonne)
x.shift()
setItem(x) */

next()
return true
}
return (
  
      <View style={styles.container}>
        
        {}
        
        <View style={{ flexDirection: 'row',justifyContent: 'center'}}>
        <TouchableOpacity
        onPress={()=>next()}
        >
          <Image
                source={require("./app/assets/inf.jpg")}
                style={{width: 50, height: 50,borderRadius: 42 , marginLeft:-20}}
               />

        </TouchableOpacity>
        <Text>{abonnes[currentAbonne]}</Text>
        <TouchableOpacity
          onPress={()=>previous()}
        >
          <Image
                source={require("./app/assets/sup.jpg")}
                style={{width: 50, height: 50,borderRadius: 50}}
               />

        </TouchableOpacity>
        </View>
       
        <Form
         onSubmit={handleSubmitted}
          initialValues={{
                                 
          }}
          
        >
         
        {items1.length==0?renderAccordians()[currentAbonne]:items1[currentAbonne]}
        <SubmitButton title= "Enregistrer" />
        </Form>
      </View>
    );
  }

  


const styles = StyleSheet.create({
  container: {
    
   flex:1,
   paddingTop:100,
   backgroundColor:Colors.white,
   
  }
});