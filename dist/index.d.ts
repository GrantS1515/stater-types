export type State<T extends object> = {
    read: T;
    events: Map<string, Set<Event>>;
};
export type Event = {
    id: string;
    pid: string;
};
export declare function events2object(events: Map<string, Set<Event>>): object;
