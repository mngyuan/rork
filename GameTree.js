import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GameTree = {
  render(props) {
    return (
      <View>
        <Text style={styles.whiteText}>welcome.</Text>
      </View>
    );
  },
  options: gameState => [{ text: "..." }],
  callback(option) {
    return Screen2;
  },
};

const Screen2 = {
  render(props) {
    return (
      <View>
        <Text style={styles.whiteText}>
          you wake from an eternal darkness to find yourself surrounded by
          confusing stimuli, most of which your feeble body cannot yet interpret
          or understand.
        </Text>
        <Text style={styles.whiteText} />
        <Text style={styles.whiteText}>you have two choices:</Text>
      </View>
    );
  },
  options: gameState => [
    {
      text: "watch your parents die",
    },
    {
      text:
        "have no relationship with your parents and therefore functionally experience their deaths",
    },
  ],
  callback(option) {
    return Screen2;
  },
};

const styles = StyleSheet.create({
  whiteText: {
    color: "white",
    fontFamily: "monospace",
  },
});

export default GameTree;
