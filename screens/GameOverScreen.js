import React from "react"
import { StyleSheet, View, Text, Button, Image } from "react-native"
import CustomButton from "../components/CustomButton"
import Colors from "../styles/colors"

function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={{ fontFamily: "opensans-bold", fontSize: 36 }}>
        Game Over
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/morning.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.text}>Number of rounds: {props.roundsNumber}</Text>
      <Text style={styles.text}>Number was: {props.userNumber}</Text>
      <CustomButton
        onPress={props.onRestart}
        color={Colors.secondary}
      >NEW GAME</CustomButton>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.tretiary,
    overflow: "hidden",
    width: 300,
    height: 300,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "opensans-regular",
    fontSize: 24,
    marginVertical: 10,
    textAlign: "center",
  },
})
export default GameOverScreen
