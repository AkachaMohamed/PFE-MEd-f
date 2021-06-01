import React, { useState } from "react";
import { StyleSheet,Text } from "react-native";
import * as Yup from "yup";
import {
  Form,
  FormField,
  SubmitButton,
} from "../../components/forms";
import Screen from "../../components/Screen";
import {AddData} from '../../api/database/insertion'
import {UpdateData} from '../../api/database/miseajour'

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
const validationSchema = Yup.object().shape({
name: Yup.string().required().min(10).label("Id"),
surname: Yup.string().required().min(1).max(10000).label("Nom"),
phone:Yup.string().required().label("Nombre"),
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
     contenu=  AddData("specialite",id,pl).then((reponse)=>{
   
     })
  } 
  else
  {
    contenu=  UpdateData("specialite",id,pl).then((reponse)=>{    
    })
  }
}
  


const Update_spec = ({ route , navigation}) => {
  
var op="Ajouter";
var Id="";
var Nom="";
var Nombre="";


if(route.params)
   {
     item = route.params.item;
     op="Modifier";
     
     
     Id=item.id;
     Nom=item.nom;
     Nombre=item.nombre;
    
}
  


const [nom, setId] = useState(Id);
const [prenom, setNom] = useState(Nom);
const [tel, setNombre] = useState(Nombre);
const [operation, setOperation] = useState();
const [error, setError] = useState('');
let item = null


   

  return ( 
    
     <Screen>
      <Form
        initialValues={{
          id:{Id},
          nom:{Nom} ,
          nombre: {Nombre},
        }}

        onSubmit={(values) => storeUser("specialite",id,{id:id,nom:nom,nombre:nombre},op,values)}
       
      >
        <FormField
          maxLength={8}
          name="id"
          placeholder="Id"
          keyboardType="numeric"
          defaultValue={Id}
          onChangeText={setId}/>
        <FormField          
          maxLength={8}
          name="nom"
          placeholder="Nom"
          defaultValue={Nom}
          onChangeText={setNom}
        />
         <FormField          
          maxLength={90}
          name="nombre"
          placeholder="Nombre max par groupe "
          keyboardType="numeric"
          defaultValue={Nombre}
          onChangeText={setNombre}
          />
             
             
        <SubmitButton title= {op} />
      </Form>
      </Screen>
    
  );



}
export default Update_spec;
