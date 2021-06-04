  import React, { useState } from "react";
import { AppLoading } from "expo";
import Connexion_Nav from "./app/navigation/ConnxionNav";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";
import navigationTheme from "./app/navigation/navigationTheme";
import { NavigationContainer } from "@react-navigation/native";
import Dsnav from './app/screens/SportManager/DSNAV'
 

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
     
        {user ? <Dsnav /> : <Connexion_Nav/>}
     
    </AuthContext.Provider>
  
   );
   
} 
  
