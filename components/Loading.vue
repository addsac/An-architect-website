<template>
  <div id="loading" class="fixed w-screen h-screen bg-white z-40">

    <div class="mx-auto max-w-screen-2xl w-full px-48 py-24">

      <div class="grid grid-cols-8 gap-16">
        <!-- Loading and citation -->
        <div class="col-span-5">
            <div class="h-64 w-48">
              <div class="-mt-1 font-sweet-light text-5xl tracking-tighter">
                {{ percentage < 100 ? '0' + percentage : percentage }}
              </div>
            </div>
            <p class="font-sweet-light text-4xl tracking-tight leading-tight" style="width: 550px">
              Freedom is the sense of being capable of actions motivately solely by love.
            </p>
            <p class="font-sweet mt-8">
              – Rudolf Steiner
            </p>
        </div>

        <!-- Photo -->
        <div class="relative col-span-3">
          <div class="absolute right-0">
            <div class="bg-black h-64 w-48">
              <img src="/img/profilo.png" class="object-cover w-full h-full opacity-90 filter grayscale" alt="">
            </div>
            <div class="font-sweet text-sm mt-3">
              Marco Baldassa – Bioarchietto
            </div>
          </div>
        </div>
      </div>

    </div>
    
    <!-- <h1 class="text-9xl text-white font-medium z-30 top-12 left-16 absolute" style="filter: invert(1); mix-blend-mode: difference">
      {{ percentage < 100 ? '0' + percentage : percentage }}
    </h1> -->

    <!-- Div di scrorrimemto -->
    <!-- <div id="div-bg-white" class="w-screen h-screen bg-white fixed z-20 absolute" style="left: -100vw"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 0,
    }
  },
  methods: {
    /* scrollWhiteDiv(percentage) {
      gsap.to('#div-bg-white', {
        left: '-' + Number(100 - percentage) + 'vw',
      })
    }, */
    showBody() {
      setTimeout(() => {
        gsap.to('#loading', {
          y: '-100%',
          duration: 0.8,
          ease: 'power1.out'
        })
      }, 1200)
    },
  },
  mounted() {
    var time = 0
    let loading = setInterval(() => {
      time += 100

      // Exit if percentage == 100%
      if (time == 1000) {
        clearInterval(loading)
        // this.showBody()
      }

      // Plus the percentage
      this.percentage += 10

      // Scroll the background div
      // this.scrollWhiteDiv(this.percentage)
    }, 800)
  },
}
</script>

<style>

</style>