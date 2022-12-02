import { ImageEditor } from "react-native";
import { Planet } from "../model/planet";

const url = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5e63c3b71amsh23322dff397b496p139575jsnbb1f7014177e',
		'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
	}
}

export async function getPlanets() {
    const list = await fetch(`${url}/planet/list`, options)
        .then(response => response.json())
        .catch(err => console.error(err))

    list.sort((a: any, b: any) => a.id - b.id)

    return list.map((item: any) => ({
        id: item.id,
        key: item.key,
        name: item.name,
        description: item.description,
        imgUrl: item.imgSrc[0].img,
        mass: item.basicDetails[0].mass,
        volume: item.basicDetails[0].volume,
    })) as Planet[]
}
