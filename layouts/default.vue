<template>
  <div class="flex h-screen">
    <div class="flex h-full">
      <div class="flex flex-col justify-between px-4 py-8 bg-gray-300">
        <div class="flex flex-col gap-4">
          <NuxtLink to="/" title="Personal" class="text-center">
            P
          </NuxtLink>
          <NuxtLink to="/" title="Add Workspace">
            <FeatherIcon type="plus" />
          </NuxtLink>
        </div>
        <div class="flex flex-col gap-4">
          <NuxtLink to="/" title="My Account">
            <FeatherIcon type="user" />
          </NuxtLink>
        </div>
      </div>

      <div class="flex flex-col gap-8 py-8 px-4 bg-gray-200">
        <div class="flex justify-between">
          <h1>Personal</h1>

          <NuxtLink to="/" title="Workspace menu">
            <FeatherIcon type="more-vertical" size="1em" />
          </NuxtLink>
        </div>

        <div class="flex flex-col min-w-64 gap-4">
          <NuxtLink to="/" title="Home" class="flex items-center gap-2">
            <FeatherIcon type="home" size="1em" />
            <span>All Documents</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="flex flex-1 p-8 overflow-auto">
      <slot />
    </div>
  </div>
</template>
