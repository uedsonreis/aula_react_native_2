import { useNavigation, useRoute } from '@react-navigation/native'
import { Button, Image, Text, View } from 'react-native'

import { Planet } from '../../model/planet'
import { ScreenNavigationProp } from '../../Routes'

import styles from './styles'

export default function DetailPage() {

    const route = useRoute()
    const navigation = useNavigation<ScreenNavigationProp['navigation']>()

    const { planet } = route.params as { planet: Planet }

    navigation.setOptions({ headerTitle: planet.name })

    navigation.setOptions({
        headerRight: () => (
            <Button title='Moons' onPress={() => {
                navigation.navigate('Moons', { planet })
            }} />
        )
    })

    return (
        <View>
            <Image source={{ uri: planet.imgUrl, height: styles.image.height }} />
            <Text style={styles.description}>{ planet.description }</Text>
            <Text style={styles.description}>Mass: { planet.mass }</Text>
            <Text style={styles.description}>Volume: { planet.volume }</Text>
        </View>
    )
}