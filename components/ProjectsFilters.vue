<template>
  <div class="mx-auto w-full flex justify-center items-center font-sweet">
    <p class="font-sweet text-lg mr-2"> <nobr>Filtra per:</nobr> </p>

  <div class="flex flex-wrap">
    <button
      v-for="filter in filters"
      :key="filter.fields.nome"
      @click="filterSelected = filter.fields.nome"
      :class="filterSelected == filter.fields.nome ? 'bg-black text-white' : 'hover:bg-gray-100'"
      class="px-4 py-2 border border-black ml-3 mb-3"
    >
      {{ filter.fields.nome }}
    </button>
  </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('projects', ['filters']),
  },
  data() {
    return {
      filterSelected: 'Tutto',
    }
  },
}
</script>

<style>
</style>