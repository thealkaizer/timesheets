<script lang="ts">
	import { totalHours, type TimeEntry } from '$root/stores/timeEntries'

	import { timeEntries } from '$root/stores/timeEntries'
	import { projects } from '$root/stores/projects'

	export let entry: TimeEntry

	$: categoryDisabled = entry.project.name === ''
	$: typeDisabled = entry.category === ''

	$: max = 35 - $totalHours + entry.hours
</script>

<main>
	<select bind:value={entry.project.name} name="" id="">
		<option value="" selected disabled hidden>Project</option>
		{#each $projects as project}
			<option>{project.name}</option>
		{/each}
	</select>

	<select bind:value={entry.category} name="" id="" disabled={categoryDisabled}>
		<option value="" selected disabled hidden>Work Category</option>
		<option value="Design">Design</option>
	</select>

	<select bind:value={entry.type} name="" id="" disabled={typeDisabled}>
		<option value={entry.type} selected disabled hidden>Work Details</option>
	</select>

	<button on:click={() => timeEntries.remove(entry.localId)}>X</button>

	<input bind:checked={entry.isRND} type="checkbox" />

	<input type="number" bind:value={entry.hours} min="0" {max} />

	<input type="range" bind:value={entry.hours} min="0" {max} />
</main>

<style>
	main {
		margin: 0.5rem 3rem;
		padding: 0.5rem;

		background-color: dimgray;
	}
</style>
