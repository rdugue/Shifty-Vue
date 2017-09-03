<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div class="headline">{{ day }}</div>
        </v-card-title>
        <shift
        v-for="shift in shifts"
        v-if="shift.day === day"
        :shift="shift"
        :key="shift.id"></shift>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import Shift from '../ui/Shift'

export default {
  props: ['day'],
  computed: mapGetters({
    shifts: 'allShifts'
  }),
  data () {
    return {
      day: this.day
    }
  },
  created () {
    console.log(this.$store.getters.loggedInUser)
    this.$store.dispatch('getShifts', 'AbleSoft')
  },
  components: {
    'shift': Shift
  }
}
</script>
