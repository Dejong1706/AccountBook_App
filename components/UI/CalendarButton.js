import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function CalendarButton({ children, onPress, mode }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CalendarButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 100,
    padding: 8,
    backgroundColor: "white",
    borderColor: "#7286D3",
    borderRadius: 16,
    borderWidth: 2,
    marginHorizontal: 8,
  },
  flat: {
    backgroundColor: "white",
    borderColor: "#FF8080",
    borderRadius: 16,
    borderWidth: 2,
  },
  buttonText: {
    color: "#7286D3",
    textAlign: "center",
  },
  flatText: {
    color: "#FF8080",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
