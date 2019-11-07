<template>
  <v-app>
    <!--<v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>IHM</span>
        <span class="font-weight-light">Projet</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/" class="px-2">Home</router-link>
      <router-link to="/carte" class="px-2">Carte</router-link>
      <router-link to="/stats" class="px-2">Statistiques</router-link>
    </v-app-bar>-->

    <v-navigation-drawer
            absolute
            permanent
            left
    >
      <v-list-item two-line>
        <v-list-item-avatar style="background-color: #5dc596;">
          <v-icon style="color: #ffffff;">mdi-train</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            <span>IHM</span>
            <span class="font-weight-light">Projet</span>
          </v-list-item-title>
          <v-list-item-subtitle>SNCF API</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.link"
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

    <v-content style="margin-left: 256px;">
      <router-view/>
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
  },
  data () {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home', link: '/' },
        { title: 'Carte', icon: 'mdi-map-search', link: '/carte' },
        { title: 'Statistiques', icon: 'mdi-database', link: '/stats' },
      ],
    }
  },
};
</script>

<style scoped>
  a {
    font-family: 'Alegreya Sans', sans-serif;
    text-decoration: none;
    color: #005085;
  }

  a:hover {
    color: #5dc596;
  }
</style>
