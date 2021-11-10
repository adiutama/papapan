<template>
  <div class="flex flex-col h-screen">
    <div class="flex items-center h-10 p-8 bg-gray-300">
      <div class="flex flex-1">
        <h1>Kangban</h1>
      </div>
    </div>

    <div class="flex flex-1 p-8 overflow-auto">
      <slot />
    </div>
  </div>
</template>