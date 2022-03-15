<script>
	export let message;
</script>

<div class="flex-center">
	<i class="fi fi-rr-sad-tear" />
	<span> {message} </span>
</div>

<style>
	div {
		flex-direction: column;
		grid-column: 5 span / 5 span;
	}

	i {
		font-size: 20rem;
		color: #fff;
	}

	span {
		font-size: 2rem;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
	}

	@media screen and (max-width: 640px) {
		i {
			font-size: 15rem;
		}
		span {
			font-size: 1rem;
		}
	}
</style>
