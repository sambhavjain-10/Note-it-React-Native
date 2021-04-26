import React, { useState } from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import { StyleSheet, TextInput, Modal, View } from "react-native";
import Options from "./Options";

const EditNote = ({
  modalVisible,
  setModalVisible,
  id,
  title,
  text,
  color,
  onTitleChange,
  onTextChange,
  deleteNote,
  changeColor,
}) => {
  const styles = StyleSheet.create({
    modal: {
      backgroundColor: color,
      height: "100%",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 50,
      marginBottom: 20,
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    title: {
      fontSize: 25,
      paddingHorizontal: 30,
    },
    text: {
      marginTop: 20,
      paddingHorizontal: 30,
    },
  });

  const [options, setOptions] = useState(false);

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modal}>
        <View style={styles.header}>
          <Icon.Button
            name="arrow-left"
            backgroundColor="transparent"
            size={20}
            onPress={() => setModalVisible(!modalVisible)}
          />
          <Icon.Button
            name="options"
            backgroundColor="transparent"
            size={20}
            onPress={() => setOptions(true)}
          />
        </View>
        <TextInput
          style={styles.title}
          value={title}
          placeholder={"Title"}
          onChangeText={(text) => onTitleChange(text, id)}
        />
        <TextInput
          style={styles.text}
          value={text}
          placeholder={"Note It"}
          multiline={true}
          onChangeText={(text) => onTextChange(text, id)}
        />
        <Options
          options={options}
          deleteNote={deleteNote}
          changeColor={changeColor}
          id={id}
          setOptions={setOptions}
        />
      </View>
    </Modal>
  );
};

export default EditNote;
