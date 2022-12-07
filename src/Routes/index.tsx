import { StackScreenProps } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomePage from '../pages/Home'
import DetailPage from '../pages/Detail'
import { Planet } from '../model/planet'
import MoonsPage from '../pages/Moons'

export type ScreenNavigationProp = StackScreenProps<{
    Home: undefined,
    Detail: { planet: Planet },
    Moons: { planet: Planet },
}>

const Stack = createNativeStackNavigator()

export default function () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage} options={{ headerTitle: 'Solar System Planets' }} />
                <Stack.Screen name="Detail" component={DetailPage} />
                <Stack.Screen name="Moons" component={MoonsPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}