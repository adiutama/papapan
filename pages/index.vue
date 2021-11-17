<script lang="ts" setup>
import { useQuery } from 'villus'

const { data } = useQuery({
  query: `{ boards { id name } }`,
})
</script>

<template>
  <div class="flex flex-col flex-1 gap-8">
    <div>
      <h1>All Documents</h1>
    </div>

    <div class="grid grid-cols-4 grid-rows-5 gap-10 w-full h-full">
      <NuxtLink v-for="(board, index) in data?.boards" :key="index" :to="`/board/${board.id}`" class="p-4 border">
        {{ board.name }}
      </NuxtLink>
    </div>
  </div>
</template>
