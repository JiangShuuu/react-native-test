import { StyleSheet, View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/styles'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2022-04-22'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-05-22'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 9.29,
    date: new Date('2022-06-22'),
  },
  {
    id: 'e4',
    description: 'A Book',
    amount: 19.29,
    date: new Date('2022-07-22'),
  },
  {
    id: 'e5',
    description: 'More Book',
    amount: 14.29,
    date: new Date('2022-08-22'),
  },
  {
    id: 'e6',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2022-04-22'),
  },
  {
    id: 'e7',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-05-22'),
  },
  {
    id: 'e8',
    description: 'Some bananas',
    amount: 9.29,
    date: new Date('2022-06-22'),
  },
  {
    id: 'e9',
    description: 'A Book',
    amount: 19.29,
    date: new Date('2022-07-22'),
  },
  {
    id: 'e10',
    description: 'More Book',
    amount: 14.29,
    date: new Date('2022-08-22'),
  },
]

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 0,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
})
