import React, { PropsWithoutRef, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ProductComponent } from "@/components/ProductComponent";
import { Product } from "@/types/next";
import { fetchProducts } from "@/actions/product";

export function ProductList({ navigation }: any) {
  function renderProduct({ item }: { item: Product }) {
    return (
      <ProductComponent
        product={item}
        onPress={() => {
          navigation.navigate("ProductDetails", {
            productId: item.id,
          });
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () =>
      await fetchProducts().then((data) => setProducts(data));

    getProducts();
  }, []);

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}
const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
