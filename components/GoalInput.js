import { StyleSheet, View, Text } from "react-native";

function GoalInput(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#A459D1",
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
