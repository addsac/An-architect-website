<template>
  <main class="mx-auto max-w-screen-2xl px-24 mt-48">
    
    <h1 class="text-center font-sweet-bold tracking-tighter text-7xl -ml-1">
      Il Blog
    </h1>
    <DefaultDecorationBar class="mt-7 mb-24" :width="195" />

    <!-- Posts -->
    <article v-for="post in posts" :key="post.id">
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.fields.slug, } }" class="post group grid grid-cols-12 mt-24 w-full">
          <!-- Photo -->
          <div class="col-span-4 h-64 bg-black">
              <img loading="lazy" :src="post.fields.photo.fields.file.url" :alt="'Marco Baldassa - ' + post.title" class="transform w-full h-full opacity-90 object-cover" />
          </div>

          <!-- Description -->
          <div class="col-span-8 px-12 flex flex-col justify-center font-sweet">
              <address class="text-sm tracking-wide opacity-60 mb-5" style="font-style: normal">
                Marco Baldassa
              </address>
              <h2 class="group-hover:underline font-sweet-bold text-4xl tracking-tighter leading-tight mb-4">
                  {{ post.fields.title }}
              </h2>
              <p class="tracking-tight leading-normal mb-5">
                  {{ post.fields.description.content[0].content[0].value.slice(0, 190) + '...' }}
              </p>
              <p class="text-sm tracking-wide opacity-60">
                <time :datetime="post.fields.date">
                  {{ formatDate(post.fields.date) }}
                </time>
              </p>
          </div>
      </NuxtLink>
    </article>

  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('blog', ['posts'])
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return new Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(
        date
      )
    },
    convertToSlug(string){
      return String(string).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
    }
  },
  mounted() {
    gsap.set('.post', { opacity: 0, y: '40px' })
    
    gsap.to('.post', {
        opacity: 1, 
        y: 0,
        stagger: 0.4,
        duration: 0.8,
        delay: .4,
        ease: 'power4.out'
    })
  },
}
</script>

<style>
</style>