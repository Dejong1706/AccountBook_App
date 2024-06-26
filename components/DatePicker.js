import React, { useState } from "react";
import {
  View,
  Pressable,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { GlobalStyles } from "../constants/styles";

function DatePicker({ onDateChange }) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setSelectedDate(currentDate);
    onDateChange(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const resetDate = () => {
    setSelectedDate(null);
    onDateChange(null);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={showDatepicker} style={styles.button}>
        <MaterialIcons name="date-range" size={24} color="#00DFA2" />
        <Text style={styles.text}>
          {selectedDate ? formatDate(selectedDate) : "날짜 선택"}
        </Text>
      </Pressable>
      <TouchableOpacity onPress={resetDate} style={styles.resetButton}>
        <Text style={styles.resetText}>초기화</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary300,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text: {
    fontSize: 16,
    marginRight: 8,
    color: "black",
    marginLeft: 8,
  },
  resetButton: {
    marginTop: 10,
    backgroundColor: GlobalStyles.colors.secondary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  resetText: {
    color: "white",
    padding: 8,
    backgroundColor: "#00DFA2",
    fontSize: 16,
  },
});
