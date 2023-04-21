import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
    state: () => {
        return {
            curIndex: 2
        }
    },
    actions: {

    }
})