// import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';
import { useSelector } from 'react-redux';

function FavoritesScreen() {

  //const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  //const favoriteMeals = MEALS.filter( meal => favoriteMealsCtx.ids.includes(meal.id));
  const favoriteMeals = MEALS.filter( meal => favoriteMealIds.includes(meal.id));

if (favoriteMeals.length === 0) {
  return <View style={styles.container}>
    <Text style={styles.text}>You have no favorite meals yet</Text>
  </View>
}

  return (
    <MealsList items={favoriteMeals}/>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    textAlign: 'center',
    fontSize: 16
  }
});
