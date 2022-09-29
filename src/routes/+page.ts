export async function load({ fetch }) {
	const res = await fetch('/api/movies');
	const data = await res.json();

	if (res.ok) return data;
}
