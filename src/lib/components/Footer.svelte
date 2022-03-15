<script>
	import { bucket } from '$lib/stores/bucket';
	import { goto } from '$app/navigation';

	const share = () => {
		if (navigator.share) {
			navigator
				.share({
					url: 'https://100movies.vercel.app'
				})
				.then((resolve) => console.log('Success'))
				.catch((error) => console.log(error));
		}
	};

	const resetBucket = () => {
		if (confirm('Restore bucket?')) {
			bucket.set('');
			window.localStorage.setItem('bucket', '');
		}
	};
</script>

<footer>
	<div on:click={() => goto('/')}>
		<i class="fi fi-rr-popcorn" />
		<span>100 Movies</span>
	</div>

	<ul>
		<!-- <li on:click={() => goto('docs')}>Developer</li> -->
		<li>GitHub</li>
	</ul>

	<div>
		<button on:click={share}>
			<i class="fi fi-rr-share" />
		</button>

		<button on:click={resetBucket}>
			<i class="fi fi-rr-trash" />
		</button>
	</div>
</footer>

<style>
	footer {
		margin: 2rem 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	div > i {
		font-size: 2.5rem;
		color: var(--spring-green);
	}

	span {
		font-size: 2.5rem;
		letter-spacing: 0.1rem;
	}

	ul {
		font-family: 'Space Mono', monospace;
		font-size: 0.8rem;
	}

	li:hover {
		color: var(--spring-green);
		cursor: pointer;
	}

	@media screen and (max-width: 640px) {
		footer {
			flex-direction: column;
			justify-content: center;
		}
	}
</style>
