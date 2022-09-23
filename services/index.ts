import axios from "axios";
import md5 from "blueimp-md5";

const {NEXT_PUBLIC_PUBLIC_KEY, NEXT_PUBLIC_PRIVATE_KEY} = process.env;

export const api = axios.create({baseURL: "https://gateway.marvel.com"});
const timestamp = new Date().getTime();
const hash = md5(timestamp + (NEXT_PUBLIC_PRIVATE_KEY || '' )  + ( NEXT_PUBLIC_PUBLIC_KEY || '' ));
export const authorizationToken = `?ts=${timestamp}&apikey=${NEXT_PUBLIC_PUBLIC_KEY}&hash=${hash}`;