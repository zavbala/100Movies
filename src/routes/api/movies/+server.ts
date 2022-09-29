import MoviesJSON from '$lib/data/Movies.json';
import type { RequestEvent } from '@sveltejs/kit';

export const GET = async ({ setHeaders }: RequestEvent) => {
	setHeaders({
		'Content-Type': 'application/json'
	});

	return new Response(JSON.stringify({ items: MoviesJSON, total: MoviesJSON.length }));
};
