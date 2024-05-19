import { produce, enableMapSet } from "immer";

enableMapSet()

export type State<T> = {
	read: T;
	events: Map<string, Set<Event>>;
}

export type Event = {
	id: string,
	pid: string,
}

export function events2object(events: Map<string, Set<Event>>): object {
	const myObj: { [key: string]: Event[] } = {};
	for (const [key, value] of events) {
		myObj[key] = Array.from(value)
	}
	return myObj
}