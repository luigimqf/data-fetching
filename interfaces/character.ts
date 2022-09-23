export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Item {
  resourceURI: string;
  name: string;
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface ICharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: Comics;
}

export interface ICharactersProps {
  characters: ICharacter[];
}

export interface ICharacterCard {
  index:number;
  source:string;
}


