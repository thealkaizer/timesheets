<script lang="ts">
    import { projectsStore } from "$root/stores";
    import { get } from 'svelte/store';

    type removeEntryType = (id: string) => void;
    export let removeEntry: removeEntryType;

    export let localId;

    let categoryDisabled = true;
    let typeDisabled = true;
    let selectedProject;
    let selectedCategory;
    let selectedType;

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
    <button>X</button>
</main>

<style>
    main {
        background-color: aqua;
    }
</style>