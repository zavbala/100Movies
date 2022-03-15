import MoviesJSON from '../../../static/movies.json';
import fs from 'fs';

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
		const filteredByID = MoviesJSON.filter((movie) => movie.id === movieId);
		if (filteredByID.length) {
			return {
				body: {
					...filteredByID[0]
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

	const { mtime } = fs.statSync('./static/movies.json');

	return {
		body: {
			last_update: mtime,
			items: MoviesJSON
			// pages: 0
		}
	};
};
