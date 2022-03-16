import MoviesJSON from '$lib/data/movies.json';
// import fs from 'fs';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async ({ params }) => {
	const [path, movieId] = params.slug.split('/');

	if (path !== 'movies') {
		return {
			status: 404,
			body: {
				detail: ''
			}
		};
	}

	if (movieId) {
		const [filteredByID] = MoviesJSON.filter((movie) => movie.id === movieId);

		if (filteredByID) {
			return {
				body: {
					...filteredByID
				}
			};
		} else {
			return {
				status: 404,
				body: {
					detail: 'Movie not found'
				}
			};
		}
	}

	// const { mtime } = fs.statSync('./');

	return {
		body: {
			// last_update: mtime,
			items: MoviesJSON
			// pages: 0
		}
	};
};
