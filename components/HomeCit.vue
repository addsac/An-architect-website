<template>
  <blockquote>
    <div class="my-48 mx-72 flex items-center relative">
      <div class="absolute flex justify-center w-full">
        <img
          id="star-cit"
          src="/img/logo_2.svg"
          alt="logo Marco Baldassa Architettura"
          style="height: 170px; opacity: 0.08"
        />
      </div>

      <div class="flex flex-col">
        <p class="tracking-tighter text-5xl leading-snug font-sweet-medium">
          {{ text }} 
        </p>
        <p class="mt-10 font-sweet text-xl">— {{ author }} </p>
      </div>
    </div>
  </blockquote>
</template>

<script>
export default {
  props: ['text', 'author'],
  mounted() {
    // Star cit - animation
    gsap.to('#star-cit', {
      top: '-20%',
      rotation: '360',
      ease: 'linear',
      duration: 35,
      repeat: -1,
    })
  },
}
</script>

<style>
</style>