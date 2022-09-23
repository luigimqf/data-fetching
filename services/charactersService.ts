import { api, authorizationToken } from ".";


class CharacterService {
  async getCharacters() {
    const {data} = await api.get(`/v1/public/characters${authorizationToken}`);
    const characters = data.data.results;
    return characters;
  }

  async getSingleCharacter(id: number) {
    const {data} = await api.get(`/v1/public/characters/${id}${authorizationToken}`);
    const character = data.data.results[0];
    return character;
  }

}

export default new CharacterService();