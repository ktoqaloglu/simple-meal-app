import { View,Pressable, Text, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";
function MealItem({id,title,imageUrl, duration, complexity, affordability, }) {

  const navigation = useNavigation();

  function selectMealItemHandler(){
    navigation.navigate('MealDetail',{
      mealId: id
    });
  }

  

  return (
    <View style={styles.MealItem}>
      <Pressable 
        android_ripple={{color: '#ccc'}}
        style={({pressed}) =>  pressed ? styles.buttonPressed : null}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imageUrl }} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  MealItem: {
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden': 'visible',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  buttonPressed: {
    opacity: Platform.OS === 'android' ? null : .5
  },
  title:{
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 8
  }
});