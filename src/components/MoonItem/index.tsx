import { Text, View } from "react-native"
import { BorderlessButton, GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'

import styles from "./styles"

type Props = {
    moon: string,
    remove: (moon: string) => void
}

export default function MoonItem(props: Props) {

    function DeleteButton() {
        return (
            <View style={styles.deleteContainer}>
                <BorderlessButton onPress={() => props.remove(props.moon)}>
                    <Text style={styles.deleteText}>Delete</Text>
                </BorderlessButton>
            </View>
        )
    }

    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={() => <DeleteButton />}>
                <View style={styles.container}>
                    <Text style={styles.text}>{props.moon}</Text>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    )
}