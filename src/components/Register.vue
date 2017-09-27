<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <form class="lime">
          <v-layout row wrap>
            <v-flex xs4 offset-sm1>
              <v-text-field
                  class="company"
                  v-model="form.company"
                  v-validate="'required'"
                  name="company"
                  label="Company Id"></v-text-field>
            </v-flex>
            <v-flex xs4 offset-sm1>
              <v-text-field
                  class="email"
                  v-model="form.company"
                  v-validate="'required'"
                  name="email"
                  label="Admin email"></v-text-field>
            </v-flex>
            <v-flex xs4 offset-sm1>
              <v-text-field
                  class="firstName"
                  v-model="form.firstName"
                  v-validate="'required'"
                  name="firstName"
                  label="First Name"></v-text-field>
            </v-flex>
            <v-flex xs4 offset-sm1>
              <v-text-field
                  class="lastName"
                  v-model="form.lastName"
                  v-validate="'required'"
                  name="lastName"
                  label="Last Name"></v-text-field>
            </v-flex>
            <v-flex xs4 offset-sm1>
              <v-text-field
                  class="userId"
                  v-model="form.userId"
                  v-validate="'required'"
                  name="userId" 
                  label="Employee Id"></v-text-field>
            </v-flex>
            <v-flex xs4 offset-sm1>
              <v-text-field
                  class="password"
                  v-model="form.password"
                  v-validate="'required'"
                  name="password" 
                  label="Password"
                  type="password"></v-text-field>
            </v-flex>
            <v-flex xs10 offset-sm6>
                <v-btn flat @click="goToLogin()">Login Here</v-btn>
                <v-btn primary :disabled="isNotFilled" @click="register(form)">Register</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { mapActions } from 'vuex'

Vue.use(VeeValidate)

export default {
  data () {
    return {
      form: {
        company: '',
        email: '',
        firstName: '',
        lastName: '',
        userId: '',
        password: '',
        position: 'Account Manager'
      },
      isNotFilled: true
    }
  },
  methods: {
    goToLogin () {
      this.$router.push({ name: 'Login' })
    },
    ...mapActions({
      register: 'register'
    })
  },
  watch: {
    form: {
      handler: function (val, oldVal) {
        this.$validator.validateAll()
        .then(result => {
          if (result) {
            this.$data.isNotFilled = false
          }
        })
        .catch(error => { console.log(error) })
      },
      deep: true
    }
  }
}
</script>
