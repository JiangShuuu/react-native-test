import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useState } from 'react'
export default function GoalInput(props) {
  const [enteredGoal, setEnterGoal] = useState('')

  const goalInputHandler = (text) => {
    setEnterGoal(text)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal)
    setEnterGoal('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Courses Goal!"
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
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
})
