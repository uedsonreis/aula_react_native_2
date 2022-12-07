import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        padding: 15,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width,
    },

    title: {
        fontSize: 18,
    },

    subTitle: {
        fontSize: 12,
        textAlign: 'right',
    }

})