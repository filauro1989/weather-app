<script lang="ts" setup>
import { useSearchBoxStore } from '@/stores/searchBox'
import { useWeatherStore } from '@/stores/weather'
import { storeToRefs } from 'pinia'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const searchBoxStore = useSearchBoxStore()
const weatherStore = useWeatherStore()

const { searchText } = storeToRefs(searchBoxStore)
</script>

<template>
  <div class="SearchBox">
    <label>Inserisci una città</label>
    <InputText class="SearchBox__CityInput" v-model="searchText" />
    <Button @click="weatherStore.getWeather" label="cerca" />
  </div>
</template>

<style lang="scss">
.SearchBox {
  margin-top: 1em;
  display: flex;
  align-items: center;
  &__CityInput {
    border: 1px solid #000;
    border-radius: 5px;
    padding: 5px;
    margin: 0 8px;
  }
}
</style>
