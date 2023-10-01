import apiClient from '@/api/apiClient'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useSearchBoxStore } from './searchBox'

const limit = 5

export const useWeatherStore = defineStore('weather', () => {
  const weatherResult = ref([])
  async function getWeather() {
    const city = useSearchBoxStore().searchText
    try {
      const response = await apiClient.get(
        `${city}&limit=${limit}&appid=${import.meta.env.VITE_API_KEY}`
      )

      weatherResult.value = response.data
    } catch (error) {
      console.error(error)
    }
  }

  return { weatherResult, getWeather }
})
