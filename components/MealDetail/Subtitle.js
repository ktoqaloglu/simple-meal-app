import {View, Text, StyleSheet} from 'react-native';

function Subtitle({text}) {
  return (
     <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{text}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle:{
    color: '#f1601b',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: '#f1601b',
    borderBottomWidth: 2,
  }
});