<template>
  <v-app>
    <v-navigation-drawer
            app
            :mini-variant.sync="mini"
            absolute
            permanent
            left
    >
      <v-list-item>
        <v-list-item-avatar style="background-color: #5dc596;">
          <v-icon style="color: #ffffff;">mdi-train</v-icon>
        </v-list-item-avatar>

        <v-list-item-title>
          <span>IHM</span>
          <span class="font-weight-light">Projet</span>
        </v-list-item-title>

        <v-btn
                icon
                @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.link"
                link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  mounted() {
    this.$store.dispatch("loadAPI", {dataset: 'liste-des-gares'});
    if (window.innerWidth < 800) {
      this.mini = true
    }
  },
  data () {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home', link: '/' },
        { title: 'Carte', icon: 'mdi-map-search', link: '/carte' },
        { title: 'Statistiques', icon: 'mdi-database', link: '/stats' },
      ],
      mini: false,
    }
  }
};
</script>

<style>
  nav, .container {
    font-family: "Alegreya Sans", sans-serif;
  }

  a {
    font-family: 'Alegreya Sans', sans-serif;
    text-decoration: none;
    color: #005085;
  }

  a:hover {
    color: #5dc596;
  }
</style>
