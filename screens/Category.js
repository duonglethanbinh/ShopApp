import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ProductListItem from "../components/ProductListItem";

export default class Category extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("categoryName"),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          images: [
            {
              url: "",
            },
          ],
          name: "Robin",
          price: "5000000",
        },
        {
          id: 2,
          images: [
            {
              url: "",
            },
          ],
          name: "Barney",
          price: "4000000",
        },
      ],
    };
  }
  render() {
    <FlatList
      data={this.state.products}
      numColumns={2}
      renderItem={({ item }) => <ProductListItem product={item} />}
      keyExtractor={(item) => `${item.id}`}
    ></FlatList>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  }
});
