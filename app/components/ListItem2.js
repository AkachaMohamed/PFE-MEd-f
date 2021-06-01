import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";

function ListItem({
  nom,
  mail,
  crit1,
  crit2,
  crit3,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          
          <View style={styles.detailsContainer}>
            <AppText style={styles.nom}>{nom}</AppText>
            {nom && <AppText style={styles.mail}>{mail}</AppText>}
            {<AppText style={styles.mail}>{crit1}</AppText>}
            {<AppText style={styles.mail}>{crit2}</AppText>}
            {<AppText style={styles.mail}>{crit3}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  mail: {
    color: colors.medium,
  },
  nom: {
    fontWeight: "500",
  },
});

export default ListItem;
