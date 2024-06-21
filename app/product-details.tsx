import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
} from "react-native";
import { fetchProduct } from "@/actions/product";
import { useCartStore } from "@/hooks/useCardStore";

export function ProductDetails({ route }: any) {
  const { productId } = route.params;
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    description: "",
    category: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    tags: [""],
    brand: "",
    sku: "",
    weight: 0,
    dimensions: {
      width: 0,
      height: 0,
      depth: 0,
    },
    warrantyInformation: "",
    shippingInformation: "",
    availabilityStatus: "",
    reviews: [
      {
        rating: 0,
        comment: "",
        date: "",
        reviewerName: "",
        reviewerEmail: "",
      },
    ],
    returnPolicy: "",
    minimumOrderQuantity: 0,
    meta: {
      createdAt: "",
      updatedAt: "",
      barcode: "",
      qrCode: "",
    },
    thumbnail: "",
    images: [""],
  });

  const { cart, updateCart } = useCartStore();

  useEffect(() => {
    const getProduct = async () =>
      await fetchProduct(productId).then((data) => setProduct(data));

    getProduct();
  }, []);

  function onAddToCart() {
    let productsToSend: {
      id: number;
      quantity: number;
    }[] = [];
    let exist = false;

    cart.products.filter((p) => {
      if (p.id !== parseInt(productId)) {
        productsToSend.push({
          id: p.id,
          quantity: p.quantity,
        });
      } else {
        exist = true;
        productsToSend.push({
          id: p.id,
          quantity: p.quantity + 1,
        });
      }
    });

    if (!exist) {
      productsToSend.push({
        id: parseInt(productId),
        quantity: 1,
      });
    }

    updateCart(String(cart.id), productsToSend);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={product.images[0] as any} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.title}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button onPress={onAddToCart} title="Ajouter au panier" />
        </View>
      </ScrollView>
    </SafeAreaView>
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
  image: {
    height: 300,
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
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});
