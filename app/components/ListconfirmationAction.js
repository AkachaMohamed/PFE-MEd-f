import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ListItemUpdatAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="check"
          size={35}
          color={colors.white}
        />

      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#28a745",
    width: 70,
  
    paddingBottom: 8,
    justifyContent:"center",
    alignItems: "center",
  },
});

export default ListItemUpdatAction;
