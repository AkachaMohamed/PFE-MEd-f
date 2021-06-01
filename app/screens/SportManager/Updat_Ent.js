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
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
const validationSchema = Yup.object().shape({
name: Yup.string().required().min(10).label("Nom"),
surname: Yup.string().required().min(1).max(10000).label("Prénom"),
email: Yup.string().email().required().label("Email"),
phone:Yup.string().required().label("Téléphone"),
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
      contenu=  AddData("trainers",id,pl).then((reponse)=>{
        return "ok ajout"
      
     })
  } 
  else
  {
    contenu=  UpdateData("trainers",id,pl).then((reponse)=>{  
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
var Nom="";
var Prenom="";
var Mail="";
var Tel="";
var Spec="";
var SpecID=0;
try{
if(typeof route.params!="undefined")

   {
     item = route.params.item;
     op="Modifier";   
     Nom=item.nom;     
     Prenom=item.prenom;
     Mail=item.mail;
     Tel=item.tel;
     Spec=item.specialite;
     SpecID=getID(Spec,data1)
}
}catch(error){

}


const [nom, setNom] = useState(Nom);
const [prenom, setPrenom] = useState(Prenom);
const [mail, setMail] = useState(Mail);
const [tel, setTel] = useState(Tel);
const [operation, setOperation] = useState();
const [specialite, setSpecialite] = useState({value:SpecID,label:Spec});
const [error, setError] = useState('');
let item = null


   

  return ( 
    
     
      <Form
        initialValues={{
          name:{Nom},
          surname:{Prenom} ,
          email: {Mail},
          phone: {Tel},
          speciality:{value:SpecID,label:Spec}
        }}

        onSubmit={(values) => {
            storeUser("trainers",mail,{nom:nom,prenom:prenom,specialite:values.speciality.label,mail:mail,tel:tel},op,values)
            
                    
                    const result =regUsers(mail,"azerty12","Trainer") 
                    console.log("fini")
      
        }}
       
      >
        <FormField
          maxLength={20}
          name="name"
          placeholder="Nom"
          icon="account"
          defaultValue={Nom}
          onChangeText={setNom}/>
        <FormField          
          maxLength={20}
          name="surname"
          placeholder="Prénom"
          icon="account"
          defaultValue={Prenom}
          onChangeText={setPrenom}
        />
         <FormField          
          maxLength={40}
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          icon="email"
          defaultValue={Mail}
          onChangeText={setMail}
          />
        <FormField
          maxLength={8}
          name="phone"
          placeholder="Téléphone"
          icon="phone"
          keyboardType="numeric"
          defaultValue={Tel}
          onChangeText={setTel}          
          />       
      <Picker
          items={data1}
          name="speciality"
          numberOfColumns={3}
          PickerItemComponent={sepecialitePickerItem}
          placeholder="Spécialité"
          
          width="50%"
        />  
        <SubmitButton title= {op} />
      </Form>
    
  );



}
export default Updat_Ent;
