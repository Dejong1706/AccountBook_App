import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ExpensesContext } from "../store/expenses-context";
import { fetchExpenses } from "../util/http";
import { GlobalStyles } from "../constants/styles";

function MainScreen() {
  const expensesCtx = useContext(ExpensesContext);
  const [totalAmount, setTotalAmount] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("비용을 가져올 수 없습니다!");
      }
      setIsFetching(false);
    }

    getExpenses();
  }, []);

  useEffect(() => {
    if (expensesCtx.expenses.length > 0) {
      const today = new Date();
      const firstDayOfMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      );

      const monthlyExpenses = expensesCtx.expenses.filter((expense) => {
        return expense.date >= firstDayOfMonth && expense.date <= today;
      });

      const total = monthlyExpenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
      );
      setTotalAmount(total);
    }
  }, [expensesCtx.expenses]);

  if (isFetching) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  const plusScreen = (
    <View style={styles.container}>
      <Text style={styles.title}>이번달은 번 돈이 많아요!!</Text>
      <Image source={require("../assets/mainPlus.png")} style={styles.image} />
      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalAmountTitle}>이번 달 총 금액</Text>
        <Text style={styles.totalPlusAmount}>{totalAmount}원</Text>
      </View>
    </View>
  );

  const minusScreen = (
    <View style={styles.container}>
      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalAmountTitle}>이번 달 총 금액</Text>
        <Text style={styles.totalMinusAmount}>{totalAmount}원</Text>
      </View>
      <Image source={require("../assets/mainMinus.png")} style={styles.image} />
      <Text style={styles.title}>이번달은 쓴 돈이 많아요...</Text>
    </View>
  );

  const noExpensesScreen = (
    <View style={styles.container}>
      <Image source={require("../assets/main.png")} style={styles.image} />
      <Text style={styles.title}>거래내역이 존재하지 않습니다</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {totalAmount !== null && expensesCtx.expenses.length > 0
        ? totalAmount >= 0
          ? plusScreen
          : minusScreen
        : noExpensesScreen}
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 230,
    height: 230,
    marginTop: 20,
    borderRadius: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  totalAmountContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    backgroundColor: GlobalStyles.colors.primary100,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  totalAmountTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
  totalPlusAmount: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#7298ef",
  },
  totalMinusAmount: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#eb7676",
  },
});
