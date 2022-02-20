import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Colors from "../styles/colors"

function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
  borderWidth: 2,
  borderColor: Colors.secondary,
  padding: 10,
  borderRadius: 8,
  marginVertical: 10,
  alignContent: "center",
  justifyContent: "center"
},
number: {
  color: Colors.secondary,
  fontSize: 22,
  textAlign: "center"
}
})

export default NumberContainer
