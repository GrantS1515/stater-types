import { events2object } from "./index.js";
import { expect } from "chai";
function newValueUpdateEvent(value, id, pid) {
    return { type: "value-update", value: value, id: id, pid: pid };
}
describe("test the stringification of state", () => {
    it("can transform simple state to a string", () => {
        const myEvents = new Map();
        const e = newValueUpdateEvent("value", "my-id", "my-pid");
        myEvents.set("my-pid", new Set([e]));
        const myObj = events2object(myEvents);
        const goalObj = {
            "my-pid": [e]
        };
        expect(myObj).to.deep.equal(goalObj);
    });
});
