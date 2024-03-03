import { Pressable, StyleSheet, Text, View } from "react-native";

const SuedeItem = ({ suede, onDeleteItem }) => {
  return (
    <View style={styles.suedeItem}>
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        onPress={onDeleteItem.bind(this, suede.item.id)}
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.suedeText}> {suede.item.text} </Text>
      </Pressable>
    </View>
  );
};

export default SuedeItem;

const styles = StyleSheet.create({
  suedeItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  suedeText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
