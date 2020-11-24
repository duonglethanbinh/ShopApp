import React from "react";
import axios from "axios";
import { StyleSheet, FlatList } from "react-native";
import CategoryListItem from "../components/CategoryListItem";

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get("/categories")
      .then((res) => {
        console.log(res);
        this.setState({
          categories: res.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { categories } = this.state;
    const { navigation } = this.props;
    return (
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryListItem
            category={item}
            onPress={() => {
              navigation.navigate("Category", {
                categoryName: item.name,
                categoryId: item.id,
              });
            }}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
