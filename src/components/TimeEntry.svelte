<script lang="ts">
    import { projectsStore } from "$root/stores";
    import { get } from 'svelte/store';

    type removeEntryType = (id: string) => void;
    export let removeEntry: removeEntryType;

    export let localId: string;
    let hours: number = 0;
    let isRND: boolean = false;

    let categoryDisabled = true;
    let typeDisabled = true;
    let selectedProject: string;
    let selectedCategory: string;
    let selectedType: string;

    $: categoryDisabled = selectedProject === "";
    $: typeDisabled = selectedCategory === "";

    function handleRemoval() {
        removeEntry(localId);
    }
</script>

<main>
    <select bind:value={selectedProject} name="" id="">
        <option value="" selected disabled hidden>Project</option>
        {#each get(projectsStore) as project}
            <option>{project.name}</option>
        {/each}
    </select>
    <select bind:value={selectedCategory} name="" id="" disabled="{categoryDisabled}">
        <option value="" selected disabled hidden>Work Category</option>
        <option value="Design">Design</option>
    </select>
    <select bind:value={selectedType} name="" id="" disabled="{typeDisabled}">
        <option value="" selected disabled hidden>Work Details</option>
    </select>
    <button on:click={handleRemoval}>X</button>
    <input bind:checked={isRND} type="checkbox">
    <input type="number" bind:value={hours} min=0 max={35}>
    <input type="range" bind:value={hours} min=0 max={35}>
</main>

<style>
    main {
        background-color: gray;
        margin: 0.5rem 3rem;
        padding: 0.5rem;
    }
</style>