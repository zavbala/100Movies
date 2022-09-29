<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import Bucket from '$lib/components/Bucket.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import type { IMovie } from '$lib/types';

	export let data: { items: IMovie[]; total: number };
	setContext('items', data['items']);

	onMount(() => console.log('%c github/zavbala/100movies', 'font-size:2rem'));
</script>

<svelte:head>
	<title>100 Movies</title>
</svelte:head>

<Navbar />
<Bucket />
