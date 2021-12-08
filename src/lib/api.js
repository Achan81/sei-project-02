import axios from 'axios'

const baseUrl = 'https://akabab.github.io/superhero-api/api'

//*Api Requests
export function getAllCharacters() {
  return axios.get(`${baseUrl}/all.json`)
}

export function getSingleCharacter(charactersCharacterId) {
  return axios.get(`${baseUrl}/id/${charactersCharacterId}.json`)
}



