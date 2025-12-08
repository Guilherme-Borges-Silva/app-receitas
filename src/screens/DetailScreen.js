import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { lookupById } from '../services/api';
import IngredientList from '../components/IngredientList';
import styles from '../styles';

export default function DetailScreen({ route }) {
  const { id } = route.params;
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetail();
  }, []);
  const fetchDetail = async () => {
    setLoading(true);
    try {
      const data = await lookupById(id);
      setMeal(data);
    } catch (e) {
      console.error(e);
      setMeal(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.detailCenter}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!meal) {
    return (
      <View style={styles.detailCenter}>
        <Text>Detalhes não disponíveis.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.detailContainer} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.detailImageWrap}>
        {meal.strMealThumb && <Image source={{ uri: meal.strMealThumb }} style={styles.detailImage} />}
      </View>

      <View style={styles.detailContent}>
        <Text style={styles.detailTitle}>{meal.strMeal}</Text>
        <Text style={styles.detailSub}>{meal.strCategory} — {meal.strArea}</Text>

        <Text style={styles.detailSectionTitle}>Ingredientes</Text>
        <View style={styles.detailIngredientsCard}><IngredientList meal={meal} /></View>

        <Text style={styles.detailSectionTitle}>Instruções</Text>
        <View style={styles.detailInstructionsCard}>
          <Text style={styles.detailInstructions}>{meal.strInstructions}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
