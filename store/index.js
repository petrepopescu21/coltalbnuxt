
import Vuex from 'vuex'
var axios = require('axios')

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    lang: undefined,
    labels: undefined,
    rawLabels: undefined,
    postList: undefined,
    currentPage: undefined,
    totalPages: undefined,
    test: undefined,
    postItems: undefined
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    updateLang(state, lang) {
        state.lang = lang
    },
    setLabels(state, data) {
        state.labels = data
    },
    setRawLabels(state, data) {
        state.rawLabels = data
    },
    setPostList(state, data) {
        state.postList = data
    },
    setCurrentPage(state, page) {
        state.currentPage = page
    },
    setTotalPages(state, num) {
        state.totalPages = num
    },
    setTest(state, val) {
        state.test = val
    },
    addPostItem(state, val) {
        if (state.postItems == undefined)
            state.postItems = {}
        state.postItems[val.uid] = val
    },
    addPostItems(state, val) {
        if (state.postItems == undefined)
            state.postItems = {}
        val.forEach((item) => {
            if (state.postItems[item.uid] == undefined)
                state.postItems[item.uid] = item
        })
    }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
    nuxtServerInit({ commit }, { req }) {
        axios.get(process.env.baseUrl + '/api/data').then((res) => {
            console.log(res.data.labels[res.data.lang])
            commit('setRawLabels', res.data.labels)
            commit('setLabels', res.data.labels[res.data.lang])
        })
    },
    updateLang({commit,state},lang) {
        commit('updateLang',lang)
        commit('setLabels',state.rawLabels.lang)
    }
}

// getters are functions
const getters = {
    getPostList: state => {
        return state.postList
    },
    getCurrentPage: state => {
        return state.currentPage
    },
    getTotalPages: state => {
        return state.totalPages
    },
    getTest: state => {
        return state.test
    },
    getLabels: state => {
        return state.labels
    },
    getLang: state => {
        return state.lang
    },
    getPosts: (state) => {
        return state.postItems
    },
    getPost: state => uid => {
        console.log("Getting post " + uid)
        return state.postItems.uid
    },
    getRawLabels: state => {
        return state.rawLabels
    }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
const store = () => new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store