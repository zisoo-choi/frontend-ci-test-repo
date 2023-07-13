import Vue from 'vue'
import Vuex from 'vuex'

import state from "@/store/states"

import boardModule from "@/store/board/BoardModule.js"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    boardModule: boardModule,
  },
  state,
})

export default store