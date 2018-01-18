import React from "react";
import { StyleSheet, StatusBar, Text, View, Button } from "react-native";
import GameTree from "./GameTree";

class Game extends React.Component {
  state = {
    gameNode: GameTree,
    gameState: {
      inventory: [],
    },
  };

  static navigationOptions = {
    title: "Welcome",
  };
  render() {
    const { gameNode, gameState } = this.state;
    const buttons = gameNode
      .options(gameState)
      .map(option => (
        <Button
          key={option.text}
          title={option.text}
          onPress={() => this.setState({ gameNode: gameNode.callback(option) })}
        />
      ));
    return (
      <View style={styles.container}>
        <View style={{ height: 20 }} />
        <View>{gameNode.render()}</View>
        <View>{buttons}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Game;
