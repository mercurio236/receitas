import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

export const Detail = () => {
  const route = useRoute();
  const navigation = useNavigation();
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

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};
