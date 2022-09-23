import { NextPage } from "next";
import React from "react";
import charactersService from "../../services/charactersService";

interface IProps {
  character: any
}

const Character: NextPage<IProps> = ({character}) => {

  return(
  <>
    <h1>{character.name}</h1>
    <h1>{character.description}</h1>
  </>
  )
}

export const getStaticPaths = async () => {

  const characters = await charactersService.getCharacters();
  
  const paths = characters.map((character: any) => {
    return {
      params: { id: character.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const character = await charactersService.getSingleCharacter(id);

  return {
    props: {
      character
    }
  }
}



export default Character