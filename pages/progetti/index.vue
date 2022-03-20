<template>
  <div>
    <DefaultHeader />

    <Projects />

    <DefaultFooter class="mt-48" />
  </div>
</template>

<script>
export default {
  scrollToTop: true,

  asyncData({ app, store }) {
    return Promise.all([
      // filters
      app.$contentful.client.getEntries({
        content_type: 'category',
        order: 'sys.createdAt',
      }),
    ])
      .then(([filters]) => {
        store.commit('projects/SET_FILTERS', filters.items)

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
