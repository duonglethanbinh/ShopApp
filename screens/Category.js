import React from "react";
import axios from "axios";
import { StyleSheet, View, FlatList } from "react-native";
import ProductListItem from "../components/ProductListItem";

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    try {
      const { data: products } = await axios.get(`/products`);
      this.setState({
        products,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <FlatList
        data={this.state.products}
        contentContainerStyle={styles.container}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <ProductListItem product={item} />
          </View>
        )}
        keyExtractor={(item) => `${item.id}`}
      ></FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
