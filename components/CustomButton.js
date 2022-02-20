import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Colors from "../styles/colors"

function CustomButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.tretiary,
    fontFamily: "opensans-regular",
    fontSize: 18,
  },
})

export default CustomButton
