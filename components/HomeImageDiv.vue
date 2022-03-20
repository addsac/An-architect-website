<template>
  <div>
    <div id="container-image-sfondo" class="relative mt-40">
      <img
        id="image-sfondo"
        src="/img/image-sfondo.png"
        alt=""
        class="w-full"
      />
      <div class="absolute left-16 bottom-16">
        <h1 id="text-1-image-sfondo" class="text-8xl font-bold text-white">
          Bioarchitettura
        </h1>
        <h1
          id="text-2-image-sfondo"
          class="text-8xl font-bold text-white mt-4"
        >
          since 2004
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    gsap.set('#text-1-image-sfondo', { x: '-220px', opacity: 0 })
    gsap.set('#text-2-image-sfondo', { x: '220px', opacity: 0 })
    /* gsap.set('#image-sfondo', { opacity: 0.7 }) */

    gsap.to('#image-sfondo', {
      scrollTrigger: {
        trigger: '#image-sfondo',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
        pin: true,
        toggleActions: 'play none none reverse',
      },
      scale: .8,
    })

    /* gsap.to('#container-image-sfondo', {
      scrollTrigger: {
        trigger: '#image-sfondo',
        start: 'top center',
        end: 'center center',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
      scale: .9,
    })

    gsap.to('#image-sfondo', {
      scrollTrigger: {
        trigger: '#container-image-sfondo',
        start: 'top center',
        end: 'center center',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
      opacity: 0.7,
    })

    gsap.to('#text-1-image-sfondo', {
      scrollTrigger: {
        trigger: '#container-image-sfondo',
        start: 'top center',
        end: 'bottom 50%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
      ease: 'power4.out',
      opacity: 1,
      x: '0px',
    })

    gsap.to('#text-2-image-sfondo', {
      scrollTrigger: {
        trigger: '#container-image-sfondo',
        start: 'top center',
        end: 'bottom 50%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
      ease: 'power4.out',
      opacity: 1,
      x: '0px',
    }) */
    
  },
}
</script>

<style>
</style>