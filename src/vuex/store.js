import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from "./mutations"
import getters from "./getters"

import { cities } from './constants'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: () => ({
    cities,
    currentCity: {
      name: cities[0].name,
      id: cities[0].id,
    },
    cityWeather: {
      main: {
        temp: Number,
        pressure: Number,
        humidity: Number,
      },
      wind: {
        deg: Number,
        speed: Number,
      }
    }
  }),
  actions,
  mutations,
  getters
});

export default store;