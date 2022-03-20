<template>
  <div>
    <div class="mt-32 w-full grid grid-cols-12 gap-14">
      <div
        v-for="i in 6"
        :key="i"
        @mousemove="animateProject(i, 'enter')"
        @mouseleave="animateProject(i, 'leave')"
        class="col-span-6 hover:underline"
      >
        <NuxtLink to="/progetti/serp-&-molot">
          <!-- Photo -->
          <div
            class="bg-black relative flex items-center justify-center"
            style="height: 400px"
          >
            <img
              src="/img/8.png"
              :id="'img-' + i"
              alt=""
              class="w-full h-full object-cover"
              style="opacity: 0.9"
            />
            <h3
            :id="'text-' + i"
            class="text-white text-5xl font-sweet tracking-tight absolute"
            style="opacity: 0; transform: translate(0, -100%)"
            >
            Serp & Molot
            </h3>
          </div>
          <!-- Title -->
          <h2 class="text-2xl font-sweet-medium tracking-tight mt-6">
            Serp & Molot
          </h2>
          <!-- Place -->
          <p class="text-lg font-sweet-light mt-1">Moscow, Russia</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    mouseEnterWork() {
      console.log('enter')
      gsap.to('.custom-cursor', {
        scale: 4.4,
        ease: 'power4.out',
        duration: 0.8,
      })

      gsap.to('#cursor-text', {
        autoAlpha: 1,
        ease: 'power4.out',
        duration: 0.8,
      })
    },
    mouseLeaveWork() {
      console.log('leave')
      gsap.to('.custom-cursor', { scale: 1, ease: 'power4.out', duration: 0.8 })

      gsap.to('#cursor-text', {
        autoAlpha: 0,
        ease: 'power4.out',
        duration: 0.8,
      })
    },
    animateProject(i, event) {
      if (event === 'enter') {
        this.mouseEnterWork()

        /* animate overlay */
        const idOverlay = '#img-' + i
        gsap.to(idOverlay, {
          opacity: 0.7,
          duration: 0.4,
          ease: 'power1.out',
        })

        /* animate text */
        const idText = '#text-' + i
        gsap.to(idText, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power1.out',
        })
      } else if (event === 'leave') {
        this.mouseLeaveWork()

        /* animate overlay */
        const idOverlay = '#img-' + i
        gsap.to(idOverlay, {
          opacity: 0.9,
          duration: 0.4,
          ease: 'power1.out',
        })

        /* animate text */
        const idText = '#text-' + i
        gsap.to(idText, {
          opacity: 0,
          y: '100%',
          duration: 0.4,
          ease: 'power1.out',
        })

        gsap.set(idText, {
          y: '-100%',
          duration: 0,
          delay: 0.4,
        })
      }
    },
  },
}
</script>

<style>
</style>
