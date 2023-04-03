<script lang="ts">
	import { fetchBase } from "../helpers/fetch";
	import type { PageData } from "./$types";
	export let data: PageData;
	let getImage = async(query: String) => {
	    const response = await fetch("/api/cover", {
	        method: "POST",
	        body: JSON.stringify({ query }),
	        headers: {
	            "content-type": "application/json"
	        }
	    });
	    const { data } = await response.json();
	    console.log(data)
	    return data[0]?.screenshots;
	}
    let replaceSize = (url: String, size: String) => {
        return url.replace("thumb", size);
    }
	let searchGames = async (query: String) => {
		const response = await fetch("/api/search", {
			method: "POST",
			body: JSON.stringify({ query }),
			headers: {
				"content-type": "application/json"
			}
		});
		const { data } = await response.json();
		searchedData = await Promise.all(
			data.map(async (element: any) => {
				let images = await getImage(element.id);
				let object = {
					name: element.name,
					covers: images
				};
				return object;
			})
		);
		console.log(searchedData);
	};
	let search = "";
	let searchedData = [];
</script>

<h1 class="mx-auto text-3xl text-teal-700 decoration-orange-400">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>
	{JSON.stringify(data)}
</div>

<input
	class="border border-gray-400"
	bind:value={search}
/>
<button on:click={(e) => searchGames(search)}>Search</button>
{search}
{#each searchedData as game}
    <div class="bg-gray-300 p-4 rounded-md mb-3">
        <div class="text-3xl font-bold mb-3">{game.name}</div>
        <img src={replaceSize(game.covers[0]?.url, "screenshot_huge")} alt="" width="1280" height="720"/>
    </div>
{/each}
