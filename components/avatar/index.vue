<script lang="ts" setup>
interface ComponentProps {
  name: string
}

const props = defineProps<ComponentProps>()

const initial = computed(() => {
  const getWords = (name: string) => name.match(/(^\S\S?|\b\S)?/g)?.join('') || ''
  const getInitial = (name: string) => name.match(/(^\S|\S$)?/g)?.join('') || ''

  return getInitial(getWords(props.name)).toUpperCase()
})
</script>

<template>
  <div
    class="flex items-center justify-center w-2em h-2em border rounded"
    v-text="initial"
  />
</template>
