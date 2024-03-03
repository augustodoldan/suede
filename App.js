import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import SuedeInput from "./components/SuedeInput";
import uuid from "react-native-uuid";
import SuedeItem from "./components/SuedeItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [suedes, setSuedes] = useState([]);

  const startAddSuedeHandler = () => {
    setModalIsVisible(true);
  };

  const endAddSuedeHandler = () => {
    setModalIsVisible(false);
  };
  const addSuedeHandler = (enteredSuedeText) => {
    setSuedes((prevState) => [
      ...prevState,
      { text: enteredSuedeText, id: uuid.v4() },
    ]);
    endAddSuedeHandler();
  };

  const deleteSuedeHandler = (suedeId) => {
    setSuedes((currentSuedes) => {
      return currentSuedes.filter((suede) => suede.id !== suedeId);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="+ SUEDE"
          color="#5e0acc"
          onPress={startAddSuedeHandler}
        />
        {modalIsVisible && (
          <SuedeInput
            onCancel={endAddSuedeHandler}
            isVisible={modalIsVisible}
            addHandler={addSuedeHandler}
          />
        )}
        <View style={styles.suedesContainer}>
          <FlatList
            data={suedes}
            renderItem={(itemData) => {
              return (
                <SuedeItem suede={itemData} onDeleteItem={deleteSuedeHandler} />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  suedesContainer: {
    flex: 5,
  },
});
