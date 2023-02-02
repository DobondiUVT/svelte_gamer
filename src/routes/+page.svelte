<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<h1 class="mx-auto text-3xl text-teal-700 decoration-orange-400">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>
    {JSON.stringify(data)}
</div>
