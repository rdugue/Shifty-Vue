<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title>
          <div>
            <span>{{ shift.role }}</span><br>
            <span class="grey--text">{{ shift.start_time }} to {{ shift.end_time }}</span><br>
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
          <v-btn icon>
            <v-icon>clear</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['shift']
}
</script>
