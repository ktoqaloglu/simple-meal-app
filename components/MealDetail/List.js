import { Text,View,StyleSheet } from "react-native"

function List ({data}){
    return data.map((dataPoint) => (
      <View style={styles.listItem}>
        <Text style={styles.itemText} key = {dataPoint}>{dataPoint}</Text>
      </View>
    ));
}

export default List;

const styles = StyleSheet.create({
  listItem:{
    marginVertical: 4,
    marginHorizontal: 24,
    padding: 6,
    backgroundColor: '#f8921c',
    borderRadius: 8
  },
  itemText:{
    color: 'black',
    textAlign: 'center',
  }
});