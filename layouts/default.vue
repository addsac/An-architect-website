<template>

  <div>
    <div class="lg:hidden fixed inset-0 z-50 bg-black flex flex-col justify-center items-center p-16">
      <p class="text-center font-sweet text-sm text-white">
        Please open this website on Desktop, it is a learning project for the custom animations.
      </p>
      <p class="mt-4 text-center font-sweet text-sm opacity-50 text-white">
        I didn't have the time to make it responsive 😅
      </p>
    </div>

    <div class="mx-auto max-w-screen-2xl">
      
      <!-- Modals -->
      <DefaultModalMenu />

      <DefaultCustomCursor />

      <DefaultLayoutGrid />

      <Nuxt />

    </div>
  </div>

</template>

<script>
export default {
    
}
</script>

<style>
</style>
