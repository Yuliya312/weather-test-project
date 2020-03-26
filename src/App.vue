<template>
  <div id="app">
    <div class="container">
      <p class="info">Api info:</p>
      <ul>
        <li>
          Docs:
          <a 
            href="https://openweathermap.org/current" 
            rel="nofollow"
            class="info__link"
          >
            https://openweathermap.org/current
          </a>
        </li>
        <li>
          Api key: 
          <span class="info__key">hidden</span>
        </li>
      </ul>
      <hr class="info__line">
    <h1 class="title">App</h1>
    <div class="buttons">
      <button
        v-for="city in cities" :key="city.id"
        class="btn"
        @click="getCurrentCity(city)"
        :class="{'btn--active': currentCity.name === city.name}"
        v-on:click="changeClass()"
      >
        {{ city.name }}
      </button>
    </div>
    <WeatherData 
      :city="CURRENT_CITY"
      :weather="CITY_WEATHER"
    />
  </div>
</div>
</template>

<script>
import WeatherData from './components/WeatherData'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    WeatherData,
  },
  computed: {
    ...mapGetters([
      'CITY_WEATHER',
      'CURRENT_CITY',
    ]),
    cities() {
      return this.$store.state.cities
    },
    currentCity() {
      return this.$store.state.currentCity
    }
  },
  methods: {
    ...mapActions([
      'GET_WEATHER_FROM_API',
      'GET_CURRENT_CITY'
    ]),
    getCurrentCity(city) {
      this.GET_CURRENT_CITY(city)
      this.GET_WEATHER_FROM_API()
    },
    changeClass(){
      this.hideClass = !this.hideClass;
    }
  },
  mounted() {
    this.$store.dispatch('GET_WEATHER_FROM_API')
  },
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
}

.info {
  &__link {
    color: $color-link;
  }

  &__key {
    color: $color-lilac;
  }

  &__line {
    display: block;
    padding: 0;
    margin: 32px 0;
    height: 0;
    border: 0;
    border-top: 1px solid #e5e5e5;
    box-sizing: content-box;
  }
}

.title {
  margin-bottom: 25px;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.2;
}

.buttons {
  display: inline-flex;
  flex: 1 0 auto;
  border: 1px solid $color-lilac;
  border-radius: $radius;
  outline: none;
}

.btn {
  margin-bottom: -1px;
  position: relative;
  vertical-align: middle;
  height: 34px;
  min-width: 34px;
  padding: $padding $padding*2;
  color: $color-lilac;
  background-color: $color-white;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  background: none;
  box-shadow: none;
  appearance: none;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: color 0.2s, background-color 0.2s;

  &:hover,
  &--active {
    color: $color-white;
    background-color: $color-lilac;
  }

  &:active {
    color: $color-white;
    background-color: $bg-active-color;
  }

  &:first-of-type {
    margin-left: -1px;
  }

  &:not(:first-of-type) {
    border-right: 1px solid $color-lilac;
    border-left: 1px solid $color-lilac;
  }

    &:last-of-type {
    margin-right: -1px;
  }

}
</style>
