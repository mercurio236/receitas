import React,{useState} from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { Logo } from "../../components/logo";
import { Ionicons } from "@expo/vector-icons";

export const Home = () => {
const [inputValue, setInputValue] = useState('')

    function handleSearch(){
        console.log('clicado')
    }

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text style={styles.title}>Encontre a Receita</Text>
      <Text style={styles.title}>que combina com você</Text>

      <View style={styles.form}>
        <TextInput
        placeholder="digite o nome da comida..."
        style={styles.input}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
            <Ionicons name="search" size={28} color={"#4CBE6C"}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F9FF",
    paddingTop: 56,
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0e0e0e",
  },
  form:{
    backgroundColor:'#FFF',
    width:'100%',
    borderRadius:8,
    marginTop:16,
    marginBottom:16,
    borderWidth:1,
    borderColor:'#ECECEC',
    paddingLeft:8,
    paddingRight:8,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    width:'90%',
    height:54,
    maxWidth:'90%'
  }
});