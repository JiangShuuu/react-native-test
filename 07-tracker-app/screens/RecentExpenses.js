import { useContext } from 'react'
import { ExpensesContext } from '../store/expenses-context'
import ExpensesOutput from '../components/Expenses/ExpensesOutput'
import { getDateMinusDays } from '../util/date'

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext)

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAge = getDateMinusDays(today, 7)

    return expense.date > date7DaysAge && expense.date <= today
  })

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
  )
}
