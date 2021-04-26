import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View, StatusBar } from "react-native";
import Note from "./components/Note";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EmptyNotes from "./components/EmptyNotes";

export default function App() {
  const [notes, setNotes] = useState({
    data: [],
  });

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData(notes.data);
  }, [notes]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("notes");
      setNotes({
        ...notes,
        data: JSON.parse(jsonValue),
      });
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("notes", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const onTitleChange = (title, id) => {
    let updatedList = notes.data.map((note) => {
      if (note.id == id) {
        return {
          ...note,
          title: title,
        };
      }
      return note;
    });
    setNotes({ data: updatedList });
  };

  const onTextChange = (text, id) => {
    let updatedList = notes.data.map((note) => {
      if (note.id == id) {
        return {
          ...note,
          text: text,
        };
      }
      return note;
    });
    setNotes({ data: updatedList });
  };

  const addNote = () => {
    setNotes({
      ...notes,
      data: [
        {
          id: Math.floor(Math.random() * 100),
          title: "Click To Edit This Note",
          text: "",
          color: "#CACFD2",
        },
        ...notes.data,
      ],
    });
  };

  const deleteNote = (id) => {
    setNotes({
      ...notes,
      data: notes.data.filter((note) => note.id !== id),
    });
  };

  const changeColor = (color, id) => {
    let updatedList = notes.data.map((note) => {
      if (note.id == id) {
        return {
          ...note,
          color: color,
        };
      }
      return note;
    });
    setNotes({ data: updatedList });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes.data}
        renderItem={({ item }) => (
          <Note
            id={item.id}
            text={item.text}
            title={item.title}
            color={item.color}
            onTitleChange={onTitleChange}
            onTextChange={onTextChange}
            deleteNote={deleteNote}
            changeColor={changeColor}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListEmptyComponent={EmptyNotes}
      />
      <Icon
        name="add-circle-outline"
        backgroundColor="transparent"
        size={55}
        onPress={() => addNote()}
        style={styles.addBtn}
      ></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: StatusBar.currentHeight || 0,
  },
  addBtn: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  btnText: {
    textAlign: "center",
    fontSize: 50,
  },
});
