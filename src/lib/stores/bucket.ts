import { writable } from 'svelte/store';
import { browser } from '$app/env';

const stored = browser && window.localStorage.getItem('bucket');
export const bucket = writable(stored || '');

bucket.subscribe((values) => {
	if (browser) return (window.localStorage.bucket = values);
	else return '';
});
