<script>
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		max-width: 1024px;
		display: flex;
		flex-direction: column;
		margin: auto;
	}
</style>
