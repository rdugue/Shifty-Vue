<template>
    <v-flex xs4 sm4 offset-sm1>
      <v-card class="primary">
        <v-card-title primary-title>
          <div class="headline">{{ day }}</div>
        </v-card-title>
        <shift
        v-for="shift in shifts"
        v-if="shift.day === day && !swapScreen"
        :shift="shift"
        :key="shift.id"></shift>
        <shift
        v-for="swap in swaps"
        v-if="swap.day === day && swapScreen"
        :shift="swap"
        :swapScreen="swapScreen"
        :key="swap.id"></shift>
      </v-card>
    </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'
import Shift from '../ui/Shift'

export default {
  props: ['day', 'swapScreen'],
  computed: mapGetters({
    shifts: 'allShifts',
    swaps: 'allSwaps',
    user: 'loggedInUser'
  }),
  created () {
    this.$store.dispatch('getShifts', this.user.company)
  },
  components: {
    'shift': Shift
  }
}
</script>
