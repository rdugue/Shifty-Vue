<template>
  <v-container>
    <v-layout row v-if="editMode">
      <v-flex xs12 offset-sm3>
        <v-form class="deep-purple">
          <v-dialog persistent v-model="modal1" lazy>
            <v-text-field slot="activator" label="Start" v-model="shift.start_time" readonly v-validate="'required'"></v-text-field>
            <v-time-picker v-model="shift.start_time" actions>
              <template scope="{ save, cancel }">
                <v-card-actions>
                  <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                  <v-btn flat primary @click.native="save()">Save</v-btn>
                </v-card-actions>
              </template>
            </v-time-picker>
          </v-dialog>
          <v-dialog persistent v-model="modal2" lazy>
            <v-text-field slot="activator" label="End" v-model="shift.end_time" readonly v-validate="'required'"></v-text-field>
            <v-time-picker v-model="shift.end_time" actions>
              <template scope="{ save, cancel }">
                <v-card-actions>
                  <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                  <v-btn flat primary @click.native="save()">Save</v-btn>
                </v-card-actions>
              </template>
            </v-time-picker>
          </v-dialog>
          <v-flex xs10 offset-sm1>
            <v-text-field label="Employee" v-model="shift.employee" v-validate="'required'"></v-text-field>
          </v-flex>
          <v-flex xs10 offset-sm1>
            <v-text-field label="Role" v-model="shift.role" v-validate="'required'"></v-text-field>
          </v-flex>
          <v-flex xs10 offset-sm1>
            <v-select label="Day" v-model="day_local" :items="days" v-validate="'required'"></v-select>
          </v-flex>
          <v-btn @click="toggleEdit()">update</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout row v-if="!editMode">
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="deep-purple">
          <v-card-title>
            <div>
              <span>{{ shift.role }}</span><br>
              <span class="white--text">{{ shift.start_time }} to {{ shift.end_time }}</span><br>
              <span>{{ shift.employee }}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="toggleEdit()">
              <v-icon>create</v-icon>
            </v-btn>
            <v-btn icon @click="makeSwapable()" v-if="!swapScreen">
              <v-icon>swap_horiz</v-icon>
            </v-btn>
            <v-btn icon @click="takeShift()" v-if="swapScreen">
              <v-icon>note_add</v-icon>
            </v-btn>
            <v-btn icon @click="deleteShift(shift.id)">
              <v-icon>delete_forever</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default {
  props: ['shift', 'swapScreen'],
  computed: mapGetters({
    user: 'loggedInUser'
  }),
  methods: {
    toggleEdit () {
      if (this.$data.editMode) {
        this.$validator.validateAll()
        .then(result => {
          if (result) {
            this.shift.day = this.$data.day_local
            if (this.swapScreen) {
              this.shift.tradeable = false
            }
            this.$store.dispatch('updateShift', this.shift)
          } else {
            this.$data.editMode = false
          }
        })
      }
      this.$data.editMode = !this.$data.editMode
    },
    takeShift () {
      this.shift.tradeable = false
      this.shift.employee = `${this.user.first_name} ${this.user.last_name}`
      this.$store.dispatch('updateShift', this.shift)
    },
    makeSwapable () {
      this.shift.tradeable = true
      this.$store.dispatch('updateShift', this.shift)
    },
    ...mapActions({
      deleteShift: 'deleteShift'
    })
  },
  data () {
    return {
      editMode: false,
      modal1: false,
      modal2: false,
      day_local: this.shift.day,
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
  }
}
</script>
