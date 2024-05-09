import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import CalendarButton from "../UI/CalendarButton";

function MyCalendar({ onPress, onSelect }) {
  const [selected, setSelected] = useState("");

  const handleSelect = () => {
    onSelect(selected);
  };

  const modalClose = () => {
    onPress();
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />
      <View style={styles.buttons}>
        <CalendarButton onPress={modalClose} mode="flat">
          취소
        </CalendarButton>
        <CalendarButton onPress={handleSelect}>선택</CalendarButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: "50%",
    backgroundColor: "white",
    padding: 16,
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
});

export default MyCalendar;
