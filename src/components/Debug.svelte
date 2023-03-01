<script lang="ts">
	import { timeEntries, totalHours } from '../stores/timeEntries'
	import { projects } from '../stores/projects'
</script>

<pre>$totalHours: {JSON.stringify($totalHours, null, 2)}</pre>
<pre>$projects: {JSON.stringify($projects, null, 2)}</pre>
<pre>$timeEntries {JSON.stringify($timeEntries, null, 2)}</pre>
