import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Screen from "../../components/Screen";
import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../../components/forms";
import sepecialitePickerItem from "../../components/CategoryPickerItem";
import {AddData} from '../../api/database/insertion'
class MyClass extends Component {

  constructor(props){
    super(props);
    this.state = {
      
      categories:[
        {
          backgroundColor: "#fc5c65",
          icon: "floor-lamp",
          label: "Furniture",
          value: 1,
        },
        {
          backgroundColor: "#fd9644",
          icon: "car",
          label: "Cars",
          value: 2,
        },
        {
          backgroundColor: "#fed330",
          icon: "camera",
          label: "Cameras",
          value: 3,
        },
        {
          backgroundColor: "#26de81",
          icon: "cards",
          label: "Games",
          value: 4,
        },
        {
          backgroundColor: "#2bcbba",
          icon: "shoe-heel",
          label: "Clothing",
          value: 5,
        },
        {
          backgroundColor: "#45aaf2",
          icon: "basketball",
          label: "Sports",
          value: 6,
        },
        {
          backgroundColor: "#4b7bec",
          icon: "headphones",
          label: "Movies & Music",
          value: 7,
        },
        {
          backgroundColor: "#a55eea",
          icon: "book-open-variant",
          label: "Books",
          value: 8,
        },
        {
          backgroundColor: "#778ca3",
          icon: "application",
          label: "Other",
          value: 9,
        },
      ],
      textInput : [],
      button:[],
      inputData : []
    }
  }

  //function to add TextInput dynamically
  addTextInput = (index) => {
    let textInput = this.state.textInput;
    if(textInput.length>0)
    {textInput.push(<TextInput style={styles.extInput} 
    onChangeText={(text) => this.addValues(text, index,"crit"+index)}  /> );
    this.setState({ textInput });}
    
  }
  addCatInput=(index)=>{
    let textInput = this.state.textInput;
    let ajoutes=this.state.inputData
    console.log(ajoutes)
    let size=ajoutes.length-1
    console.log(size)
    if(size==-1)
    {
      textInput.push(    
        <TextInput style={styles.textInput} onChangeText={(text) => this.addValues(text, index,"cat"+index)}  />  
      );
      this.setState({ textInput });

     
    }
    else
{
  
if(!ajoutes[size]["rr"].startsWith("cat"))
   {
    
    textInput.push(    
      <TextInput style={styles.textInput} onChangeText={(text) => this.addValues(text, index,"cat"+index)}  />  
    );
    this.setState({ textInput });
    
   }
  }
  }
   

