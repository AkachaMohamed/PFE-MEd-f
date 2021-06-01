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
import regUsers from '../../api/regUsers';


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
//---------------------------------------------------
function storeUser(table,id,pl,operation,v) {
  var contenu=""
  console.log("----------------------------------8888")
  if(operation=="Ajouter")
  {    
      contenu=  AddData("spmanagers",id,pl).then((reponse)=>{
        return "ok ajout"
      
     })
  } 
  else
  {
    contenu=  UpdateData("spmanagers",id,pl).then((reponse)=>{  
      return "ok modif"  
    })
  }
}

const majds = ({ route , navigation}) => {
var op="Ajouter";
var Nom="";
var Prenom="";
var Mail="";
var Tel="";
try{
  if(typeof route.params!="undefined")
   {
     item = route.params.item;
     op="Modifier";
     
     
     Nom=item.nom;
     
     Prenom=item.prenom;
     Mail=item.mail;
     Tel=item.tel;
    }
  }catch(error){
  
  }
  


const [nom, setNom] = useState(Nom);
const [prenom, setPrenom] = useState(Prenom);
const [mail, setMail] = useState(Mail);
const [tel, setTel] = useState(Tel);
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
        }}


        onSubmit={(values) =>{ 
          storeUser("spmanagers",mail,{nom:nom,prenom:prenom,mail:mail,tel:tel},op,values)
             console.log("fini")
                 const result =regUsers(mail,"azerty12","DirecteurSportif") 
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
          maxLength={8}
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
             
        <SubmitButton title= {op} />
      </Form>
    
  );



}
export default majds;