export const state = () => ({
    stats: [],
    homePosts: [],
})
export const mutations = {
    SET_STATS (state, stats){
        state.stats = stats
    },
    SET_HOME_POSTS (state, homePosts){
        state.homePosts = homePosts
    },
}
export const actions = {}
