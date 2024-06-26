import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button({ children, onPress, mode, style }) {
  newLabel = "";
  if (children === "Add") {
    newLabel = "추가";
  } else if (children === "Update") {
    newLabel = "수정";
  } else {
    newLabel = "취소";
  }
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {newLabel}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#7286D3",
  },
  flat: {
    backgroundColor: "#FF8080",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: "white",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
