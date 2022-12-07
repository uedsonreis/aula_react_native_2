import AsyncStorage from '@react-native-async-storage/async-storage'

const KEY = '@storage_planet_'

export async function list(id: number): Promise<string[]> {
    const jsonValue = await AsyncStorage.getItem(KEY + id)
    const value = jsonValue ? JSON.parse(jsonValue) : []
    return value
}

export async function addMoon(id: number, moon: string) {
    const moons = await list(id)
    moons.push(moon)
    await AsyncStorage.setItem(KEY + id, JSON.stringify(moons))
}

export async function remove(id: number, moon: string) {
    let moons = await list(id)
    
    moons = moons.filter(m => m !== moon)
    
    await AsyncStorage.setItem(KEY + id, JSON.stringify(moons))
}