import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function IngredientList({ meal }) {
  if (!meal) return null;
  const items = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.toString().trim()) {
      items.push({
        ingredient: ingredient.toString().trim(),
        measure: measure ? measure.toString().trim() : '',
      });
    }
  }

  return (
    <View>
      {items.map((it, idx) => (
        <View key={idx} style={styles.ingredientRow}>
          <Text style={styles.ingredientName}>{it.ingredient}</Text>
          {it.measure ? <Text style={styles.ingredientMeasure}>{it.measure}</Text> : null}
        </View>
      ))}
    </View>
  );
}
