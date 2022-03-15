import { writable, derived } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { IMovie } from '../types';

export const movies: Writable<IMovie[]> = writable([]);
export const query: Writable<string> = writable('');

export const filteredByQuery = derived([movies, query], ([$movies, $query]) => {
	return $movies.filter((movie) => movie.title.includes($query));
});
