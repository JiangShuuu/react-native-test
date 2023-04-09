import { useContext } from 'react'
import ExpensesOutput from '../components/Expenses/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext)

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No registered expenses found!"
    />
  )
}
