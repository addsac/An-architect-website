<template>
  <div>
    <DefaultHeader />

    <BlogArticles />

    <DefaultFooter class="mt-48" />
  </div>
</template>

<script>
export default {
  scrollToTop: true,

  asyncData({ app, store }) {
    return Promise.all([
      // posts
      app.$contentful.client.getEntries({
        content_type: 'post',
        order: '-sys.createdAt',
      }),
    ])
      .then(([posts]) => {
        store.commit('blog/SET_BLOG_POSTS', posts.items)

        /* return { 
          posts: posts.items
        } */
      })
      .catch(console.error);
  },

  transition: {
    name: "scale",
    mode: "out-in",
    css: false,

    beforeEnter(el) {
      gsap.set(el, {
        opacity: 0,
      });
    },

    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        duration: .4,
        ease: "none",
        onComplete: done,
      });
    },

    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        duration: .4,
        ease: "none",
        onComplete: done,
      });
    },
  },

}
</script>

<style>
</style>
