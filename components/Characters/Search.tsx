import styles from "../../styles/Characters/Search.module.css";
import {BsSearch as SearchIcon} from 'react-icons/bs'
import { ISearchProps } from "../../interfaces/search";


const Search = ({setState}:ISearchProps) => {
  return (
    <div className={styles.searchBox}>
      <SearchIcon size={20}/>
      <input className={styles.input} 
        type="text" 
        placeholder="Filtre os herois"
        onChange={(event) => setState(event.target.value)}
      />
  </div>
  )
}

export default Search