export type State<T> = {
    read: T;
    events: Map<string, Set<Event>>;
};
export type Event = {
    id: string;
    pid: string;
};
