<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import { useClient } from 'villus'

useClient({
  url: '/api/graphql',
})
</script>
