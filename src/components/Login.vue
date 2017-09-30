<template>
<v-app class="grey">
  <main>
  <v-container fluid fill-height>
    <v-flex xs6 offset-sm3>
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
          <form class="white">
            <v-layout row wrap>
              <v-flex xs10 offset-sm1>
                <v-text-field class="company" v-model="form.company" v-validate="'required'" name="company" label="Company Id"></v-text-field>
              </v-flex>
              <v-flex xs10 offset-sm1>
                <v-text-field class="userId" v-model="form.userId" v-validate="'required'" name="userId" label="Employee Id"></v-text-field>
              </v-flex>
              <v-flex xs10 offset-sm1>
                <v-text-field class="password" v-model="form.password" v-validate="'required'" name="password" label="Password" type="password"></v-text-field>
              </v-flex>
              <v-flex xs10 offset-sm3>
                <v-btn flat @click="goToRegister()">Register Here</v-btn>
                <v-btn class="red white--text" :disabled="isNotFilled" @click="login(form)">Login</v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
  </main>
</v-app>
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
        userId: '',
        password: ''
      },
      isNotFilled: true
    }
  },
  methods: {
    goToRegister () {
      this.$router.push({ name: 'Register' })
    },
    ...mapActions({
      login: 'login'
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
