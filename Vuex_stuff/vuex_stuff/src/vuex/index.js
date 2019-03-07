import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutation.js'
import getters from './getter.js'
import actions from './action.js'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
