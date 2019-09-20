import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
 
export const store = new Vuex.Store({
 
  state: {
    user:{
      id:1,
      name:"",
      password:"",
      img:'',
      title:'',
      nickname:''
    },


    ip: "http://192.168.1.114:8888",
  },
 
  mutations: {
    userInfo(state, user) {
      window.console.log(user[0].name)
      state.user.name = user[0].name;
      state.user.password = user[0].password
      state.user.id = user[0].id
      state.user.img = user[0].img
      state.user.title = user[0].title
      state.user.nickname = user[0].nickname
  },
  }
});
 



