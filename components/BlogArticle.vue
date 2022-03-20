<template>
  <main>
    <article class="mx-auto max-w-screen-xl w-full px-12 mt-48">

      <!-- Title -->
      <div class="max-w-screen-md w-full mx-auto">
        <h1 class="text-6xl font-sweet-bold leading-tight tracking-tighter" style="margin-left: -4px">
          {{ post.title }}
        </h1>
        <div class="flex items-center justify-between font-sweet-light tracking-tight text-xl mt-12">
          <!-- Author -->
          <address style="font-style: normal">
            Marco Baldassa
          </address>
          <!-- Data -->
          <time :datetime="post.date">
            <p> {{ formatDate(post.date) }} </p>
          </time>
        </div>
      </div>

      <!-- Photo -->
      <div class="w-full bg-black mt-20" style="height: 600px">
        <img
          loading="lazy"
          :src="post.photo.fields.file.url"
          :alt="'Marco Baldassa - ' + post.title"
          class="transform w-full h-full opacity-80 object-cover"
        />
      </div>

      <!-- Description -->
      <div class="max-w-screen-md w-full mx-auto mt-24">
        <div class="mt-12">
          <p class="text-2xl font-sweet tracking-tight leading-loose">
              <!-- {{ post.description.content[0].content[0].value }} -->
              <RichTextRenderer :document="post.description" />
          </p>
        </div>
      </div>

      <div class="flex justify-center mt-40">
        <NuxtLink to="/blog" class="font-sweet-medium tracking-tight text-lg px-8 py-3 border border-black hover:bg-black hover:text-white">
          Torna a tutti gli articoli
        </NuxtLink>
      </div>

    </article>
  </main>
</template>

<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import { mapState } from 'vuex'

export default {
  components: {
    RichTextRenderer
  },
  computed: {
    ...mapState('article', ['post']),
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return new Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(
        date
      )
    },
  },
  mounted() {
    
  }
}
</script>

<style>
</style>