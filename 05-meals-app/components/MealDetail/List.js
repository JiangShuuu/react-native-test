import { Text, StyleSheet, View } from 'react-native'

export default function List({ data }) {
  return (
    <View key={data} style={styles.listItem}>
      {data.map((item) => (
        <Text style={styles.itemText} key={item}>
          {item}
        </Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
})
