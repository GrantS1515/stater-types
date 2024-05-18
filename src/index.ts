export type State<T> = {
	read: T;
	events: Map<string, Event>;
}

export type Event = {
	id: string,
	pid: string,
}