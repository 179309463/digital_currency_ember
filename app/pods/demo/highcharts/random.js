export function randomNumber(seed) {
  return Math.random(seed);
}

export function randomDate(start, end) {
	let date = new Date();
	let a = start.getTime();
	let b = end.getTime();
	date.setTime(Math.random(b-a)+a);
	return date;
}
