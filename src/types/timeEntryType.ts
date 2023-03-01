import type TimeEntry from "$root/components/TimeEntry.svelte";

export class TimeEntryType {
    localId: string;
    firestoreId: string;

    constructor(id?: string, firestoreId?: string) {
        this.localId = id;
        this.firestoreId = firestoreId;
    }
}