  //function to remove TextInput dynamically
  removeTextInput = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({ textInput,inputData });
  }

  //function to add text from TextInputs into single array
  addValues = (text, index,key) => {
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0){
      dataArray.forEach(element => {
        if (element.index === index ){
          element.text = text;
          
          checkBool = true;
        }
      });
    }
    if (checkBool){
    this.setState({
      inputData: dataArray
    });
  }
  else {
    dataArray.push({'text':text,'index':index,"rr":key});
    this.setState({
      inputData: dataArray
    });
  }
  }

  //function to console the output
  getValues = (values) => {
console.log(values.speciality)
    var indexes = [], i,j;
    var donnees=[];
    j=0;
    for(i = 0; i < this.state.inputData.length; i++)
        {
          if (this.state.inputData[i]["rr"].startsWith("cat"))
            {
              donnees.push({category:this.state.inputData[i]["text"],criteres:[]})
              j++;
            }else{
              donnees[j-1]["criteres"].push(this.state.inputData[i]["text"])
            }
        }

    
    
          


    
console.log('********************************************************')
  
      console.log(donnees)
     var  contenu=  AddData("criteres",values.speciality.label,{specialite:values.speciality.label,criteres:donnees}).then((reponse)=>{
        return "ok ajout"
      
     })
    
     
  }

  render(){
    return(
      <Screen>
        <View style={{margin: 10}}>
        <Form
        initialValues={{
         speciality: {value:5,label:"Clothing"}
        }}
        onSubmit={this.getValues}
        >
        <Picker
          items={this.state.categories}
          name="speciality"
          numberOfColumns={3}
          PickerItemComponent={sepecialitePickerItem}
          placeholder="Spécialité"
          
          width="50%"
        /> 
        <SubmitButton title= "Enregistrer" />
          <TouchableOpacity
         onPress={() => this.addCatInput(this.state.textInput.length)}
         style={{ backgroundColor: "#fc5c65",borderRadius: 25, justifyContent: "center",alignItems: "center",padding: 15,width: "100%",marginVertical: 10,}}
        >
          <Text style ={{color: "#fff"}}> + Catégorie </Text>

        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => this.addTextInput(this.state.textInput.length)}
         style={{ backgroundColor: "#fc5c65",borderRadius: 25, justifyContent: "center",alignItems: "center",padding: 15,width: "100%",marginVertical: 10,}}
        >
          <Text style ={{color: "#fff"}}> + Critère </Text>

        </TouchableOpacity>
</Form>
        </View>
        <ScrollView>
      <View>
        
        {this.state.textInput.map((value) => {
          
          return value
        })}
        
      </View>
      </ScrollView>
      <View style= {styles.row}>
          
        <View style={{margin: 10}}>
        <TouchableOpacity
         onPress={() => this.removeTextInput()}
         style={{ backgroundColor: "#fc5c65",borderRadius: 25, justifyContent: "center",alignItems: "center",padding: 15,width: "100%",marginVertical: 10,}}
        >
          <Text style ={{color: "#fff"}}> Remove </Text>

        </TouchableOpacity>
        
        </View>
        <TouchableOpacity
         onPress={() => this.getValues()}
         style={{ backgroundColor: "#fc5c65",borderRadius: 25, justifyContent: "center",alignItems: "center",padding: 15,width: "50%",height:50, marginVertical: 10,}}
        >
          <Text style ={{color: "#fff"}}> Enregistrer </Text>

        </TouchableOpacity>
       
        </View>
      </Screen>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonView: {
  flexDirection: 'row'
  },
  textInput: {
    backgroundColor: "#f8f4f4",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
},
extInput: {
  backgroundColor: "#f8c2f2",
  borderRadius: 25,
  flexDirection: "row",
  padding: 15,
  marginVertical: 10,
},
row:{
  flexDirection: 'row',
  justifyContent: 'center'
  },
});

export default MyClass;
/* import React, { useState } from "react";
import { StyleSheet,Text } from "react-native";
import * as Yup from "yup";
import {
  Form,
  FormField,
  SubmitButton,
} from "../../components/forms";
import {AddData} from '../../api/database/insertion'
import {UpdateData} from '../../api/database/miseajour'
import regUsers from '../../api/regUsers';
import Screen from "../../components/Screen";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
const validationSchema = Yup.object().shape({
name: Yup.number().required().min(10).label("Id"),
surname: Yup.string().required().min(1).max(10000).label("Lebelle"),

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
      contenu=  AddData("criteres",id,pl).then((reponse)=>{
        return "ok ajout"
      
     })
  } 
  
}



const Update_ad = ({ route , navigation}) => {
var op="Ajouter";
var Id="";
var Lebelle="";





const [id, setId] = useState(Id);
const [lebelle, setLebelle] = useState(Lebelle);
const [operation, setOperation] = useState();
const [error, setError] = useState('');
let item = null
  return ( 
    <Screen>
     
      <Form
        initialValues={{
          id:{Id},
          lebelle:{lebelle} ,
          
        }}

        onSubmit={(values) =>{
          storeUser("criteres",id,{lebelle:lebelle,id:id},op,values)
         
        } }
      >
        <FormField
          maxLength={20}
          name="id"
          placeholder="ID"
          keyboardType="numeric"
          defaultValue={Id}
          onChangeText={setId}/>
        <FormField          
          maxLength={20}
          name="lebelle"
          placeholder="lebelle"
          defaultValue={Lebelle}
          onChangeText={setLebelle}
        />
         
             
        <SubmitButton title= {op} />
      </Form>
      </Screen>
    
  );
}
export default Update_ad; */