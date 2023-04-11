import { StyleSheet, View, Text } from 'react-native'

import Input from './input'
import { useState } from 'react'

export default function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  })

  const inputChangesHandler = (inputIdentifier, enteredValue) => {
    setAmountValue((prev) => {
      return {
        ...prev,
        [inputIdentifier]: enteredValue,
      }
    })
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangesHandler.bind(this, 'amount'),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangesHandler.bind(this, 'date'),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'characters',
          // autoCorrect: false,
          onChangeText: inputChangesHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
})
