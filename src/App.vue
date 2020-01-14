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
        <!-- Page d'accueil -->
        <v-list-item to="/" link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Page des cartes -->
        <v-list-item to="/carte" link>
          <v-list-item-icon>
            <v-icon>mdi-map-search</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Cartes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Page des statistiques -->
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>mdi-database</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Statistiques</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item to="/stats-greves">
            <v-list-item-content>
              <v-list-item-title>Grèves</v-list-item-title>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>mdi-worker</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-list-item to="/stats-clients">
            <v-list-item-content>
              <v-list-item-title>Clients</v-list-item-title>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-list-item to="/stats-gares">
            <v-list-item-content>
              <v-list-item-title>Gares</v-list-item-title>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>mdi-train-variant</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
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
    this.$store.dispatch("loadAPIGares", {dataset: 'liste-des-gares'});
    this.$store.dispatch("loadAPIGreves", {dataset: 'mouvements-sociaux-depuis-1994'});
    this.$store.dispatch("loadAPIClients", {
      dataset1: 'repartition-des-motifs-de-deplacements-des-voyageurs-et-non-voyageurs-enquetes-e',
      dataset2: 'enquetes-gares-connexions-repartition-repartition-par-classe-dage',
      dataset3: 'enquetes-gares-connexions-repartition-par-repartition-par-categories-socio-profe'
    });
    this.$store.dispatch("loadAPIGaresStats", {
      dataset1: 'frequentation-gares',
      dataset2: 'comptes-resultats-gares'
    });
    if (window.innerWidth < 800) {
      this.mini = true
    }
  },
  data () {
    return {
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
