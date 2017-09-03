<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-card-text>
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field 
                                    v-model="form.company"
                                    v-bind:rules="rules.company"
                                    v-validate="'required'"
                                    name="company" 
                                    label="Company Id" 
                                    single-line></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field
                                    v-model="form.userId"
                                    v-bind:rules="rules.userId"
                                    v-validate="'required'"
                                    name="userId" 
                                    label="Employee Id" 
                                    single-line></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field
                                    v-model="form.password"
                                    v-bind:rules="rules.company"
                                    v-validate="'required'"
                                    name="password" 
                                    label="Password"
                                    type="password"
                                    single-line></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-btn flat>Register Here</v-btn>
                    <v-btn primary :disabled="isNotFilled" @click="login(form)">Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
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
      isNotFilled: true,
      rules: {
        company: [],
        userId: [],
        password: []
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'get'
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
