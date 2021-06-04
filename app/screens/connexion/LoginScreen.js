import React, { useState } from "react";
import { StyleSheet, Image , Text } from "react-native";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../../components/forms";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ActivityIndicator from "../../components/ActivityIndicator";
 import authApi from "../../api/auth";
import useAuth from "../../auth/useAuth"; 

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.hasOwnProperty("email"))
    {
      
      return setLoginFailed(true);
      
    }
    setLoginFailed(false);
    console.log(result.email)
    auth.logIn(result.tok.i);
if(result.role=="Trainer")
props.navigation.navigate("Admin")

else if (result.role=="DirecteurSportif"){
props.navigation.navigate("DirecteurSportif")
}
else if (result.role=="Admin"){
props.navigation.navigate("Admin")
}
else 
props.navigation.navigate("Parent")
  }; 
  return (
        <Screen style={styles.container}>
      <ScrollView>
      <Image style={styles.logo} source={require("../../assets/LOGO2.png")} />
      <Text style={{fontSize: 25,fontWeight: "600",alignSelf:"center", paddingVertical: 20,}}>Champions Steps</Text>

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        { <ErrorMessage
          error="Email/Mot de passe invalide."
          visible={loginFailed}
        /> }
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
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
         <TouchableOpacity>

          <Text style={{alignSelf: "center"}}> Forget Password?</Text>
        </TouchableOpacity> 
      </Form>
      </ScrollView>
    </Screen>

  
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
