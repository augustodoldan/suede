import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const SuedeInput = ({ addHandler, isVisible, onCancel }) => {
  const [enteredSuedeText, setEnteredSuedeText] = useState("");

  const suedeInpuntHandler = (enteredText) => {
    setEnteredSuedeText(enteredText);
  };

  const addSuedeHandler = () => {
    addHandler(enteredSuedeText);
    setEnteredSuedeText("");
  };
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="S U E D E "
          onChangeText={suedeInpuntHandler}
          value={enteredSuedeText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="F" onPress={onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="SUEDE!" onPress={addSuedeHandler} color="#a065ec" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SuedeInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
