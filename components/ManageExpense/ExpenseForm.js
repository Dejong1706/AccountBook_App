import { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";
import MyCalendar from "./Calendar";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => ({
      ...curInputs,
      [inputIdentifier]: { value: enteredValue, isValid: true },
    }));
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((curInputs) => ({
        ...curInputs,
        amount: { ...curInputs.amount, isValid: amountIsValid },
        date: { ...curInputs.date, isValid: dateIsValid },
        description: { ...curInputs.description, isValid: descriptionIsValid },
      }));
      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  function modalCloseHandler() {
    setModalVisible(false);
  }

  function handleDateSelect(selectedDate) {
    setInputs((prevInputs) => ({
      ...prevInputs,
      date: { value: selectedDate, isValid: true },
    }));
    setModalVisible(false);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>지출 내역</Text>
      <View style={styles.inputsContainer}>
        <Input
          label="가격"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            placeholder: "원",
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modal}>
            <MyCalendar
              onPress={modalCloseHandler}
              onSelect={handleDateSelect}
            />
          </View>
        </Modal>
        <Pressable
          style={styles.modalButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.modalButtonText}>
            {inputs.date.value ? inputs.date.value : "날짜 선택"}
          </Text>
        </Pressable>
        <Input
          label="설명"
          invalid={!inputs.description.isValid}
          textInputConfig={{
            multiline: true,
            onChangeText: inputChangedHandler.bind(this, "description"),
            value: inputs.description.value,
          }}
        />
      </View>
      {formIsInvalid && (
        <Text style={styles.errorText}>
          입력값이 유효하지 않습니다. 입력된 데이터를 확인해주세요!
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          취소
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalButton: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  modalButtonText: {
    color: "gray",
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
