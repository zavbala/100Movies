<script context="module" lang="ts">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/movies');
		const data = await res.json();

		if (res.ok) {
			return {
				props: {
					items: data['items']
				}
			};
		}
	};
</script>

<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import Bucket from '$lib/components/Bucket.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	export let items;
	setContext('items', items);

	// onMount(() => console.log('%c github/zavbala/100movies', 'font-size:1rem'));
</script>

<svelte:head>
	<title>100 Movies</title>
</svelte:head>

<Navbar />
<Bucket />
