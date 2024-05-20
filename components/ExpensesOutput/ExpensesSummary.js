import { View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ expenses, periodName }) {
  const { incomeSum, expenseSum } = expenses.reduce(
    (totals, expense) => {
      if (expense.amount >= 0) {
        totals.incomeSum += expense.amount;
      } else {
        totals.expenseSum += expense.amount;
      }
      return totals;
    },
    { incomeSum: 0, expenseSum: 0 }
  );

  const totalSum = incomeSum + expenseSum;

  return (
    <View style={styles.container}>
      <View style={styles.summaryContainer}>
        <View style={styles.summaryItem}>
          <Text style={styles.amount}>수입</Text>
          <Text style={styles.income}>{incomeSum.toLocaleString()}원</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.amount}>지출</Text>
          <Text style={styles.expense}>{expenseSum.toLocaleString()}원</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.total}>합계</Text>
          <Text style={styles.amount}>{totalSum.toLocaleString()}원</Text>
        </View>
      </View>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 6,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 6,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.gray700,
    marginBottom: 8,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  summaryItem: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
  },
  income: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#7298ef",
  },
  expense: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#eb7676",
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary900,
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary900,
  },
});
