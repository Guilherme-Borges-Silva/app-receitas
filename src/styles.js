import { StyleSheet } from 'react-native';

const colors = {
  subtleBg: '#F2F4F8',
  text: 'black',
  muted: 'gray',
  border: 'gray',
  background: 'white',
  headerBg: 'black',
  headerText: 'white',
};

export default StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: colors.background },
  input: {
    height: 64,
    minHeight: 64,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
    color: colors.text,
    backgroundColor: 'white',
  },
  loadingContainer: {
    position: 'absolute',
    top: 96,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  emptyContainer: { alignItems: 'center', marginTop: 40 },

  // Item Receita
  item: { flexDirection: 'row', padding: 8, borderBottomWidth: 1, borderColor: colors.border, alignItems: 'center', backgroundColor: colors.background },
  thumb: { width: 80, height: 60, borderRadius: 6, marginRight: 12 },
  info: { flex: 1 },
  title: { fontSize: 16, fontWeight: '600', color: colors.primary },

  // Lista Ingredientes
  ingredientRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6, borderBottomWidth: 1, borderColor: colors.border, backgroundColor: colors.background },
  ingredientName: { fontSize: 15, color: colors.text },
  ingredientMeasure: { color: colors.muted, fontSize: 13 },

  // Tela de detalhes
  detailContainer: { flex: 1, backgroundColor: colors.subtleBg },
  detailCenter: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  detailImageWrap: { padding: 12 },
  detailImage: { height: 260, borderRadius: 10, width: '100%', backgroundColor: colors.subtleBg },
  detailContent: { paddingHorizontal: 14, paddingBottom: 20 },
  detailTitle: { fontSize: 22, fontWeight: '800', marginTop: 6, marginBottom: 4, color: colors.primary },
  detailSub: { color: colors.muted, marginBottom: 10 },
  detailSectionTitle: { fontSize: 16, fontWeight: '700', marginTop: 10, marginBottom: 8, color: colors.text },
  detailIngredientsCard: { backgroundColor: colors.subtleBg, borderRadius: 8, padding: 10, marginBottom: 12, elevation: 1 },
  detailIngredientRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6, borderBottomWidth: 1, borderColor: colors.border },
  detailIngredientName: { fontSize: 15, color: colors.text },
  detailIngredientMeasure: { color: colors.muted, fontSize: 13 },
  detailInstructionsCard: { backgroundColor: colors.subtleBg, borderRadius: 8, padding: 12 },
  detailInstructions: { lineHeight: 20, color: colors.text },

  // Estilos de cabeçalho (usar via navigator): fundo preto com texto branco
  header: { backgroundColor: colors.headerBg },
  headerTitle: { color: colors.headerText },
});
