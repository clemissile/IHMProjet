<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <h1>Statistiques sur les clients de la SNCF (2010-2017)</h1>
        </v-row>
        <v-row justify="center" align="center" class="mx-5">
            <h3>Raisons de déplacement des clients</h3>
            <PieChart class="chart" :data="dataChartRais" :options="options" v-if="!$store.state.loadingCl"/>
            <h3 class="mt-5">Répartition de l'âge des clients</h3>
            <PieChart class="chart" :data="dataChartAge" :options="options" v-if="!$store.state.loadingCl"/>
            <h3 class="mt-5">Répartition de la catégorie socio-professionnelle des clients</h3>
            <PieChart class="chart" :data="dataChartTaff" :options="options" v-if="!$store.state.loadingCl"/>
            <MoonLoader v-else class="mt-12"/>
        </v-row>
    </v-container>
</template>

<script>
    import PieChart from '@/components/charts/PieChart.vue';
    import MoonLoader from 'vue-spinner/src/MoonLoader.vue';

    export default {
        name: "StatsClients",
        data () {
            return {
                clients: [],
                dataChartRais: { labels: [], dataName: "", backgroundColor: "", data: [] },
                dataChartAge: { labels: [], dataName: "", backgroundColor: "", data: [] },
                dataChartTaff: { labels: [], dataName: "", backgroundColor: "", data: [] },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                }
            }
        },
        components: {
            PieChart,
            MoonLoader
        },
        mounted:function(){
            this.voirDeplClients();
            this.voirAgeClients();
            this.voirTaffClients();
        },
        methods: {
            voirDeplClients: function () {
                if (this.client["raisons-deplacement"].length !== 0) {
                    let motifs = [];
                    let res = [];
                    this.client["raisons-deplacement"].forEach((item) => {
                        if (item.fields.motif_du_deplacement) {
                            if (motifs.indexOf(item.fields.motif_du_deplacement) === -1) {
                                motifs.push(item.fields.motif_du_deplacement);
                                res.push(item.fields.pourcentage);
                            } else {
                                res[motifs.indexOf(item.fields.motif_du_deplacement)] += item.fields.pourcentage;
                            }
                        }
                    });

                    for (let i = 0; i < res.length; i++) {
                        if (motifs[i] === "Démarches administratives, médicales ou achat") {
                            res[i] = Math.floor(res[i]/49);
                        } else {
                            res[i] = Math.floor(res[i]/55);
                        }
                    }

                    this.dataChartRais = {
                        labels: motifs,
                        dataName: "Données clients",
                        backgroundColor: ['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c'],
                        data: res
                    }
                }
            },
            voirAgeClients: function () {
                if (this.client["age-clients"].length !== 0) {
                    let age = [];
                    let res = [];
                    this.client["age-clients"].forEach((item) => {
                        if (item.fields.classe_d_age) {
                            if (age.indexOf(item.fields.classe_d_age) === -1) {
                                age.push(item.fields.classe_d_age);
                                res.push(item.fields.pourcentage);
                            } else {
                                res[age.indexOf(item.fields.classe_d_age)] += item.fields.pourcentage;
                            }
                        }
                    });

                    for (let i = 0; i < res.length; i++) {
                        if (age[i] === "Non communiqué") {
                            res[i] = Math.floor(res[i]/17);
                        } else {
                            res[i] = Math.floor(res[i]/59);
                        }
                    }

                    this.dataChartAge = {
                        labels: age,
                        dataName: "Données clients",
                        backgroundColor: ['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c','#FFE863','#856C5B'],
                        data: res
                    }
                }
            },
            voirTaffClients: function () {
                if (this.client["taff-clients"].length !== 0) {
                    let taff = [];
                    let res = [];
                    this.client["taff-clients"].forEach((item) => {
                        if (item.fields.csp) {
                            if (taff.indexOf(item.fields.csp) === -1) {
                                taff.push(item.fields.csp);
                                res.push(item.fields.pourcentage);
                            } else {
                                res[taff.indexOf(item.fields.csp)] += item.fields.pourcentage;
                            }
                        }
                    });

                    for (let i = 0; i < res.length; i++) {
                        if (taff[i] === "Non communiqué") {
                            res[i] = Math.floor(res[i]/21);
                        } else {
                            res[i] = Math.floor(res[i]/59);
                        }
                    }

                    this.dataChartTaff = {
                        labels: taff,
                        dataName: "Données clients",
                        backgroundColor: ['#377eb8','#ff7f00','#03A696','#984ea3','#e41a1c','#FFE863','#856C5B','#025159','#F25D27','#038C73','#D9A79C','#4daf4a','#F2CB05'],
                        data: res
                    }
                }
            }
        },
        computed: {
            client() {
                return this.$store.state.clients;
            }
        }
    }
</script>

<style scoped>
    .chart {
        width: 100%;
    }
</style>