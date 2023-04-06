import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  Modal,
  Share
} from "react-native";

import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import { Ingredients } from "../../components/ingredients";
import { Instruction } from "../../components/instruction";
import { Video } from "../../components/video";

export const Detail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [showVideo, setShowVideo] = useState(false);
  const { data } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: data?.name ? data?.name : "",
      headerRight: () => (
        <Pressable
          onPress={() => {
            console.log("aqui");
          }}
        >
          <Entypo name="heart" size={28} color="#FF4141" />
        </Pressable>
      ),
    });
  }, [navigation, data]);

  function handleOpenVideo() {
    setShowVideo(true);
  }

 async function shareReceipe(){
    try{
      await Share.share({
        url:'',
        message:`Receita: ${data.name}`
      })
    }catch(err){
      console.log(err)
    }
  }

  return (
    <ScrollView
      style={styles.containter}
      contentContainerStyle={{ paddingBottom: 14 }}
    >
      <Pressable onPress={handleOpenVideo}>
        <View style={styles.playIcon}>
          <AntDesign name="playcircleo" size={48} color="#FAFAFA" />
        </View>
        <Image source={{ uri: data.cover }} style={styles.cover} />
      </Pressable>
      <View style={styles.headerDetails}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.ingredientsText}>
            Ingredientes ({data.total_ingredients})
          </Text>
        </View>
        <Pressable onPress={shareReceipe}>
          <Feather name="share-2" size={24} color={"#121212"} />
        </Pressable>
      </View>
      {data.ingredients.map((igredient) => (
        <Ingredients key={igredient.id} data={igredient} />
      ))}

      <View style={styles.instructionArea}>
        <Text style={styles.instructionText}>Modo de preparo</Text>
        <Feather name="arrow-down" size={24} color={"#FFF"} />
      </View>
      {data.instructions.map((instruction, index) => (
        <Instruction key={instruction.id} data={instruction} index={index} />
      ))}

      <Modal visible={showVideo} animationType="slide">
        <Video handleClose={() => setShowVideo(false)} videoUrl={data.video} />
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containter: {
    backgroundColor: "#F3f9ff",
    paddingTop: 14,
    paddingEnd: 14,
    paddingStart: 14,
  },
  cover: {
    height: 200,
    borderRadius: 14,
    width: "100%",
  },
  playIcon: {
    position: "absolute",
    zIndex: 9,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    marginTop: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  ingredientsText: {
    marginBottom: 14,
    fontSize: 16,
  },
  headerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  instructionArea: {
    backgroundColor: "#4CBE6C",
    flexDirection: "row",
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },
  instructionText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FFF",
    marginRight: 8,
  },
});
