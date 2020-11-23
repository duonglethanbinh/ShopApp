
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    id: 1, name: 'Dụng cụ trượt tuyết'
                },
                {
                    id: 2, name: 'Quần áo trượt tuyết'
                },
                {
                    id: 3, name: 'Kính mũ'
                }
            ]
        }
    }
    render() {
        const { categories } = this.state;
        const { navigation } = this.props;
        return (
            <FlatList
                data={categories}
                renderItem={({ item }) =>
                    <CategoryListItem
                        category={item}
                        onPress={() => {
                            navigation.navigate(
                                'Category',
                                { categoryName: item.name }
                            )
                        }} />
                }
                keyExtractor={(item) => `${item.id}`}
                contentContainerStyle={styles.container}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
});