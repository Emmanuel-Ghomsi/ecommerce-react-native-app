import { useCartStore } from "@/hooks/useCardStore";
import { Product } from "@/types/next";
import React, { useEffect, useState, useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

export function Cart({ navigation }: any) {
  const { cart, counter } = useCartStore();

  function Totals() {
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>${cart.total}</Text>
      </View>
    );
  }

  function renderItem(item: Product) {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.lineLeft}>
          {item.title} x {item.price}
        </Text>
        <Text style={styles.lineRight}>${item.price}</Text>
      </View>
    );
  }

  return (
    <div>Hello</div>
    /*<FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={cart}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />*/
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
