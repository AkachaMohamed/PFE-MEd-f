import React, { useState } from "react";
import { StyleSheet,Text } from "react-native";
import * as Yup from "yup";
import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../../components/forms";
import sepecialitePickerItem from "../../components/CategoryPickerItem";
import {AddData} from '../../api/database/insertion'
import {UpdateData} from '../../api/database/miseajour'
import {DataImport} from '../../api/database/affichage'

import regUsers from '../../api/regUsers'
import Screen from "../../components/Screen";
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
const validationSchema = Yup.object().shape({
id: Yup.string().required().min(10).label("Id"),
time: Yup.string().required().min(1).max(10000).label("Time"),
title: Yup.string().required().min(1).max(10000).label("Title"),
description: Yup.string().required().min(1).max(10000).label("Description"),
sepeciality: Yup.object().required().nullable().label("Spécialité"),
});
function getID(val,jsl)
{
  var needle = val;
var ret=0;
// iterate over each element in the array
for (var i = 0; i < jsl.length; i++){
  // look for the entry with a matching `code` value
  if (jsl[i].label.toLowerCase() == needle.toLowerCase()){
     ret=jsl[i].value
  }
}
return ret
}
//---------------------------------------------------
function storeUser(table,id,pl,operation,v) {
  var contenu=""
  console.log("----------------------------------8888")
  if(operation=="Ajouter")
  {    
      contenu=  AddData("planning",id,pl).then((reponse)=>{
        return "ok ajout"
      
     })
  } 
  else
  {
    contenu=  UpdateData("planning",id,pl).then((reponse)=>{  
      return "ok modif"  
    })
  }
}
  
function datum (){
  let d= []
  const x= DataImport("specialite").then((ee)=>{
    
    ee.forEach(element => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);  
    d.push({value:parseInt(element["id"]),backgroundColor:'#'+randomColor,label:element["nom"],icon:"karate"})
  });   
   return d
  })




return d
} 


const Updat_Ent = ({ route , navigation}) => {
  const x=datum()
 
  const [data1, setData] = useState(x);
  
var op="Ajouter";
var ID="";
var Id="";
var Time="";
var Title="";
var Description	="";
var Spec="";
var SpecID=0;



const [time, setTime] = useState(Title);
const [title, setTitle] = useState(Title);
const [description, setDescription] = useState(Description);
const [id, setId] = useState(Id);
const [operation, setOperation] = useState();
const [specialite, setSpecialite] = useState({value:SpecID,label:Spec});
const [error, setError] = useState('');
let item = null


   

  return ( 
    
     <Screen>
      <Form
        initialValues={{
          time:{Time},
          title:{Title} ,
          id: {Id},
          description: {Description},
          speciality:{value:SpecID,label:Spec}
        }}

        onSubmit={(values) => 
            storeUser("planning",id,{time:time,title:title,description:description,specialite:values.speciality.label,id:id},op,values)
            
                   
      
        }
       
      >
       <Picker
          items={data1}
          name="speciality"
          numberOfColumns={3}
          PickerItemComponent={sepecialitePickerItem}
          placeholder="Spécialité"
          
          width="50%"
        />    
        <FormField          
          maxLength={5}
          name="id"
          placeholder="ID"
          defaultValue={Id}
          onChangeText={setId}
          />
        <FormField
          maxLength={10}
          name="time"
          placeholder="Time"
          defaultValue={Time}
          onChangeText={setTime}/>
        <FormField          
          maxLength={20}
          name="title"
          placeholder="Title"
          defaultValue={Title}
          onChangeText={setTitle}
        />
        
        <FormField
          maxLength={255}
          name="desciption"
          placeholder="Descripton"
          defaultValue={Description}
          onChangeText={setDescription}          
          />       
             
        <SubmitButton title= {op} />
      </Form>
      </Screen>
    
  );



}
export default Updat_Ent;
