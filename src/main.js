import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
// import Vuex from 'vuex'
// // import axios from 'axios'

// Vue.use(Vuex);

// let store = new Vuex.Store( {
//     state:{
//         products: [],
//         cart: []
//     },
//     mutations: {
//         set_products: (state, products) => {
//             state.products = products;
//         }
//     },
//     getters: {
//         products(state) {
//             return state.products;
//         },
//         cart(state) {
//             return state.cart;
//         }
//     }
// });

// export default store;

createApp(App).mount('#app')



// const ratings = document.querySelectorAll('.rating');
// if (ratings.length > 0) {
//     initRatings();
// }

// function initRatings() {
//     let ratingActive, ratingValue;
//     for (let index = 0; index < ratings.length; index++) {
//         const rating = ratings[index];
//         initRating(rating);
//     }

//     function initRating(rating) {
//         initRatingVars(rating);
//         setRatingActiveWidth();
//     }

//     function initRatingVars(rating) {
//         ratingActive = rating.querySelector('.rating__active');
//         ratingValue = rating.querySelector('.rating__value');
//     }

//     function setRatingActiveWidth(index = ratingValue.innerHTML) {
//         const ratingActiveWidth = index / 0.05;
//         ratingActive.style.width = `${ratingActiveWidth}%`;
//     }
// }



