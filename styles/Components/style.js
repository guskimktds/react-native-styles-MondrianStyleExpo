import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  parent: {
    flexDirection: "column",
    position: "absolute",
    top: 30,
    left: 0,
    right: 0,
    bottom: 0
  },
  base: {
    borderColor: "#000000",
    borderWidth: 5
  },
  topBlock: {
    flexDirection: "row", flex: 5

  },
  bottomBlock: {
    flexDirection: "row", flex: 2
  },
  leftCol: {
    flex: 2
  },
  cellOne: {
    flex: 1, borderBottomWidth: 15
  },
  cellTwo: {
    flex: 3
  },
  cellThree: {
    flex:5, backgroundColor: "#FF0000"
  },
  cellFour: {
    flex: 3, backgroundColor: "#0000FF"
  },
  cellFive: {
    flex: 6
  },
  cellSix: {
    flex: 1
  },
  cellSeven: {
    flex: 1, backgroundColor: "#FFFF00"
  },
  bottomRight: {
    flexDirection: "column", flex: 2
  }
});

export default styles;
