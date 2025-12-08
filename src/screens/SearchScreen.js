import React, { useEffect, useState, useRef } from 'react';
import { View, TextInput, ActivityIndicator, FlatList, Text, Pressable } from 'react-native';
import RecipeItem from '../components/RecipeItem';
import { searchByName, filterByCategory } from '../services/api';
import styles from '../styles';

const DEFAULT_CATEGORY = 'Seafood';
const DEBOUNCE_MS = 500;

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const debounceRef = useRef(null);

  useEffect(() => {
    loadByCategory(DEFAULT_CATEGORY);
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (query.trim() === '') {
        loadByCategory(DEFAULT_CATEGORY);
      } else {
        loadByName(query.trim());
      }
    }, DEBOUNCE_MS);

    return () => clearTimeout(debounceRef.current);
  }, [query]);

  const loadByCategory = async (category) => {
    setLoading(true);
    try {
      const data = await filterByCategory(category);
      setMeals(data || []);
    } catch (e) {
      console.error(e);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  const loadByName = async (name) => {
    setLoading(true);
    try {
      const data = await searchByName(name);
      setMeals(data || []);
    } catch (e) {
      console.error(e);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  const onPressItem = (id) => {
    navigation.navigate('Detail', { id });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Busque por nome de receita..."
        style={styles.input}  
        value={query}
        onChangeText={setQuery}
        returnKeyType="search"
        onSubmitEditing={() => {
          if (debounceRef.current) clearTimeout(debounceRef.current);
          if (query.trim() === '') loadByCategory(DEFAULT_CATEGORY);
          else loadByName(query.trim());
        }}
      />

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="black" />
        </View>
      )}

      {!loading && meals.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text>Nenhuma receita encontrada.</Text>
        </View>
      )}

      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <Pressable onPress={() => onPressItem(item.idMeal)}>
            <RecipeItem item={item} />
          </Pressable>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
