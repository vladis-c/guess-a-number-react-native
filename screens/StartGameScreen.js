import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native"
import Card from "../components/Card"
import CustomButton from "../components/CustomButton"
import Input from "../components/Input"
import NumberContainer from "../components/NumberContainer"
import Colors from "../styles/colors"

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("")
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()

  function numberInputHandler(inputText) {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""))
  }

  function resetInputHandler() {
    setEnteredValue("")
    setConfirmed(false)
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredValue)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ])
      return
    }
    setConfirmed(true)
    setEnteredValue("")
    setSelectedNumber(chosenNumber)
    Keyboard.dismiss()
  }

  let confirmedOutput
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={{ fontFamily: "opensans-regular" }}>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <CustomButton
          style={styles.button}
          color={Colors.primary}
          onPress={() => props.onStartGame(selectedNumber)}
        >
          START GAME
        </CustomButton>
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={{ fontFamily: "opensans-regular" }}>
            Select a Number
          </Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.secondary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "opensans-bold",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
})

export default StartGameScreen
