import axios from 'axios'
const state ={
  productCategories:[],
};
const getters ={};

const mutations ={
  GET_PRODUCTSLIST(state,payload){
    state.productCategories=payload;
  }
};

const actions ={
 async retrieveProducts({commit}){
     let category = await axios.get('https://fakestoreapi.com/products/categories');
     commit("GET_PRODUCTSLIST",category.data);
     console.log(category);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}