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

import regUsers from '../../api/regUsers'
import Screen from "../../components/Screen";
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
const validationSchema = Yup.object().shape({
name: Yup.string().required().min(10).label("Nom"),
Crit1: Yup.string().required().min(10).label("Crit1"),
email: Yup.string().email().required().label("Email"),
Crit2: Yup.string().required().min(10).label("Crit2"),
Crit3: Yup.string().required().min(10).label("Crit3"),
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
      contenu=  AddData("evaluation",id,pl).then((reponse)=>{
        return "ok ajout"
      
     })
  } 
 
}
  

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "karate",
    label: "karate",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "football",
    label: "Rugby",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "swim",
    label: "Swiming",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "basketball-hoop-outline",
    label: "basket_ball",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "dumbbell",
    label: "Body_bulding",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "foot_ball",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "hockey-sticks",
    label: "hockey",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "run-fast",
    label: "Run_Fast",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "judo",
    value: 9,
  },
];
const Updat_Ent = ({ route , navigation}) => {
  
var op="Ajouter";
var ID="";
var Nom="";
var Mail="";
var Crit1="";
var Crit3="";
var Crit2="";
var Spec="";
var SpecID=0;



const [nom, setNom] = useState(Nom);
const [mail, setMail] = useState(Mail);
const [crit1, setCrit1] = useState(Crit1);
const [crit2, setCrit2] = useState(Crit2);
const [crit3, setCrit3] = useState(Crit3);
const [operation, setOperation] = useState();
const [specialite, setSpecialite] = useState({value:SpecID,label:Spec});
const [error, setError] = useState('');
let item = null


   

  return ( 
    
     <Screen>
      <Form
        initialValues={{
          name:{Nom},
          email: {Mail},
          crit1: {Crit1},
          crit2: {Crit2},
          crit3: {Crit3}, 
          speciality:{value:SpecID,label:Spec}
        }}

        onSubmit={(values) => 
            storeUser("evaluation",mail,{nom:nom,crit1:crit1,crit2:crit2,crit3:crit3,specialite:values.speciality.label,mail:mail},op,values)}
       
      >
          <Picker
          items={categories}
          name="speciality"
          numberOfColumns={3}
          PickerItemComponent={sepecialitePickerItem}
          placeholder="Spécialité"
          
          width="50%"
        /> 
        <FormField
          maxLength={20}
          name="name"
          placeholder="Nom"
          defaultValue={Nom}
          onChangeText={setNom}/>
        
         <FormField          
          maxLength={40}
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          defaultValue={Mail}
          onChangeText={setMail}
          />
          <FormField          
          maxLength={8}
          name="crit1"
          placeholder="Poids"
          defaultValue={Crit1}
          onChangeText={setCrit1}
        />
        <FormField          
          maxLength={8}
          name="crit1"
          placeholder="Rapport musulaire"
          defaultValue={Crit2}
          onChangeText={setCrit2}
        />
        <FormField          
          maxLength={8}
          name="crit1"
          placeholder="Raport physique"
          defaultValue={Crit3}
          onChangeText={setCrit3}
        />
            
              
        <SubmitButton title= {op} />
      </Form>
      </Screen>
    
  );



}
export default Updat_Ent;