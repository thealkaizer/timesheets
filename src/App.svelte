<script lang="ts">
	//firebase
	import { getDocs, collection } from 'firebase/firestore'
	import { firestoreDb } from '$root/firebaseConfig'

	//stores
	import { projects } from '$root/stores/projects'
	
	//svelte
	import Debug from '$root/components/Debug.svelte'
	import Week from '$root/components/Week.svelte'

	fetchProjects()

	async function fetchProjects() {
		console.log('Fetching projects')
		try {
			const { docs } = await getDocs(collection(firestoreDb, 'projects'))
			
			$projects = docs.map((p) => ({ name: p.data().name }))
		} catch (e) {
			console.error('Error ' + e)
		}
	}

	// Change to true to show debug info
	let debug = false
</script>

<Week />

{#if debug}
	<Debug />
{/if}
