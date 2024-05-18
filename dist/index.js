import { enableMapSet } from "immer";
enableMapSet();
export function events2object(events) {
    const myObj = {};
    const eventsObj = Object.fromEntries(events);
    const eventsKeys = Object.keys(eventsObj);
    eventsKeys.forEach((k) => {
        // @ts-ignore
        myObj[k] = Array.from(eventsObj[k]);
    });
    return myObj;
}
