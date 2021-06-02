import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import firebase from "../Config/fire";


import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";


//firestore
const Ajout_Ent = () => {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
  });
  const validationSchema = Yup.object().shape({
    nom: Yup.string().required().min(1).label("nom"),
   prenom: Yup.number().required().min(1).max(10000).label("Price"),
    mail: Yup.string().label("mail"),
    category: Yup.object().required().nullable().label("Category"),
  });
  
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
      label: "Other",
      value: 9,
    },
  ];
const dbRef = firebase.firestore().collection('produit');
const [nom, setnom] = useState('');
const [mail, setmail] = useState('');
const [price, setPrice] = useState('');
const [category, setCategory] = useState('');
const [error, setError] = useState('');
const storeUser=async () => {
 
         
    dbRef.add({
      nom: nom,
      category: category,
     prenom:prenom,
      mail: mail,
    }).then((res) => {
      console.log("yar7am weldik")
    })
    .catch((err) => {
      console.error("Error found: ", err);
      this.setState({
        isLoading: false,
      });
    });
  
}
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          nom: "",
         prenom: "",
          mail: "",
          category: null,
        }}
        onSubmit={() => storeUser()}
       
      >
        <FormField
          maxLength={20}
          name="nom"
          placeholder="Nom"  
          onChangeText={setnom}/>
        <FormField
          
          maxLength={8}
          name="Price"
          placeholder="Prenom"
          
          onChangeText={setPrice}
        />
        <FormField
          
          maxLength={30}
          name="mail"
          placeholder="Tel"
          
          />
        <FormField
          
          maxLength={30}
          name="mail"
          placeholder="E_mail"

          
          
        />
        <Picker
          items={categories}
          name="Category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Spécialité"
          width="50%"
          onChangeText={setCategory}
        />
        
        <SubmitButton nom="Ajouter" />
      </Form>
    </Screen>
  );



}
export default Ajout_Ent;
