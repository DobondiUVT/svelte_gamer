import { get } from "svelte/store";
import header from "../stores/header";

export const fetchBase = async (url: string, body: string) => {
	const response = await fetch(url, {...get(header), body});
	const data = await response.json();
	return { data };
}

export const fetchGames = async (body = "fields name; limit 10;") => {
    const url = "https://api.igdb.com/v4/games";
    return await fetchBase(url, body);
}