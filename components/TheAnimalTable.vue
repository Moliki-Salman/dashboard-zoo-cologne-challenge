<script lang="ts" setup>
import { computed,  } from "vue";
import type { Animal } from "~/types";
import useCalculateAgeInYears from '../utils/useCalculateAgeInYears.js'


const props = defineProps<{
  animals: Animal[];
}>();

const selectedAnimal = ref<Animal | null>(null)

const animalsSortedByName = computed(() =>
  props.animals
    .slice()
    .sort((animalA, animalB) => (animalA.name > animalB.name ? 1 : -1))
);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Index</th>
        <th>Species</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age (yrs)</th>
        <th>Weight (kg)</th>
        <th>Height (m)</th>
        <th>FavoriteFruit</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(
          { species, name, gender, birthdate, weight, height, favouriteFruit  }, animalIndex
        ) in animalsSortedByName"
        :key="animalIndex" class="hover:bg-orange-200" @click="selectedAnimal = animals[animalIndex]"
      >
        <td>{{ animalIndex + 1 }}</td>
        <td>{{ species }}</td>
        <td>{{ name }}</td>
        <td>{{ gender }}</td>
        <td>{{ useCalculateAgeInYears(new Date(birthdate))}}</td>
        <td>{{ weight }}</td>
        <td>{{ height }}</td>
        <td>{{ favouriteFruit }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  @apply table-auto w-full text-left;
}
td {
  @apply w-40;
}
tr {
  @apply border-b-2;
}
tbody tr {
  @apply hover:bg-gray-200;
}
</style>
