<template>
  <v-app toolbar footer class="white" dark>
    <drawer v-if="drawer"></drawer>
    <toolbar class="red"></toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-footer class="red">
      <span class="white--text">© 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Drawer from '../ui/Drawer'
import Toolbar from '../ui/Toolbar'
import { mapGetters } from 'vuex'

export default {
  components: {
    'drawer': Drawer,
    'toolbar': Toolbar
  },
  computed: mapGetters({
    drawer: 'drawerOpen'
  })
}
</script>
