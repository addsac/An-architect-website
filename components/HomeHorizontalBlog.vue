<template>
  <div id="blog" class="max-w-screen-2xl mx-auto mb-40">

    <p id="gallery-text" class="text-center font-sweet-medium tracking-tighter text-7xl -ml-1">
      Ultimi articoli
    </p>
    <DefaultDecorationBar class="mt-7" :width="405" />
    
    <div class="relative overflow-hidden">
      
        <div id="wrapper-benefit" class="flex">
            <!-- Section 1 -->
            <article v-for="(post, i) in homePosts" :key="i" class="h-screen p-32" style="min-width: 100%; width: 100%">
              <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.fields.slug, } }" class="text-left h-full w-full flex cursor-pointer">
                <!-- Description of the article -->
                <div class="w-1/2 flex flex-col justify-center pr-20">
                  <!-- Titolo -->
                  <h3 class="hover:underline font-sweet-bold text-5xl leading-tight tracking-tighter mb-8"> {{ post.fields.title }} </h3>
                  <!-- Descrizione -->
                  <p class="text-xl font-sweet-light tracking-tight mb-8"> {{ post.fields.description.content[0].content[0].value.slice(0, 100) + '...' }} </p>
                  <div class="flex items-center">
                    <!-- Author -->
                    <p class="font-sweet-bold">Marco Baldassa</p>
                    <div class="font-sweet-light mx-3"> — </div>
                    <!-- Data -->
                    <p class="font-sweet-light"> {{ formatDate(post.fields.date) }} </p>
                  </div>
                </div>
                <!-- Image -->
                <div class="bg-black w-1/2">
                  <img :src="post.fields.photo.fields.file.url" alt="" class="w-full h-full opacity-90 object-cover" />
                </div>
              </NuxtLink>
            </article>
        </div>

    </div>

    <div class="flex justify-center">
      <NuxtLink to="/blog" class="font-sweet-medium tracking-tight text-lg px-8 py-3 border border-black hover:bg-black hover:text-white">
        Vedi tutti gli articoli
      </NuxtLink>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['homePosts']),
  },
  methods:{
    formatDate(dateString){
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
    },
    mouseEnterWork(){
      gsap.to('.custom-cursor', { scale: 4, ease: "power4.out", duration: 0.8 })
    },
    mouseLeaveWork(){
      gsap.to('.custom-cursor', { scale: 1, ease: "power4.out", duration: 0.8 })
    },
  },
  mounted() {
    const tl = gsap.timeline()

    tl.to('#wrapper-benefit', 5, { x: -window.innerWidth * 2, ease: 'none' })

    ScrollTrigger.create({
      animation: tl,
      trigger: '#wrapper-benefit',
      start: 'center center',
      end: '+=2000',
      scrub: 1.3,
      pin: true,
      invalidateOnRefresh: true,
    })
  },
}
</script>

<style>
</style>