import TimeEntry from "$root/components/TimeEntry.svelte";

export class TimeEntryType {
    localId: string;
    component: TimeEntry;

    constructor(id: string, component: TimeEntry) {
        this.localId = id;
        this.component = component;
    }
}