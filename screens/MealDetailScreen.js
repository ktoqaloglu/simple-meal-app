import { useLayoutEffect } from 'react';
import { Text,View, Image, StyleSheet, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

function MealDetailScreen({route, navigation}) {
  
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log('Favorite button pressed');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="heart" color="white" name='heart' onPress={headerButtonPressHandler} />
      }
    });
  }
  ,[headerButtonPressHandler,navigation]);

  return (
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
        <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} textStyle={styles.detailText}/>
        </View>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle text="Ingredients"/>
            <List data={selectedMeal.ingredients} />
            <Subtitle text="Steps"/>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    );
}

export default MealDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16
  },
  image:{
    width: '100%',
    height: 200
  },
  title:{
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center'
  },
  detailText: {
    color: '#333'
  },
  listOuterContainer: {
    alignItems: 'center',
    padding: 16
  },
  listContainer: {
    maxWidth: '90%'
  }
});