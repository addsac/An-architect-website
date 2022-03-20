<template>
  <div>

    <DefaultHeader />

    <main>
      <HomeHero />

      <HomeBio />

      <HomeBigImage text="Casa nei colli – Padova" />

      <HomeStory />

      <HomeGallery />

      <HomeCit
        text="Freedom is the sense of being capable of actions motivately solely by love."
        author="Rudolf Steiner"
      />

      <HomeHorizontalBlog />

      <HomeCit text="Every building deprives a portion of the earth of sun, wind and rain [...] . It must redeem this
        sacrifice by the healing quality of its architecture." author="Rudolf Steiner" />
    </main>

    <DefaultFooter />
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
        limit: 3,
      }),
      // statistics
      app.$contentful.client.getEntries({
        content_type: 'statistics',
        order: '-sys.createdAt',
      }),
    ])
      .then(([posts, statistics]) => {
        store.commit('SET_STATS', statistics.items)
        store.commit('SET_HOME_POSTS', posts.items)

        /* return {
          stats: statistics.items,
          posts: posts.items,
        } */
      })
      .catch(console.error)
  },

  transition: {
    name: 'slide',
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
        duration: 0.6,
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
