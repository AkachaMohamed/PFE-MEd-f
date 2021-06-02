import React, {Component,useEffect,useState,useRef} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import Accordian from '../../components/Accordian'
import  Colors  from '../../config/colors';
import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton
} from "../../components/forms";
//npm install -g expo-cli
//@react-native-community/datetimepicker
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

const abonnes=['mohamed akacha','khalil elwaer','jamel akacha']
export default function App() {
  const[currentAbonne,setCurrent]=useState(0)
  function renderAccordians(){
    const itemst = [];
    let i=0
    for(const ab of abonnes)
    {
      const items=[]
      for (const item of menu) {
        i++
        console.log(i+'-------------')
        items.push(
            <Accordian 
            key={i}
                title = {item.title}
                data = {item.data}
                num={i}
            />
        );
      }
      itemst.push(items)
    }
    setItem(itemst)
    return itemst   
  }
  const first=()=>{
    console.log('fffffffffffffffffffffffffff')
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
    console.log('pppppppppppppppppppppppp')  
    if(currentAbonne>0)
      setCurrent(currentAbonne-1)
  }
  const [items1,setItem] = useState([]);

 

const handleSubmitted = ({ res, fields, form }) => {

  form.reset() // resets "username" field to "admin"
  next()
}
return (
  
      <View style={styles.container}>
        
        {}
        <Text>{abonnes[currentAbonne]}</Text>
        <Button
        title="Next"
        onPress={()=>next()}
        />
        <Button
        title="previous"
        onPress={()=>previous()}
        />
        <Form
         onSubmit={handleSubmitted()}
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
   backgroundColor:Colors.primary,
   
  }
});