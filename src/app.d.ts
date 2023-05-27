// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
	interface Error {
	message: string;
	status?: number;
	}
	
	interface Locals {
	user?: {
	id: string;
	name: string;
	};
	}
	
	interface PageData {
	title: string;
	description: string;
	}
	
	interface Platform {
	isMobile: boolean;
	isDesktop: boolean;
	}
	}
	}
	
	export {};
	

