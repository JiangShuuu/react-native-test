import { createContext, useReducer } from 'react'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-04-08'),
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

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, data }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, data }) => {},
})

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString()
      return [{ ...action.payload, id: id }, ...state]
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      )
      const updatableExpense = state[updatableExpenseIndex]
      const updatedItem = { ...updatableExpense, ...action.payload.data }
      const updatedExpenses = [...state]
      updatedExpenses[updatableExpenseIndex] = updatedItem
      return updatableExpense
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload)
    default:
      return state
  }
}

export default function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

  const addExpense = ({ expenseData }) => {
    dispatch({ type: 'ADD', payload: expenseData })
  }

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE' })
  }

  const updateExpense = (id, expenseData) => {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
  }

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  }

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  )
}
