import { enableMapSet } from "immer";
enableMapSet();
export function events2object(events) {
    const myObj = {};
    for (const [key, value] of events) {
        myObj[key] = Array.from(value);
    }
    return myObj;
}
