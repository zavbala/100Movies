<script lang="ts">
	import { filteredByQuery, movies } from '$lib/stores/filter';
	import type { IMovie } from '$lib/types';
	import { getContext, onMount } from 'svelte';
	import Error from './Error.svelte';
	import Movie from './Movie.svelte';

	const movieItems = getContext('items') as IMovie[];

	onMount(() => {
		$movies = movieItems;
	});
</script>

<section>
	{#if $filteredByQuery.length}
		{#each $filteredByQuery as item}
			{#key item}
				<Movie {item} />
			{/key}
		{/each}
	{:else}
		<Error message="Item(s) Not Found" />
	{/if}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 1rem;
		padding: 1rem;
		justify-content: center;
	}

	@media screen and (max-width: 640px) {
		section {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media print {
		section {
			grid-template-columns: repeat(10, 1fr);
		}
	}
</style>
