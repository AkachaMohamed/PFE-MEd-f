import React, { useState } from "react";
import { StyleSheet,Switch,View,Text,TouchableHighlight, Alert } from "react-native";
import * as Yup from "yup";
const yup = require('yup')
const {
  setLocale
} = yup

setLocale({
  mixed: {
    notType: 'the ${path} is obligatory',
    required: 'the field ${path} is obligatory',
    oneOf: 'the field ${path} must have one of the following values: ${values}'
  }
})
import Screen from "../../components/Screen";
import usersApi from "../../api/users";
import authApi from "../../api/auth";
// import useAuth from "../../auth/useAuth";
import {ErrorMessage,Form,FormField,SubmitButton,} from "../../components/forms";
import useApi from "../../hooks/useApi";
import ActivityIndicator from "../../components/ActivityIndicator";
import { ScrollView } from "react-native-gesture-handler";
import {AddData} from '../../api/database/insertion'
import colors from "../../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  phoneConjoint: Yup.string()
               .when('isSelected', { // Change approvalState to string
                 is: true,
                 then: Yup.string().required('Comments are required when denying an approval.'),
               }),
  
});

function RegisterScreen() {
  
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);

  const [error, setError] = useState();
  const handleSubmit = async (userInfo) => {
    
  const result = await registerApi.request(userInfo)
  if (result.ok)
  {
    var contenu=  AddData("parents",userInfo.email,userInfo).then((reponse)=>{
    return "ok ajout"
  
 })
 return contenu
}else
{
  console.log("not ok")
}
  
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <ScrollView>
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Pr??nom"            
          />  
          <FormField
            autoCorrect={false}
            icon="account"
            name="surname"
            placeholder="Nom"            
          />        
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            maxLength={8}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            icon="phone"
            name="phone"
            placeholder="T??l??phone"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <Text style={{color:colors.secondary, fontSize : 17}}>les champs de conjoint son alternatives : </Text>
          <FormField
            autoCorrect={false}
            icon="account"
            name="name2"
            placeholder="Pr??nom conjoint"            
          />  
          <FormField
            autoCorrect={false}
            icon="account"
            name="surname2"
            placeholder="Nom Conjoint"            
          /> 
          <FormField
            maxLength={8}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            icon="phone"
            name="phoneConjoint"
            placeholder="T??l. Conjoint"
          />
              
          
          <SubmitButton title="Register" />
        </Form>
        </ScrollView>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  checkboxContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default RegisterScreen;
/* /*import React, { useState } from "react";
import { StyleSheet,Switch,View,Text,TouchableHighlight, Alert } from "react-native";
import * as Yup from "yup";
const yup = require('yup')
const {
  setLocale
} = yup

setLocale({
  mixed: {
    notType: 'the ${path} is obligatory',
    required: 'the field ${path} is obligatory',
    oneOf: 'the field ${path} must have one of the following values: ${values}'
  }
})
import Screen from "../../components/Screen";
import usersApi from "../../api/users";
import authApi from "../../api/auth";
import {ErrorMessage,Form,FormField,SubmitButton,} from "../../components/forms";
import useApi from "../../hooks/useApi";
import ActivityIndicator from "../../components/ActivityIndicator";
import { ScrollView } from "react-native-gesture-handler";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  phoneConjoint: Yup.string()
               .when('isSelected', { // Change approvalState to string
                 is: true,
                 then: Yup.string().required('Comments are required when denying an approval.'),
               }),
  
});

function _renderCancel  (isSelected) {
  /* Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  ); */
  /*
  if (isSelected==true) {
    return (
          
            <View>
            
          <FormField
            autoCorrect={false}
            icon="account"
            name="name2"
            placeholder="Pr??nom conjoint"            
          />  
          <FormField
            autoCorrect={false}
            icon="account"
            name="surname2"
            placeholder="Nom Conjoint"            
          /> 
          <FormField
            maxLength={8}
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            name="phoneConjoint"
            placeholder="T??l. Conjoint"
          />
            </View>
          
    );
      
  } else {
      return null;
  }
}
function RegisterScreen() {
  const [isSelected, setSelection] = useState(true);
  const toggleSwitch = () => setSelection(isSelected => !isSelected);
  
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  // const f = useAuth();
  const [error, setError] = useState();
  if (isSelected) {
    validationSchema.conj=Yup.object().shape({
      phoneConjoint: Yup.string().required().label("phone conjoint"),
    })
  }
  const handleSubmit = async (userInfo) => {
  const result = await registerApi.request(userInfo);

  /* if (!result.ok) {
    if (result.data) setError(result.data.error);
    else {
      setError("An unexpected error occurred.");
    }
    return;
  }
 */
  //const { data: authToken } = await loginApi.request(
    /* const { token } = await loginApi.request(
      userInfo
    );
    auth.logIn(authToken); 
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <ScrollView>
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Pr??nom"            
          />  
          <FormField
            autoCorrect={false}
            icon="account"
            name="surname"
            placeholder="Nom"            
          />        
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            name="phone"
            placeholder="T??l??phone"
            keyboardType="numeric"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <View style={styles.checkboxContainer}>
            <Text>Ajouter des coordonn??es alternatives</Text>
          <Switch name="conjoint" value={isSelected} onValueChange={toggleSwitch}
          
          
          />
          </View>         */
        /*
      {/* <Text>Is CheckBox selected: {isSelected ? "????" : "????"}</Text> */
      /*{_renderCancel(isSelected)}      
          
          <SubmitButton title="Register" />
        </Form>
        </ScrollView>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  checkboxContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default RegisterScreen;
 */