<template>
  <div class="flex h-screen">
    <Sidebar />

    <div class="flex flex-1 p-8 overflow-auto">
      <slot />
    </div>
  </div>
</template>
