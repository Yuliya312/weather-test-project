<template>
  <table class="table">
    <thead class="table__head">
      <tr class="table__head-row table__row">
        <th class="table__heading table__cell"
          scope="col"
          colspan ="2"
        >
          {{city.name}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="table__heading table__cell">Temperature</th>
        <td class="table__cell">{{weather.main.temp}} °C</td>
      </tr>
      <tr>
        <th class="table__heading table__cell">Atmospheric pressure</th>
        <td class="table__cell">{{weather.main.pressure}} hPa</td>
      </tr>
      <tr>
        <th class="table__heading table__cell">Humidity</th>
        <td class="table__cell">{{weather.main.humidity}} %</td>
      </tr>
      <tr>
        <th class="table__cell">Wind speed</th>
        <td class="table__cell">{{weather.wind.speed}} meter/sec</td>
      </tr>
      <tr>
        <th class="table__heading table__cell">Wind direction</th>
        <td class="table__cell">{{weather.wind.deg}} °</td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'WeatherData',
  props: {
    city: {
      default: function () {
        return {
          name: String,
          id: Number,
          isActive: true,
        }
      },
    },
    weather: {
      type: Object,
      default: function () {
        return {
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
      },
    }
  },
}

</script>

<style lang="scss">
  .table {
    width: 100%;
    max-width: 980px;
    margin: 20px auto;
    border-collapse: collapse;

    &__head-row{
      background-color: $color-gray;
      width: 100%;
    }

    &__heading {
      width: 60%;
    }

    &__cell {
      border-top: 1px solid $color-gray-border;
      padding: $padding $padding*2;
      vertical-align: middle;
      text-align: start;
    }
  };
</style>