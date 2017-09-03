<template>
  <v-app toolbar footer>
    <drawer v-if="drawer"></drawer>
    <toolbar ></toolbar>
    <main>
      <week></week>
    </main>
    <v-footer class="primary">
      <span class="white--text">© 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Drawer from '../ui/Drawer'
import Toolbar from '../ui/Toolbar'
import Week from './Week'
import { mapGetters } from 'vuex'

export default {
  components: {
    'drawer': Drawer,
    'toolbar': Toolbar,
    'week': Week
  },
  computed: mapGetters({
    drawer: 'drawerOpen'
  })
}
</script>
