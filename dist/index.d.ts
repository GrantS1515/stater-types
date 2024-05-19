export type State<T> = {
    read: T;
    events: Map<string, Set<Event>>;
};
export type Event = {
    id: string;
    pid: string;
    type: string;
};
export declare function events2object(events: Map<string, Set<Event>>): object;
