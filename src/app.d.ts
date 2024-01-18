// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		//interface Locals {}
		//interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	declare class Product {
		id: String
		name: String
		price: number
		info: String
	}

	declare class cartItem {
		id: String
		quantity: number
	}
}
export {};