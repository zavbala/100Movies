<script lang="ts">
	import { onMount, getContext } from 'svelte';
	import Movie from './Movie.svelte';
	import Error from './Error.svelte';
	import { movies, filteredByQuery } from '$lib/stores/filter';

	const movieItems = getContext('items') as [];

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
