<template>
  <div>
    <DefaultHeader />

    <BlogArticle />

    <DefaultFooter class="mt-48" />
  </div>
</template>

<script>
export default {
  scrollToTop: true,

  asyncData({ app, params, store }) {
    const url = params.slug

    return Promise.all([
      // post
      app.$contentful.client.getEntries({
        content_type: 'post',
        'fields.slug': url,
      }),
    ])
      .then(([post]) => {
        store.commit('article/SET_ARTICLE_POST', post.items[0].fields)
        
        /* return {
          post: post.items[0].fields,
        } */
      })
      .catch(console.error)
  },

  transition: {
    name: 'scale',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      gsap.set(el, {
        opacity: 0,
      })
    },

    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        duration: 0.4,
        ease: 'none',
        onComplete: done,
      })
    },

    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        duration: 0.4,
        ease: 'none',
        onComplete: done,
      })
    },
  },
}
</script>

<style>
</style>
