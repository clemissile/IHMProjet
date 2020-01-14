<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <h1>Statistiques sur les gares</h1>
        </v-row>
        <v-row justify="center" align="center" class="mx-5">
            <h3>Top 3 des gares les plus fréquentées</h3>
            <BarChart class="chart" :data="dataChartFreq" :options="options" v-if="!$store.state.loadingGaSt"/>
            <h3 class="mt-5">Chiffre d'affaires de gares en octobre 2015 (en €)</h3>
            <LineChart class="chart" :data="dataChartFin" :options="options" v-if="!$store.state.loadingGaSt"/>
            <MoonLoader v-else class="mt-12"/>
        </v-row>
    </v-container>
</template>

<script>
    import BarChart from '@/components/charts/BarChart.vue';
    import LineChart from "@/components/charts/LineChart.vue";
    import MoonLoader from 'vue-spinner/src/MoonLoader.vue';

    export default {
        name: "StatsGares",
        data () {
            return {
                gares: [],
                dataChartFreq: { labels: [], dataName: "2018", backgroundColor: "#5dc596", data: [] },
                dataChartFin: { labels: [], dataName: "", backgroundColor: "", data: [] },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                }
            }
        },
        components: {
            BarChart,
            LineChart,
            MoonLoader
        },
        mounted:function(){
            this.voirGaresFreq();
            this.voirGaresFin();
        },
        methods: {
            voirGaresFreq: function () {
                if (this.gare["top-freq"].length !== 0) {
                    let nomGares = [];
                    let donnees = [];
                    this.gare["top-freq"].forEach((item) => {
                        nomGares.push(item.fields.nom_gare);
                        donnees.push(item.fields.total_voyageurs_2018);
                    });
                    this.dataChartFreq = {
                        labels: nomGares,
                        dataName: "2018",
                        backgroundColor: "#5dc596",
                        data: donnees
                    }
                }
            },
            voirGaresFin: function () {
                if (this.gare["res-finances"].length !== 0) {
                    let nomGares = [];
                    let donnees = [];
                    this.gare["res-finances"].forEach((item) => {
                        nomGares.push(item.fields.gare);
                        donnees.push(item.fields.chiffre_d_affaires);
                    });
                    this.dataChartFin = {
                        labels: nomGares,
                        dataName: "Chiffre d'affaires en 2015",
                        backgroundColor: "#5dc596",
                        data: donnees
                    }
                }
            }
        },
        computed: {
            gare() {
                return this.$store.state.garesStats;
            }
        }
    }
</script>

<style scoped>
    .chart {
        width: 100%;
    }
</style>