<template>
  <div id="gallery" class="w-full relative mt-40">
    <p
      id="gallery-text"
      class="text-center font-sweet-medium tracking-tighter text-7xl -ml-1"
    >
      Ultimi Lavori
    </p>
    <DefaultDecorationBar class="mt-7" :width="390" />

    <!-- Grid case study -->
    <div class="grid grid-cols-10 gap-16 mt-28 mx-auto max-w-screen-2xl px-32">
      <div @mousemove="animateWork(1, 'enter')" @mouseleave="animateWork(1, 'leave')" data-speed="1" id="work-1" class="bg-black col-span-6 cursor-pointer" style="height: 640px">
        <img id="img-work-1" src="/img/1.png" alt="" class="object-cover w-full h-full opacity-80" loading="lazy">
        <div class="absolute bottom-0 p-8 w-full bg-gradient-to-t from-black">
          <p class="text-white font-sweet-medium text-3xl tracking-tight">
            Casa nei colli – Padova
          </p>
          <p id="work-description-1" :class="workActive == 1 ? 'mt-3' : ''" class="text-white font-sweet-light leading-snug" style="height: 0; opacity: 0"> <!-- opacity-80 -->
            Descrizione descrizione descrizione descrizione descrizione descrizione
            Descrizione descrizione descrizione descrizione descrizione descrizione
            Descrizione descrizione descrizione descrizione.
          </p>
        </div>
      </div>
      <div @mousemove="animateWork(2, 'enter')" @mouseleave="animateWork(2, 'leave')" data-speed=".98" id="work-2" class="bg-black col-span-4 cursor-pointer" style="height: 640px">
        <img id="img-work-2" src="/img/2.png" alt="" class="object-cover w-full h-full opacity-80" loading="lazy">
        <div class="absolute bottom-0 p-8 w-full bg-gradient-to-t from-black">
          <p class="text-white font-sweet-medium text-3xl tracking-tight">
            Casa nei colli – Padova
          </p>
          <p id="work-description-2" :class="workActive == 2 ? 'mt-3' : ''" class="text-white font-sweet-light leading-snug" style="height: 0; opacity: 0"> <!-- opacity-80 -->
            Descrizione descrizione descrizione descrizione descrizione descrizione
            Descrizione descrizione descrizione descrizione descrizione descrizione
            Descrizione descrizione descrizione descrizione.
          </p>
        </div>
      </div>
      <div @mousemove="animateWork(3, 'enter')" @mouseleave="animateWork(3, 'leave')" data-speed="1" id="work-3" class="bg-black col-span-4 cursor-pointer" style="height: 640px">
        <img id="img-work-3" src="/img/3.png" alt="" class="object-cover w-full h-full opacity-80" loading="lazy">
        <div class="absolute bottom-0 p-8 w-full bg-gradient-to-t from-black">
          <p class="text-white font-sweet-medium text-3xl tracking-tight">
            Casa nei colli – Padova
          </p>
          <p id="work-description-3" :class="workActive == 3 ? 'mt-3' : ''" class="text-white font-sweet-light leading-snug" style="height: 0; opacity: 0"> <!-- opacity-80 -->
            Descrizione descrizione descrizione descrizione descrizione descrizione
            Descrizione descrizione descrizione descrizione descrizione descrizione
            Descrizione descrizione descrizione descrizione.
          </p>
        </div>
      </div>
      <div @mousemove="animateWork(4, 'enter')" @mouseleave="animateWork(4, 'leave')" data-speed=".98" id="work-4" class="bg-black col-span-6 cursor-pointer" style="height: 640px">
        <img id="img-work-4" src="/img/4.png" alt="" class="object-cover w-full h-full opacity-80" loading="lazy">
        <div class="absolute bottom-0 p-8 w-full bg-gradient-to-t from-black">
          <p class="text-white font-sweet-medium text-3xl tracking-tight">
            Casa nei colli – Padova
          </p>
          <p id="work-description-4" :class="workActive == 4 ? 'mt-3' : ''" class="text-white font-sweet-light leading-snug" style="height: 0; opacity: 0"> <!-- opacity-80 -->
            Descrizione descrizione descrizione descrizione descrizione descrizione
            Descrizione descrizione descrizione descrizione descrizione descrizione
            Descrizione descrizione descrizione descrizione.
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-64 mb-40">
      <NuxtLink to="/progetti"  class="font-sweet-medium tracking-tight text-lg px-8 py-3 border border-black hover:bg-black hover:text-white">
        Vedi tutti i progetti
      </NuxtLink>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      workActive: 0,
    }
  },
  methods: {
    mouseEnterWork(){
      console.log('enter')
      gsap.to('.custom-cursor', { scale: 4.4, ease: "power4.out", duration: 0.8 })
      
      gsap.to('#cursor-text', { autoAlpha: 1, ease: "power4.out", duration: 0.8 })
    },
    mouseLeaveWork(){
      console.log('leave')
      gsap.to('.custom-cursor', { scale: 1, ease: "power4.out", duration: 0.8 })

      gsap.to('#cursor-text', { autoAlpha: 0, ease: "power4.out", duration: 0.8 })
    },
    animateWork(n, event){
      let id = '#work-description-' + n
      let imgId = '#img-work-' + n

      if(event === 'enter'){
        this.mouseEnterWork()

        this.workActive = n

        gsap.to(id, {
          height: 'auto',
          opacity: 0.8,
          duraton: 0.4,
          ease: 'power1.out'
        })

        // Animation to zoom the image on mouseover
        /* gsap.to(imgId, {
          opacity: 0.8,
          duration: 0.4,
          ease: 'power1.out'
        }) */
      }
      else if(event === 'leave'){
        this.mouseLeaveWork()

        this.workActive = 0

        gsap.to(id, {
          height: 0,
          opacity: 0,
          duraton: 0.4,
          ease: 'power1.out'
        })

        // Animation to zoom the image on mouseover
        /* gsap.to(imgId, {
          opacity: 0.6,
          duration: 0.4,
          ease: 'power1.out'
        }) */
      }
    }
  },
  mounted() {
    gsap.to('#work-1', {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute('data-speed'))) *
        ScrollTrigger.maxScroll(window),
      ease: 'none',
      scrollTrigger: {
        trigger: '#gallery',
        start: 'top center',
        end: 'bottom 0',
        scrub: 0.8,
      },
    })

    gsap.to('#work-2', {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute('data-speed'))) *
        ScrollTrigger.maxScroll(window),
      ease: 'none',
      scrollTrigger: {
        trigger: '#gallery',
        start: 'top center',
        end: 'bottom 0',
        scrub: 0.8,
      },
    })

    gsap.to('#work-3', {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute('data-speed'))) *
        ScrollTrigger.maxScroll(window),
      ease: 'none',
      scrollTrigger: {
        trigger: '#gallery',
        start: 'top center',
        end: 'bottom 0',
        scrub: 0.8,
      },
    })

    gsap.to('#work-4', {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute('data-speed'))) *
        ScrollTrigger.maxScroll(window),
      ease: 'none',
      scrollTrigger: {
        trigger: '#gallery',
        start: 'top center',
        end: 'bottom 0',
        scrub: 0.8,
      },
    })
  },
}
</script>

<style>
</style>