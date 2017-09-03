<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="lime">
        <v-card-title>
          <div>
            <span>{{ shift.role }}</span><br>
            <span class="white--text">{{ shift.start_time }} to {{ shift.end_time }}</span><br>
            <span>{{ shift.employee }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>create</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>swap_horiz</v-icon>
          </v-btn>
          <v-btn icon @click="deleteShift(shift.id)">
            <v-icon>delete_forever</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['shift'],
  methods: {
    ...mapActions({
      deleteShift: 'deleteShift'
    })
  }
}
</script>
