import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeBtn:'ALL',
    title:'',
    selected:'',
    tableAdd:0,
  },
  getters:{
    getActiveBtn(state){
      return state.activeBtn;
    },
    getTitle(state){
      return state.title;
    },
    getSelected(state){
      return state.selected;
    },
    getTableAdd(state){
      return state.tableAdd;
    }
  },
  mutations: {
    setActiveBtn(state, data){
      state.activeBtn = data;
    },
    setTitle(state, data){
      state.title = data;
    },
    setSelected(state, data){
      state.selected = data;
    },
    setTableAdd(state){
      state.tableAdd++;
    }
  },
  actions: {
  },
  modules: {
  }
})
