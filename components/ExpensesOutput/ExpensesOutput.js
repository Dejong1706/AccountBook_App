import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import DatePicker from "../DatePicker";

function ExpensesOutput({ expenses, expensesPeriod, fallbackText, type }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  let filteredExpenses = expenses;

  if (selectedDate) {
    filteredExpenses = expenses.filter((expense) => {
      return expense.date.toDateString() === selectedDate.toDateString();
    });
  }

  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (filteredExpenses.length > 0) {
    content = <ExpensesList expenses={filteredExpenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={filteredExpenses}
        periodName={expensesPeriod}
      />
      {type === "all" && <DatePicker onDateChange={handleDateChange} />}
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
