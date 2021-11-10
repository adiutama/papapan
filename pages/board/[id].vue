<script lang="ts" setup>
const list = ref<Resource.List[]>([
  { title: 'Info' },
  { title: 'Backlog' },
  {
    title: 'Todo',
    cards: [
      { title: 'Task #1' },
      { title: 'Task #2' }
    ]
  },
  { title: 'Blocked' },
  { title: 'In Progress' },
  { title: 'In Review' },
  { title: 'In Done' },
])
</script>

<template>
  <div class="flex flex-1">
    <div class="flex gap-10">
      <div class="w-272px" v-for="(item, index) in list" :key="index">
        <div class="p-2 border">
          <div>
            <h2>{{ item.title }}</h2>
          </div>

          <div>
            <div v-for="(card, index) in item.cards" :key="index">
              <span>{{ card.title }}</span>
            </div>
          </div>

          <div>
            <a href="#" @click.prevent>+ Add a Card</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>