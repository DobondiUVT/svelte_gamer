import { json, type RequestHandler } from "@sveltejs/kit";
import { fetchBase } from "../../../helpers/fetch";

export const POST = (async ({ request }) => {
	const { query } = await request.json();
	return json(await fetchBase("https://api.igdb.com/v4/games", `where id = ${query}; fields screenshots.*;`));
}) satisfies RequestHandler;
