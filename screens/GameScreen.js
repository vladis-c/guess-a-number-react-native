import React, { useState, useRef, useEffect } from "react"
import { StyleSheet, View, Text, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Card from "../components/Card"
import CustomButton from "../components/CustomButton"
import NumberContainer from "../components/NumberContainer"
import Colors from "../styles/colors"

function generateRandomBetween(min, max, exclude) {
  min = Math.ceil(min)
  max = Math.ceil(max)
  const randomNumber = Math.floor(Math.random() * (max - min)) + min
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return randomNumber
  }
}

function GameScreen(props) {
  const { userChoice, onGameOver } = props
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  )
  const [rounds, setRounds] = useState(0)
  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds)
    }
  }, [currentGuess, userChoice, onGameOver])

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know it is wrong...", [
        { text: "Sorry", style: "cancel" },
      ])
      return
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    )
    setCurrentGuess(nextNumber)
    setRounds((curRounds) => curRounds + 1)
  }

  return (
    <View style={styles.screen}>
      <Text style={{ fontFamily: "opensans-regular" }}>Computer's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <CustomButton
          onPress={nextGuessHandler.bind(this, "lower")}
          color={Colors.primary}
        >
          <Ionicons name="md-remove" size={24} color={Colors.tretiary}/>
        </CustomButton>
        <CustomButton
          onPress={nextGuessHandler.bind(this, "greater")}
          color={Colors.primary}
        >
          <Ionicons name="md-add" size={24} color={Colors.tretiary}/>
        </CustomButton>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "90%",
  },
})

export default GameScreen
