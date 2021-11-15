<script lang="ts" setup>
import { useQuery } from 'villus'

const route = useRoute()

const variables = reactive({
  id: route.params.id,
})

const { data } = useQuery({
  variables,
  query: `
    query board ($id: String!) {
      board(id: $id) {
        id
        name
        lists {
          id
          name
          cards {
            id
            name
          }
        }
      }
    }
  `,
})
</script>

<template>
  <div class="flex flex-1">
    <div class="flex gap-10">
      <div v-for="list in data?.board?.lists" :key="list.id" class="w-272px">
        <div class="p-2 border">
          <div>
            <h2>{{ list.name }}</h2>
          </div>

          <div>
            <div v-for="card in list.cards" :key="card.id">
              <span>{{ card.name }}</span>
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
