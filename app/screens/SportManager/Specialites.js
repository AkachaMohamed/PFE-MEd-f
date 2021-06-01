import React, { useState } from "react";
import { StyleSheet,Text } from "react-native";
import * as Yup from "yup";
import {
  Form,
  FormField,
   SubmitButton,
} from "../../components/forms";
import {AddData} from '../../api/database/insertion'
import {UpdateData} from '../../api/database/miseajour'

import Screen from "../../components/Screen";
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
const validationSchema = Yup.object().shape({
nom: Yup.string().required().min(10).label("Nom"),
nombre: Yup.string().required().min(1).max(10000).label("Nombre"),
id:Yup.string().required().label("Id"),
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
      contenu=  AddData("specialite",id,pl).then((reponse)=>{
        return "ok ajout"
      
     })
  } 
  else
  {
    contenu=  UpdateData("specialite",id,pl).then((reponse)=>{  
      return "ok modif"  
    })
  }
}
  


const Updat_Ent = ({ route , navigation}) => {
  
var op="Ajouter";
var ID="";
var Nom="";
var Nombre="";
var Id="";

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
     SpecID=getID(Spec,categories)
}
}catch(error){

}


const [nom, setNom] = useState(Nom);
const [nombre, setNombre] = useState(Nombre);
const [id, setId] = useState(Id);
const [operation, setOperation] = useState();
const [error, setError] = useState('');
let item = null


   

  return ( 
    
     <Screen>
      <Form
        initialValues={{
          nom:{nom},
          nombre:{nombre} ,
          id: {id},
         
        }}

        onSubmit={(values) => 
            storeUser("specialite",nom,{nom:nom,nombre:nombre,id:id},op,values)
            
                    
      
        }
       
      >
          <FormField          
          maxLength={40}
          name="id"
          placeholder="ID"
          defaultValue={Id}
          onChangeText={setId}
          />
       
        <FormField
          maxLength={20}
          name="nom"
          placeholder="Nom du specialite"
          defaultValue={Nom}
          onChangeText={setNom}/>
        <FormField          
          maxLength={20}
          name="nombre"
          placeholder="Nombre Max par grupe"
          defaultValue={Nombre}
          onChangeText={setNombre}
        />
       
        <SubmitButton title= {op} />
      </Form>
      </Screen>
    
  );



}
export default Updat_Ent;