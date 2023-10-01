import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchBoxStore = defineStore('searchBox', () => {
  const searchText = ref('')

  return { searchText }
})
