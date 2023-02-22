import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoal, setEnterGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (text) => {
    setEnterGoal(text)
  }

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, enteredGoal])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your Courses Goal!' 
          onChangeText={goalInputHandler} 
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
        {
          courseGoals.map((item, idx) => {
            return (
              <Text key={idx}>{item}</Text>
            )
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4
  }
});
