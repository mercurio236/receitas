import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



export const Ingredients = ({data}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.name}>{data.name}</Text>
        <Text>{data.amount}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:14,
        padding:12,
        borderRadius:4
    },
    name:{
        fontWeight:'bold',
        fontSize:16
    }
})

