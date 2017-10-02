<template>
  <v-app toolbar dark>
    <v-navigation-drawer 
      persistent 
      v-model="drawer" 
      :mini-variant="mini" 
      dark 
      overflow 
      absolute>
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Ralph Dugue</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-tile 
          v-for="item in items" 
          :key="item.title" 
          @click="navigate(item)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="red">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Shifty</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="logOut()">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <main class="grey">
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Dashboard', icon: 'dashboard' },
        { title: 'Full Schedule', icon: 'date_range' },
        { title: 'My Schedule', icon: 'event' },
        { title: 'Swap Board', icon: 'swap_horiz' },
        { title: 'Employees', icon: 'people' },
        { title: 'Make Schedule', icon: 'create' },
        { title: 'Swap Requests', icon: 'check_circle' },
        { title: 'Settings', icon: 'settings' }
      ],
      mini: false,
      right: null
    }
  },
  methods: {
    navigate (item) {
      //
    }
  }
}
</script>
