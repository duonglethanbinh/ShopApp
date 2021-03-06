import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import SkiiImage from '../assets/skii.png';

export default function CategoryListItem(props) {
    const { category, onPress } = props;
    console.log(category);
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <Image
                    style={styles.categoryImage}
                    source={category.image} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        elevation: 10,//For Android
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
        marginBottom: 16
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    categoryImage: {
        width: 64,
        height: 64
    }
})