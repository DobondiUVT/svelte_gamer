import { fetchGames } from "../helpers/fetch";

export const load = async () => {
	return await fetchGames();
};
