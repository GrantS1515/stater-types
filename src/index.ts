import { produce, enableMapSet } from "immer";

enableMapSet()

export type State<T> = {
	read: T;
	events: Map<string, Set<Event> >;
}

export type Event = {
	id: string,
	pid: string,
}

export function events2object(events: Map<string, Set<Event>>): object {
	const myObj = {};
	const eventsObj = Object.fromEntries(events);
	const eventsKeys = Object.keys(eventsObj)
	eventsKeys.forEach((k: string) => {
		// @ts-ignore
		myObj[k] = Array.from(eventsObj[k])
	})
	
	return myObj
}