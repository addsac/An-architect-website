<template>
  <div class="mx-auto max-w-screen-2xl mt-40 px-12">
    <div id="wrapper-img-bio" @mousemove="showtext()" @mouseleave="hiddenText()" class="mx-auto bg-black w-full overflow-hidden relative z-10">
      <!-- Text -->
      <div id="wrapper-text" class="absolute h-full w-full flex flex-col items-center justify-center z-20" style="opacity: 0">
        <p class="text-7xl text-white font-sweet tracking-tighter">
          {{ text }}
        </p>
        <button class="font-sweet tracking-tight text-lg px-8 py-3 bg-white hover:bg-black hover:text-white mt-10">
          Vedi il caso studio
        </button>
      </div>
      <!-- Image -->
      <img id="img-bio" src="/img/6.png" alt="" class="w-full object-cover z-10" style="height: 100%" loading="lazy" /> <!-- opacity-70 -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    showtext(){
      console.log('enter')

      gsap.to('#wrapper-text', {
        opacity: 1,
        ease: 'power1.out',
        duration: 0.4
      })

      gsap.to('#img-bio', {
        opacity: 0.7,
        ease: 'power1.out',
        duration: 0.4
      })
    },
    hiddenText(){
      console.log('leave')

      gsap.to('#wrapper-text', {
        opacity: 0,
        ease: 'power1.out',
        duration: 0.4
      })

      gsap.to('#img-bio', {
        opacity: 1,
        ease: 'power1.out',
        duration: 0.4
      })
    }
  },
  
  mounted(){
    gsap.set('#img-bio', { scale: 1.1})

    gsap.to('#img-bio', {
      scrollTrigger: {
        trigger: '#wrapper-img-bio',
        start: 'top center',
        end: 'center 0',
        scrub: 3,
      },
      scale: 1
    })
  }
}
</script>

<style>
</style>