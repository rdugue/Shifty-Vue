<template>
    <v-flex xs4 sm4 offset-sm1>
      <v-card class="deep-purple">
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
</template>

<script>
import { mapGetters } from 'vuex'
import Shift from '../ui/Shift'

export default {
  props: ['day'],
  computed: mapGetters({
    shifts: 'allShifts'
  }),
  created () {
    console.log(this.$store.state.user)
    this.$store.dispatch('getShifts', 'AbleSoft')
  },
  components: {
    'shift': Shift
  }
}
</script>
