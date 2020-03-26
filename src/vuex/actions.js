import axios from "axios";

import { API_KEY } from './constants';
import { URL_BASE } from './constants';

export default {
  GET_WEATHER_FROM_API({commit}) {
    return axios(`${URL_BASE}${API_KEY}&id=${this.state.currentCity.id}`, {
      method: "GET"
    })
      .then(response => {
        commit('SET_CITY_WEATHER', response.data);
        return response;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
  },
  GET_CURRENT_CITY: ({commit}, city) => {
    commit('SET_CURRENT_CITY', city)
  },
}