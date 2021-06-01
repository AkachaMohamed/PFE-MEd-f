import React, { useState } from "react";
import { StyleSheet,Text } from "react-native";
import * as Yup from "yup";
import {
  Form,
  FormField,
  
  SubmitButton,
} from "../../components/forms";
import {AddData} from '../../api/database/insertion';
import {UpdateData} from '../../api/database/miseajour';

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
namec: Yup.string().required().min(10).label("Nomc"),
phonec:Yup.string().required().label("Téléphonec"),
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
  console.log(v)
  if(operation=="Ajouter")
  {    
     contenu=  AddData("parents",id,pl).then((reponse)=>{
   
     })
  } 
  else
  {
    contenu=  UpdateData("parents",id,pl).then((reponse)=>{    
    })
  }
}
  


const Updat_par = ({ route , navigation}) => {
var op="Ajouter";

var Nom="";
var Prenom="";
var Mail="";
var Tel="";
var Nomc="";
var Telc="";


if(route.params)
   {
     item = route.params.item;
     op="Modifier";
     
     
     Nom=item.nom;
     
     Prenom=item.prenom;
     Mail=item.mail;
     Tel=item.tel;
     Nomc=item.nomc;
     Telc=item.telc;
     
}
  


const [nom, setNom] = useState(Nom);
const [prenom, setPrenom] = useState(Prenom);
const [mail, setMail] = useState(Mail);
const [tel, setTel] = useState(Tel);
const [nomc, setNomc] = useState(Nomc);
const [telc, setTelc] = useState(Telc);
const [operation, setOperation] = useState();
const [error, setError] = useState('');
let item = null


   

  return ( 
    
     
      <Form
        initialValues={{
          name:{Nom},
          surname:{Prenom} ,
          email: {Mail},
          phone: {Tel},
          namec:{Nomc},
          phonec: {Telc},
          
        }}

        onSubmit={(values) => storeUser("parents",mail,{nom:nom,prenom:prenom,mail:mail,tel:tel,nomc:nomc,telc:telc},op,values)}
       
      >
        <FormField
          maxLength={20}
          name="name"
          placeholder="Nom"
          defaultValue={Nom}
          onChangeText={setNom}/>
        <FormField          
          maxLength={8}
          name="surname"
          placeholder="Prénom"
          defaultValue={Prenom}
          onChangeText={setPrenom}
        />
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
          name="phone"
          placeholder="Téléphone"
          keyboardType="numeric"
          defaultValue={Tel}
          onChangeText={setTel}          
          /> 
           <FormField
          maxLength={20}
          name="namec"
          placeholder="Nom conjoin"
          defaultValue={Nomc}
          onChangeText={setNomc}/>   
          <FormField
          maxLength={8}
          name="phonec"
          placeholder="Téléphone conjoin"
          keyboardType="numeric"
          defaultValue={Telc}
          onChangeText={setTelc}          
          />      
        <SubmitButton title= {op} />
      </Form>
    
  );



}
export default Updat_par;