import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import api from '../../services/api'
import { FoodList } from "../../components/foodList";

export const Search = () => {
  const [receipes, setReceipes] = useState([])
  const route = useRoute();
  const { name } = route.params;
  

  useEffect(() =>{
    async function reqReceipes(){
      const response = await api.get(`/foods?name_like=${name}`)
      setReceipes(response.data)
    }
    reqReceipes()
  },[name])

  return (
    <View style={styles.container}>
      <FlatList
      showsVerticalScrollIndicator={false}
      style={{marginTop:14}}
      data={receipes}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => <FoodList data={item}/>}
      ListEmptyComponent={() =><Text style={styles.text}>Não encontramos o que voce buscou</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f9ff",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  text:{
    fontSize:16
  }
});
