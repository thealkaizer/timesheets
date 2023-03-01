import { writable } from "svelte/store";

export interface Project {
	name: string;
}

export const projects = writable<Project[]>([]);
