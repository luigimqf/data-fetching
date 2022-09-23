import { ICharacter } from "../interfaces/";

export const getThumb = (character:ICharacter) => character?.thumbnail?.path + '.' + character?.thumbnail?.extension;
export const filterItemWithThumb = (character:ICharacter) => !character?.thumbnail?.path?.includes('image_not_available');