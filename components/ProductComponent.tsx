import { Product } from "@/types/next";
import React from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

export function ProductComponent({
  product,
  onPress,
}: {
  product: Product;
  onPress: any;
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.thumb} source={product.images[0] as any} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
});
