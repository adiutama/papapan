<script lang="ts" setup>
import { useQuery } from 'villus'

const { data } = useQuery({
  query: `{ boards { id name } }`,
})
</script>

<template>
  <div class="flex h-full">
    <div class="flex flex-col justify-between px-4 pt-6 pb-8 bg-gray-300">
      <div class="flex flex-col justify-center gap-4">
        <NuxtLink to="/" title="Personal" class="text-center">
          <Avatar name="Personal" />
        </NuxtLink>
        <NuxtLink to="/" title="Add Workspace">
          <Icon name="plus" />
        </NuxtLink>
      </div>
      <div class="flex flex-col gap-4">
        <NuxtLink to="/" title="My Account">
          <Icon name="user" />
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-col gap-8 py-8 px-4 bg-gray-200">
      <div class="flex justify-between">
        <h2>Personal</h2>

        <NuxtLink to="/" title="Workspace menu">
          <Icon name="more-vertical" size="1em" />
        </NuxtLink>
      </div>

      <div class="flex flex-col min-w-64 gap-4">
        <NuxtLink to="/" title="Home" class="flex items-center gap-2">
          <Icon name="home" size="1em" />
          <span>All Documents</span>
        </NuxtLink>
        <NuxtLink to="/" title="Activity" class="flex items-center gap-2">
          <Icon name="activity" size="1em" />
          <span>Activity</span>
        </NuxtLink>
        <NuxtLink to="/" title="Archived" class="flex items-center gap-2">
          <Icon name="archive" size="1em" />
          <span>Archived</span>
        </NuxtLink>
      </div>

      <div class="flex flex-col min-w-64 gap-4">
        <h3>Documents</h3>

        <NuxtLink
          v-for="item in data?.boards"
          :key="item.id"
          :to="'/board/' + item.id"
          title="Home"
          class="flex items-center gap-2"
        >
          <Icon name="file" size="1em" />
          <span>{{ item.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
