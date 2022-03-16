<script lang="ts">
	import { bucket } from '$lib/stores/bucket';
	import { RESIZE } from '$lib/constant';
	import type { IMovie } from '$lib/types';
	import { fade, scale } from 'svelte/transition';

	export let item: IMovie;
	const { id, poster, title } = item;

	$: isWatched = $bucket.includes(id);

	const resizeImage = (source: string, sizes: string[] = ['190', '281']): string => {
		const [file, type] = source.split('jpg');
		// const [width, height] = sizes;
		return file + RESIZE + 'jpg';
	};

	const handleBucket = (event: Event) => {
		const { id } = event.target as HTMLElement;
		const split = $bucket.split(',');

		console.log(split);

		if (isWatched) {
			split.splice(split.indexOf(id), 1);
			$bucket = String([...split]);
		} else {
			$bucket = String([...split, id]);
		}
	};
</script>

<article transition:fade {id} on:click={handleBucket}>
	<img
		class:ghost={isWatched}
		on:click={handleBucket}
		on:dragstart|preventDefault={() => {}}
		src={resizeImage(poster)}
		alt={title}
		loading="lazy"
	/>

	{#if isWatched}
		<i transition:scale class="fi fi-sr-eye" />
	{/if}

	<h4>{title}</h4>
</article>

<style>
	article {
		position: relative;
		grid-column: 1 span / span 1;
		border-radius: 5px;
		transition: all 0.3s;
		cursor: pointer;
	}

	article:hover {
		transform: scale(90%);
	}

	h4 {
		text-transform: capitalize;
		font-family: 'Bebas Neue', sans-serif;
		text-align: center;
		letter-spacing: 0.1rem;
	}

	img {
		width: 100%;
		border-radius: 3px;
	}

	i {
		position: absolute;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		font-size: 3rem;
	}

	@media screen and (max-width: 1024px) {
		article:hover {
			transform: scale(100%);
		}
	}

	@media print {
		i,
		h4 {
			display: none;
		}

		img {
			filter: blur(0px);
			width: 75px;
		}

		article {
			margin: auto;
		}
	}
</style>
