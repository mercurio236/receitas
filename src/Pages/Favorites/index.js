import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import {FoodList} from '../../components/foodList'

import { getFavorites } from "../../utils/storage";

export const Favorites = () => {
  const [receipst, setReceips] = useState([]);
  const isFocused = useIsFocused(); // tá com foco na tela ou não

  useEffect(() => {
    let isActive = true;

    async function getReceipes() {
      const result = await getFavorites("@appreceitas");
      if (isActive) {
        setReceips(result);
      }
    }
    if (isActive) {
      getReceipes();
    }

    return () =>{ //desmonta o componente
      isActive = false
    }
  }, [isFocused]);


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Receitas Favoritas</Text>
      {receipst.length === 0 && (
        <Text>Voce ainda não tem nenhuma receita salva</Text>
      )}

      <FlatList
      showsVerticalScrollIndicator={false}
      style={{marginTop:14}}
      data={receipst}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => <FoodList data={item}/>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f9ff",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 36,
  },
  title: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
  },
});
