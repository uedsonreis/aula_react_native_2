import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import MoonItem from "../../components/MoonItem";

import { Planet } from "../../model/planet";
import { ScreenNavigationProp } from "../../Routes";
import * as moonRepository from "../../services/moon.repository";

import styles from "./styles";

export default function MoonsPage() {

    const route = useRoute()
    const navigation = useNavigation<ScreenNavigationProp['navigation']>()

    const { planet } = route.params as { planet: Planet }
    const [moon, setMoon] = useState<string>('')
    const [list, setList] = useState<string[]>([])

    useEffect(() => {
        navigation.setOptions({ headerTitle: "Moons of " + planet.name })

        updateList()
    }, [planet])

    function updateList() {
        moonRepository.list(planet.id).then(result => setList(result))
    }

    function save() {
        moonRepository.addMoon(planet.id, moon).then(() => {
            updateList()
        })
        setMoon('')
    }

    async function remove(moon: string) {
        await moonRepository.remove(planet.id, moon)
        updateList()
    }

    return (
        <View>
            <TextInput style={styles.input} value={moon} onChangeText={setMoon} />
            <Button title="Add a new Moon" onPress={save} />
            <FlatList
                data={list}
                renderItem={
                    elem => <MoonItem moon={elem.item} remove={remove} />
                }
            />
        </View>
    )
}