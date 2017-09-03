<template>
  <div>
    <toolbar></toolbar>
    <main>
      <v-container fluid>
        <v-layout>
          <v-flex xs12 sm6>
            <v-card class="primary">
              <v-card-title primary-title>
                <div>
                  <h3 class="mb-0 white--text">Schedule</h3>
                </div>
              </v-card-title>
              <day
                v-for="d in days"
                :day="d"
                :key="d"></day>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </div>
</template>

<script>
import Day from './Day'
import Toolbar from '../ui/Toolbar'

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
    'day': Day,
    'toolbar': Toolbar
  }
}
</script>
