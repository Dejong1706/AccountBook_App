import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";

function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }

  const expenseItemContainer = [
    styles.expenseItem,
    amount < 0 ? styles.negativeAmount : styles.positiveAmount,
  ];

  const amountText = [
    styles.amount,
    amount < 0 ? styles.negative : styles.positive,
  ];

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={expenseItemContainer}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>날짜 : {getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={amountText}>{amount.toLocaleString()}원</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  negativeAmount: { backgroundColor: "#ff9999" },
  positiveAmount: { backgroundColor: "#AAC4FF" },
  textBase: {
    color: GlobalStyles.colors.primary900,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 120,
  },
  amount: {
    fontWeight: "bold",
  },
  negative: {
    color: "#ff9999",
  },
  positive: {
    color: "#AAC4FF",
  },
});
