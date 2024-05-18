import { State, Event, events2object } from "./index.js"
import { expect } from "chai"

type TestState = {
	value: string,
}

// function newTestZeroState(): State<TestState> {
// 	return { read: { value: "" }, events: new Map() }
// }

// function newTestState(value: string, events: Event[]): State<TestState> {
// 	const eventMap = new Map();

// 	events.forEach((e: Event) => {
// 		if (eventMap.has(e.pid)) {
// 			eventMap.get(e.pid).add(e);
// 		} else {
// 			const mySet = new Set();
// 			mySet.add(e)
// 			eventMap.set(e.pid, e)
// 		}
// 	})

// 	return { read: { value: value }, events: eventMap }
// }

type ValueUpdate = {
	type: "value-update",
	value: string
}

type ValueUpdateEvent = ValueUpdate & Event;

function newValueUpdateEvent(value: string, id: string, pid: string): ValueUpdateEvent {
	return { type: "value-update", value: value, id: id, pid: pid }
}


describe("test the stringification of state", () => {
	it("can transform simple state to a string", () => {
		const myEvents = new Map();
		const e = newValueUpdateEvent("value", "my-id", "my-pid");
		myEvents.set("my-pid", new Set([e]))
		const myObj = events2object(myEvents);
		const goalObj = {
			"my-pid": [e]
		}

		expect(myObj).to.deep.equal(goalObj)
	})
})