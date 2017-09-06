<template>
  <v-app toolbar footer>
    <drawer v-if="drawer"></drawer>
    <toolbar ></toolbar>
    <main>
      <shift-form class="mb-0 pb-0"></shift-form>
      <week class="pt-0 mt-0"></week>
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
import ShiftForm from '../ui/ShiftForm'
import { mapGetters } from 'vuex'

export default {
  components: {
    'drawer': Drawer,
    'toolbar': Toolbar,
    'week': Week,
    'shift-form': ShiftForm
  },
  computed: mapGetters({
    drawer: 'drawerOpen'
  })
}
</script>
