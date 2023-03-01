<script lang="ts">
	import { timeEntries } from '$root/stores/timeEntries'
	import Entry from '$root/components/Entry.svelte'
</script>

<main>
	<h1>Semaine du 6 mars au 10 mars</h1>

	<button>...</button>

	<button on:click={timeEntries.add}> Add entry </button>

	{#each $timeEntries as entry, i (entry.localId)}
		<Entry bind:entry={$timeEntries[i]} />
	{/each}

	<hr />
</main>

<style>
	main {
		width: 60rem;
		height: fit-content;
		padding: 1rem;

		background-color: white;
		border: .3rem solid black;
		border-radius: 1rem;
	}

	h1 {
		margin: 0;
	}
</style>
