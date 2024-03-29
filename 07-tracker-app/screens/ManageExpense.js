import { useContext, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { GlobalStyles } from '../constants/styles'
import IconButton from '../components/UI/IconButton'
import { ExpensesContext } from '../store/expenses-context'
import ExpenseForm from '../components/ManageExpense/ExpenseForm'

export default function ManageExpense({ navigation, route }) {
  const expensesCtx = useContext(ExpensesContext)

  const editedExpenseId = route.params?.expenseId

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  )

  const isEditing = !!editedExpenseId

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    })
  }, [navigation, isEditing])

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(editedExpenseId)
    navigation.goBack()
  }

  const cancelHandler = () => {
    navigation.goBack()
  }

  const confirmHandler = (expensesData) => {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expensesData)
    } else {
      expensesCtx.addExpense(expensesData)
    }
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? 'update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
})
