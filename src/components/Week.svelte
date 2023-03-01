<script lang="ts">
    import TimeEntry from "$root/components/TimeEntry.svelte";
    import type { TimeEntryType } from "$root/types/timeEntryType";
    import { v4 as uuidv4 } from 'uuid';

    let timeEntries: TimeEntryType[] = [];

    function addEntry():void {
        const newId = uuidv4();
        let newEntry: TimeEntryType = {
            localId: newId,
            firestoreId: ""
        }
        timeEntries = [...timeEntries, newEntry];
    }

    function removeEntry(id: string):void {
        timeEntries = timeEntries.filter(entry => entry.localId !== id);
    }

</script>

<main>
    <h1>Semaine du 6 mars au 10 mars</h1>
    <button>...</button>
    <button on:click={addEntry}>Add entry</button>
    {#each timeEntries as entry (entry.localId)}
        <TimeEntry localId={entry.localId} {removeEntry} />
    {/each}
    <hr>
    
</main>

<style>
    main {
        background-color: white;
        border: 5px solid black;
        border-radius: 3rem;
        padding: 1rem;
        width: 60rem;
        height: fit-content;
    }
    
    h1 {
        margin: 0;
    }
</style>