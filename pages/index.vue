<script lang="ts" setup>
import { useQuery } from 'villus'

const { data } = useQuery({
  query: `{ boards { id name } }`,
})
</script>

<template>
  <div class="grid grid-cols-4 grid-rows-5 gap-10 w-full">
    <NuxtLink v-for="(board, index) in data?.boards" :key="index" :to="`/board/${board.id}`" class="p-4 border">
      {{ board.name }}
    </NuxtLink>
  </div>
</template>
