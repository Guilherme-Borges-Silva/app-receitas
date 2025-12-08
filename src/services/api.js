const BASE = 'https://www.themealdb.com/api/json/v1/1';

async function safeFetch(url) {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (e) {
    console.error('API fetch error', e);
    return null;
  }
}

export async function searchByName(name) {
  if (!name) return [];
  const url = `${BASE}/search.php?s=${encodeURIComponent(name)}`;
  const json = await safeFetch(url);
  return (json && json.meals) || [];
}

export async function filterByCategory(category) {
  const url = `${BASE}/filter.php?c=${encodeURIComponent(category)}`;
  const json = await safeFetch(url);
  return (json && json.meals) || [];
}

export async function lookupById(id) {
  if (!id) return null;
  const url = `${BASE}/lookup.php?i=${encodeURIComponent(id)}`;
  const json = await safeFetch(url);
  return (json && json.meals && json.meals[0]) || null;
}

export default { searchByName, filterByCategory, lookupById };
