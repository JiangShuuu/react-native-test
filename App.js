import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native'
import { useState } from 'react'
import GoalItem from './components/GoalItem'

export default function App() {
  const [enteredGoal, setEnterGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (text) => {
    setEnterGoal(text)
  }

  const addGoalHandler = () => {
    setCourseGoals([
      ...courseGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Courses Goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />
          }}
          keyExtractor={(item, idx) => {
            return item.id
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
})
