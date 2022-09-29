import MoviesJSON from '$lib/data/Movies.json';
import type { RequestEvent } from '@sveltejs/kit';

export const GET = async ({ setHeaders, params }: RequestEvent) => {
	const { id } = params;

	setHeaders({
		'Content-Type': 'application/json'
	});

	const movie = MoviesJSON.find((movie) => movie.id === Number(id));

	if (!movie) {
		return new Response(JSON.stringify({ message: 'Movie Not Found' }), { status: 404 });
	}

	return new Response(JSON.stringify(movie));
};
