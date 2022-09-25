import { defineStore } from 'pinia';

export const useStoreLivros = defineStore('storeLivros', {
	state: () => {
		return { count: 0 };
	},
});
