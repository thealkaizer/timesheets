import type { Project } from './projects';

import { derived, get, writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

export interface TimeEntry {
    localId: string;
    firestoreId: string;
    project: Project;
    hours: number;
    category: string;
    type: string;
    isRND: boolean;
}

/** A custom Svelte store that holds and updates {@link TimeEntry time entries}. */
export const timeEntries = createTimeEntryStore();

function createTimeEntryStore() {
    const { subscribe, set, update } = writable<TimeEntry[]>([]);

    function add() {
        /** Default entry used when creating a new entry. */
        const newEntry = {
            localId: uuidv4(),
            firestoreId: '',
            project: {
                name: '',
            },
            hours: 0,
            category: '',
            type: '',
            isRND: false,
        } satisfies TimeEntry;

		update((value) => [...value, newEntry]);
    }

    function remove(id: string) {
        update((value) => value.filter((entry) => entry.localId !== id));
    }

    return {
        subscribe,
        set,
        update,
        add,
        remove,
    };
}

export const totalHours = derived(timeEntries, ($timeEntries) => {
	return $timeEntries.reduce((total, entry) => total + entry.hours, 0);
})
