import React from "react";
import { StyleSheet, View, FlatList, Modal, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Options = ({ options, deleteNote, changeColor, id, setOptions }) => {
  return (
    <Modal
      animationType="slide"
      visible={options}
      onRequestClose={() => {
        setOptions(!options);
      }}
      transparent={true}
    >
      <View style={styles.options}>
        <FlatList
          data={[
            {
              id: 1,
              color: "#EC7063",
            },
            {
              id: 2,
              color: "#A569BD",
            },
            {
              id: 3,
              color: "#5DADE2",
            },
            {
              id: 4,
              color: "#48C9B0",
            },
            {
              id: 5,
              color: "#58D68D",
            },
            {
              id: 6,
              color: "#F4D03F",
            },
            {
              id: 7,
              color: "#EB984E",
            },
            {
              id: 8,
              color: "#F0F3F4",
            },
            {
              id: 9,
              color: "#CACFD2",
            },
            {
              id: 10,
              color: "#5D6D7E",
            },
          ]}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => changeColor(item.color, id)}
              style={{
                ...styles.colorChanger,
                backgroundColor: item.color,
              }}
              android_ripple={{ color: "black" }}
            ></Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
        />
        <Icon.Button
          name="delete"
          backgroundColor="transparent"
          size={20}
          onPress={() => deleteNote(id)}
        >
          Delete
        </Icon.Button>
      </View>
    </Modal>
  );
};

export default Options;

const styles = StyleSheet.create({
  options: {
    height: "20%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "black",
    paddingBottom: 50,
  },
  colorChanger: {
    height: 50,
    width: 50,
    borderRadius: 30,
    margin: 10,
  },
});
