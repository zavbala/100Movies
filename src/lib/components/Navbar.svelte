<script lang="ts">
	import { query } from '$lib/stores/filter';

	let inputRef;
	const restoreQuery = () => query.set('');

	const handleHotKeys = (event: KeyboardEvent) => {
		if (event.keyCode == 75 && event.ctrlKey) {
			event.preventDefault();
			inputRef.focus();
		}
	};
</script>

<svelte:window on:keydown={handleHotKeys} />

<nav>
	<div class="apart">
		<i class="fi fi-rr-search" />
		<input bind:this={inputRef} bind:value={$query} autocomplete="off" type="search" />

		{#if $query}
			<button on:click|once={restoreQuery}>
				<i class="fi fi-rr-cross" />
			</button>
		{:else}
			<kbd>Ctrl K</kbd>
		{/if}
	</div>
</nav>

<style>
	nav {
		z-index: 20;
		top: 0;
		position: sticky;
		padding: 1rem 0;
		width: 100%;
		background-color: var(--bunker);
	}

	div {
		position: relative;
		border-radius: 3px;
		background-color: var(--outer-space);
		border: transparent 2px solid;
	}

	div:focus-within {
		border: #fff 2px solid;
	}

	kbd,
	button {
		position: absolute;
		right: 1rem;
	}

	i {
		position: absolute;
		left: 1rem;
	}

	button > i {
		position: static;
	}

	input {
		text-transform: uppercase;
		width: 100%;
		height: 100%;
		padding: 1rem;
		text-align: center;
		font-size: 1rem;
		letter-spacing: 0.1rem;
	}

	@media screen and (max-width: 640px) {
		div {
			width: 90%;
			margin: auto;
		}
	}
</style>
