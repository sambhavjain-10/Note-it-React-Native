import React from "react";
import { StyleSheet, Text, View } from "react-native";

const EmptyNotes = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Add a Note Now!</Text>
    </View>
  );
};

export default EmptyNotes;

const styles = StyleSheet.create({
  emptyContainer: {
    height: 750,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    textTransform: "uppercase",
    fontSize: 30,
    opacity: 0.7,
  },
});
