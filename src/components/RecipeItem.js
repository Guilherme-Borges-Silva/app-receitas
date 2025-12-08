import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles';

export default function RecipeItem({ item }) {
  return (
    <View style={styles.item}>
      {item.strMealThumb && (
        <Image source={{ uri: item.strMealThumb }} style={styles.thumb} />
      )}
      <View style={styles.info}>
        <Text style={styles.title}>{item.strMeal}</Text>
      </View>
    </View>
  );
}
