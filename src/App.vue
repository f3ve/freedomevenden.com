<template>
  <div class="relative m-a min-h-screen w-screen prose fe-border-x bg-base">
    <CoreNavBar class="m-w-screen" />
    <main class="min-h-screen" style="padding-bottom: 100px">
      <RouterView />
    </main>
    <CoreFooter class="absolute bottom-0" />
  </div>
</template>
