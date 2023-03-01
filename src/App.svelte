<script lang="ts">
    //firebase
    import { firebaseApp, firestoreDb } from "$root/firebaseConfig";
    import { getDocs, collection } from "firebase/firestore";
    import type { ProjectType } from "./types/projectType";


    //stores
    import { projectsStore } from "$root/stores";

    //svelte
    import Week from "$root/components/Week.svelte";

    fetchProjects();

    async function fetchProjects() {
        try {
            console.log("Fetching projects");
            const snapshot = await getDocs(collection(firestoreDb, "projects"));
            let projectsArray = [];
            snapshot.forEach((project) => {
            const projectObject: ProjectType = {
                name: project.data().name
             }
            projectsArray = [...projectsArray, projectObject];
            projectsStore.set(projectsArray);
        })
        } catch(e) {
            console.log("Error " + e);
        }
    }
</script>

<Week/>