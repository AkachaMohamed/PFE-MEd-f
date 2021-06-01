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

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
const validationSchema = Yup.object().shape({
name: Yup.string().required().min(10).label("Nom"),
surname: Yup.string().required().min(1).max(10000).label("Prénom"),
email: Yup.string().email().required().label("Email"),
phone:Yup.number().required().label("Téléphone"),
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
  console.log(v)
  if(operation=="Ajouter")
  {    
     contenu=  AddData("abonnements",id,pl).then((reponse)=>{
   
     })
  } 
  else
  {
    contenu=  UpdateData("abonnements",id,pl).then((reponse)=>{    
    })
  }
}
  


const Updat_Ent = ({ route , navigation}) => {
var op="Ajouter";
var ID="";
var Nom="";
var Prenom="";
var Mail="";
var Tel="";
var Spec="";
var SpecID=0;

if(route.params)
   {
     item = route.params.item;
     op="Modifier";
     
     
     Nom=item.nom;
     
     Prenom=item.prenom;
     Mail=item.mail;
     Tel=item.tel;
     Spec=item.specialite;
     SpecID=getID(Spec,categories)
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

        onSubmit={(values) => storeUser("abonnements",mail,{nom:nom,prenom:prenom,specialite:values.speciality.label,mail:mail,tel:tel},op,values)}
       
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
          icon="email"
          keyboardType="mail-address"
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
          items={categories}
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
export default Updat_Ab;