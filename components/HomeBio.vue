<template>
  <div>
    <div id="biography-wrapper" class="font-sweet text-2xl leading-snug tracking-tight grid grid-cols-12 mx-auto max-w-screen-2xl px-12">
      <div class="col-span-6"></div>
      <div class="col-span-5 pr-7">
        <p class="animate-biography" style="margin-left: -2px">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Benjamin Righetti is
          a Swiss musician, titular organist at St. François in Lausanne,
          professor at the HEMU - Haute Ecole de Musique, composer and arranger.
          To date he has given more than 700 concerts just about everywhere
          there are organs, and has made numerous recordings (CD, radio-TV,
          web).
        </p>
        <div id="star-bio" class="animate-biography mx-auto flex items.center justify-center">
            &nbsp;&nbsp;
            <img src="/img/logo_2.svg" alt="" class="h-10 w-10 my-6" />
        </div>
        <p class="animate-biography" style="margin-left: -2px">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; He writes articles
          for the site orgue.art and shares his scores on imslp.org. Benjamin
          Righetti loves both the mountains and the lakes of his small country
          and tries to balance his varied activities with rigor and joy.
        </p>
      </div>
    </div>
    <!-- Numeri -->
    <div class="mx-auto max-w-screen-xl px-12">
        <div class="flex justify-center space-x-8 mt-40">
            <div v-for="(stat, i) in stats" :key="i" class="div-stat h-64 w-64 bg-white border border-black tracking-tighter text-center flex flex-col justify-center items-center hover:bg-black hover:text-white">
                <p class="font-sweet-medium text-6xl tracking-tight mb-4"> {{ stat.fields.quantity }} </p>
                <p class="font-sweet text-xl"> {{ stat.fields.title }} </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['stats']),
  },
  mounted() {
    gsap.set('.div-stat', { opacity: 0, y: '80px' })

    gsap.to('.div-stat', {
      scrollTrigger: {
        trigger: '#star-bio',
        start: 'bottom center',
        end: 'bottom 0',
        scrub: 2,
        toggleActions: 'play none none reverse',
      },
      stagger: 0.17,
      y: 0,
      opacity: 1,
    })
  },
}
</script>

<style>
</style>