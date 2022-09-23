import { NextPage } from "next";
import React, { SetStateAction, useMemo } from "react";
import Search from "../../components/Characters/Search";
import { ICharactersProps } from "../../interfaces/";
import charactersService from "../../services/charactersService";
import styles from "../../styles/Characters/Characters.module.css";
import { filterItemWithThumb, getThumb } from "../../utils/getThumb";


const Characters: NextPage<ICharactersProps> = ({characters}) => {
  const [search, setSearch] = React.useState<string>("");

  const renderCharacters = useMemo(() => {
    return characters
    .filter(character => filterItemWithThumb(character))
    .filter(character => character?.name?.toLowerCase().includes(search?.toLowerCase()))
    .map((character,index) => {
      const thumb = getThumb(character);
      return (
        <div className={styles.card} >
        </div>
      );
    });
  }, [characters, search]);

  return (
    <div className={styles.wrapper}>
      <Search setState={setSearch}/>
      <div className={styles.characterWrapper}>
        {renderCharacters}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {

  const characters = await charactersService.getCharacters();

  return {
    props: {
      characters
    },
  }
}

export default Characters;