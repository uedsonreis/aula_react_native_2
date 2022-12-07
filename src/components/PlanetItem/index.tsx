import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'

import styles from './styles'
import { Planet } from '../../model/planet'
import { ScreenNavigationProp } from '../../Routes'

type Props = { planet: Planet }

export default function PlanetItem(props: Props) {

    const navigation = useNavigation<ScreenNavigationProp['navigation']>()

    function onPress() {
        navigation.navigate('Detail', { planet: props.planet })
    }

    return (
        <View style={styles.container} onTouchEnd={onPress}>
            <Text style={styles.title}>{ props.planet.name }</Text>
            <Text style={styles.subTitle}>{ props.planet.id }º planet</Text>
        </View>
    )
}