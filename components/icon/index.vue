<script lang="ts" setup>
interface ComponentProps {
  name: string
  size?: string
}

const props = defineProps<ComponentProps>()

</script>

<template>
  <div class="flex items-center justify-center">
    <FeatherIcon :type="props.name" :size="props.size" />
  </div>
</template>
