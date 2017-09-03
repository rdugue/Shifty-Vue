<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs8 offset-sm2>
        <v-card class="primary">
          <v-card-title primary-title>
            <div>
              <h3 class="mb-0 white--text">Schedule</h3>
            </div>
          </v-card-title>
          <v-container>
          <v-layout row wrap>
            <day
              v-for="d in days"
              :day="d"
              :key="d"></day>
          </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Day from './Day'

export default {
  data () {
    return {
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
    }
  },
  components: {
    'day': Day
  }
}
</script>
