import React, {Component,useEffect,useState,useRef} from 'react';
import { StyleSheet, Text, View,Button , TouchableOpacity , Image} from 'react-native';
import Accordian from '../../components/Accordian';
import  Colors  from '../../config/colors';
import {DataImport} from '../../api/database/affichage';
import {AddData} from '../../api/database/insertion';
import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton
} from "../../components/forms";
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

//**************************************************

export default function App(){
//____******************************************fffffffffff 
  /* function datum (){
 const x = DataImport("abonnement").then((T)=>{
      console.log("______________________________",T)
      var donnees=[]
     /*  T.forEach(element => {
        donnees.push(element.prenom+" "+element.nom)
        //console.log(element)
      }); *//*
      return T;
      
    })
  return x ;
  } */
  function datum1 (){
    const x = DataImport("criteres").then((T)=>{
         //console.log("______________________________",T)
         var donnees=[]
        /*  T.forEach(element => {
           donnees.push(element.prenom+" "+element.nom)
           //console.log(element)
         }); */
         return T;
         
       })
     return x ;
     }

  const[abonnes,setAbonnes]=useState(['mmm','ddddd'])
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
 

  function storeUser(table ,id,pl) {
    var contenu=""
    console.log("----------------------------------8888")
    contenu=  AddData("evaluation",pl).then((reponse)=>{
          return "ok ajout" 
       })
     
   
  }

const handleSubmitted = (values) => {
  console.log(values)
let x=items1
storeUser("evaluation",id,{Scores:values})
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
        onPress={()=>previous()}
        >
          <Image
                source={require("../../assets/inf.jpg")}
                style={{width: 50, height: 30,borderRadius: 42 , marginLeft:-20}}
               />

        </TouchableOpacity>
        <Text style={{fontSize:25}}>{abonnes[currentAbonne]}</Text>
        <TouchableOpacity
          onPress={()=>next()}
        >
          <Image
                source={require("../../assets/sup.jpg")}
                style={{width: 50, height: 30,borderRadius: 50}}
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