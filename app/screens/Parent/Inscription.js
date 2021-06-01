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
import DatePicker from 'react-native-datepicker'
import {AddData} from '../../api/database/insertion'
import {UpdateData} from '../../api/database/miseajour'
import {DataImport} from '../../api/database/affichage'
import SelectPicker from 'react-native-form-select-picker';

import Screen from "../../components/Screen";
import colors from "../../config/colors";
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
  
      
      contenu=  AddData("abonnement",id,pl).then((reponse)=>{
        return "ok ajout"
      
     })
   
 
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
const options = ["1", "3", "6" , "12"];
const Updat_Ent = ({ route , navigation}) => {
 
  const x=datum()
 
  const [data1, setData] = useState(x);
  
var op="Inscription";
var ID="";
var Nom="";
var Prenom="";
var Mail="";
var Tel="";
var Spec="";
var per="";
var SpecID=0;

const [nom, setNom] = useState(Nom);
const [dte, setDte] = useState(new Date());
const [prenom, setPrenom] = useState(Prenom);
const [mail, setMail] = useState(Mail);
const [tel, setTel] = useState(Tel);
const [operation, setOperation] = useState();
const [specialite, setSpecialite] = useState({value:SpecID,label:Spec});
const [error, setError] = useState('');
let item = null

const [selected, setSelected] = useState();
  return ( 
    
     <Screen>
      <Form
        initialValues={{
          name:{Nom},
          surname:{Prenom} ,
          email: {Mail},
          phone: {Tel},
          speciality:{value:SpecID,label:Spec}
        }}
        onSubmit={(values) =>{
           var h=new Date(dte)
          var newDate = new Date(h.setMonth(h.getMonth()+parseInt(selected)));
          console.log(selected)
          storeUser("abonnement",mail,{nom:nom,prenom:prenom,specialite:values.speciality.label,periode:parseInt(selected),date_debut:dte,date_fin:newDate,mail:mail,tel:tel,etat:"En Attente"},op,values)}
        }

            >
        <FormField
          maxLength={20}
          name="name"
          placeholder="Nom"
          icon="account"
          onChangeText={setNom}/>
        <FormField          
          maxLength={20}
          name="surname"
          placeholder="Prénom"
          icon="account"
          onChangeText={setPrenom}
        />
         <FormField          
          maxLength={40}
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          icon="mail"
          onChangeText={setMail}
          />
        <FormField
          maxLength={8}
          name="phone"
          placeholder="Téléphone"
          keyboardType="numeric"
          icon="phone"
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
        
        <DatePicker
        style={{width: 200, height: 40 ,backgroundColor:colors.light , borderRadius:35 , margin: 10 }}
        
        mode="date"
        date={dte}
        minDate={new Date()}
        onDateChange={(date) => {setDte(date)
        console.log(date)
        
        }}
        
      />
      
      <SelectPicker
      style={{backgroundColor:colors.light  ,width:200 , borderRadius:35}}
      placeholder="select periode "
			onValueChange={(value) => {
				
				setSelected(value);
			}}
			selected={selected}
			>
			 <Text> select peiode</Text>
			{Object.values(options).map((val, index) => (
				<SelectPicker.Item label={val} value={val} key={index} />
			))}

		</SelectPicker>
      
        <SubmitButton title= {op} />
      </Form>
      </Screen>
    
  );



}
export default Updat_Ent;