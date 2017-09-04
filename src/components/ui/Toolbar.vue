<template>
  <v-toolbar dark class="primary">
    <v-toolbar-side-icon @click="toggleDrawer()"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Shifty</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="logOut()">
      <v-icon>exit_to_app</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapMutations } from 'vuex'
import router from '../../router'

export default {
  methods: {
    logOut: () => {
      window.localStorage.clear()
      router.push('/login')
    },
    ...mapMutations({
      toggleDrawer: 'toggle'
    })
  }
}
</script>

