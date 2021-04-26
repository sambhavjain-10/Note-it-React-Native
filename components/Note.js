import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import EditNote from "./EditNote";

const Note = ({
  id,
  text,
  title,
  color,
  onTitleChange,
  onTextChange,
  deleteNote,
  changeColor,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const styles = StyleSheet.create({
    note: {
      height: 200,
      margin: 10,
      width: "45%",
      borderWidth: 3,
      borderRadius: 10,
      borderColor: "white",
      overflow: "hidden",
      padding: 10,
      backgroundColor: color,
    },
    title: {
      fontWeight: "bold",
      fontSize: 20,
    },
    text: {
      opacity: 0.7,
    },
  });

  return (
    <>
      <Pressable
        style={styles.note}
        android_ripple={{ color: "black" }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
      <EditNote
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        id={id}
        title={title}
        text={text}
        color={color}
        onTitleChange={onTitleChange}
        onTextChange={onTextChange}
        deleteNote={deleteNote}
        changeColor={changeColor}
      />
    </>
  );
};

export default Note;
