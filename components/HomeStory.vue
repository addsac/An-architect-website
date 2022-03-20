<template>
  <div class="w-full max-w-screen-2xl mx-auto mt-40">
    
    <div class="mt-32 font-sweet-light text-2xl leading-snug tracking-tight grid grid-cols-12 mx-auto max-w-screen-2xl px-12">
      <div class="col-span-6"></div>
      <div class="col-span-5 pr-7 mb-10">
        <div class="flex">
          <p class="block px-5 py-1 text-white bg-black mb-10 font-sweet tracking-wide uppercase text-base">
            Bioarchitettura
          </p>
        </div>
        <p class="font-sweet-medium tracking-tighter leading-tight text-5xl" style="margin-left: -3px">
          We create places that connect, sustain & inspire, for the wellbeing of the people.
        </p>
        <div class="mx-auto flex items.center justify-center">
            &nbsp;&nbsp;
            <img src="/img/logo_2.svg" alt="" class="h-10 w-10 mt-4 mb-6" />
        </div>
        <p id="description-story" style="margin-left: -2px">
          An inspired vision to marvel at sun and sea.
          Sea Mirror offers 18 uniquely designed concept homes nestled on Jumeira Bay Island. Each property 
          opens towards an uninterrupted view of the Arabian Sea and Dubai’s magnificent skyline.
        </p>
      </div>
      <div class="col-span-12 mt-32">
        <div class="flex items-center justify-center space-x-8">
          <div class="div-story w-64">
            <div class="mx-auto h-48 w-48 bg-black mb-8"></div>
            <div class="text-center text-lg">
              Costruzioni con materiali naturali per il benessere della persona e della sua famiglia.
            </div>
          </div>
          <div class="div-story w-64">
            <div class="mx-auto h-48 w-48 bg-black mb-8"></div>
            <div class="text-center text-lg">
              Costruzioni con materiali naturali per il benessere della persona e della sua famiglia.
            </div>
          </div>
          <div class="div-story w-64">
            <div class="mx-auto h-48 w-48 bg-black mb-8"></div>
            <div class="text-center text-lg">
              Costruzioni con materiali naturali per il benessere della persona e della sua famiglia.
            </div>
          </div>
          <div class="div-story w-64">
            <div class="mx-auto h-48 w-48 bg-black mb-8"></div>
            <div class="text-center text-lg">
              Costruzioni con materiali naturali per il benessere della persona e della sua famiglia.
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  mounted() {
    gsap.set('.div-story', { opacity: 0, y: '80px' })

    gsap.to('.div-story', {
      scrollTrigger: {
        trigger: '#description-story',
        start: 'top center',
        end: 'bottom 200',
        scrub: 3,
        toggleActions: 'play none none reverse',
      },
      stagger: 0.17,
      y: 0,
      opacity: 1,
    })
  }
}
</script>

<style>
</style>