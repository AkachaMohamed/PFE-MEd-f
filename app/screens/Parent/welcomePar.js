import React from 'react';
import { ImageBackground, Text , Image} from 'react-native';
import Screen from "../../components/Screen";
import colors from '../../config/colors';

function AcceuilAD(props) {
    return (
        <Screen>
        <ImageBackground source={require('../../assets/bgg11.jpg')}
        style={{ flex: 1,
            resizeMode: "cover",
            justifyContent: "center"}}
        >
            <Text style={{color: colors.white, fontSize: 25, alignSelf:"center", marginTop: 130 }}>welcome Monsieur </Text>
            
        </ImageBackground>
       
        </Screen>
    );
}

export default AcceuilAD;
