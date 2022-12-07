import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        flex: 1,
    },

    image: {
        height: Dimensions.get('screen').width
    },

    description: {
        margin: 5,
        textAlign: 'justify',
    },

})