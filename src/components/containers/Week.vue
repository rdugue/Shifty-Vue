<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs8 offset-sm2>
        <v-card class="red">
          <v-card-title primary-title>
            <v-layout>
              <v-flex xs8>
            <div>
              <h3 class="mb-0 white--text" v-if="!swapScreen">Schedule</h3>
              <h3 class="mb-0 white--text" v-if="swapScreen">Swap Board</h3>
            </div>
              </v-flex>
              <v-flex xs2 offset-sm3>
            <v-btn outline fab class="white white--text ml-5" @click="swapScreen = !swapScreen">
              <v-icon>swap_horiz</v-icon>
            </v-btn>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-container>
            <v-layout row wrap>
              <day v-for="d in days" :day="d" :swapScreen="swapScreen" :key="d"></day>
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
      swapScreen: false,
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
