<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <h1>Top 3 des gares les plus fréquentées</h1>
        </v-row>
        <v-row justify="center" align="center" class="mx-5">
            <BarChart class="chart" :data="dataChart" :options="options" v-if="!$store.state.loadingGe"/>
            <MoonLoader v-else class="mt-12"/>
        </v-row>
    </v-container>
</template>

<script>
    import BarChart from '@/components/charts/BarChart.vue';
    import MoonLoader from 'vue-spinner/src/MoonLoader.vue';

    export default {
        name: "StatsGares",
        data () {
            return {
                gares: [],
                dataChart: {
                    labels: [],
                    dataName: "2018",
                    backgroundColor: "#5dc596",
                    data: []
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                }
            }
        },
        components: {
            BarChart,
            MoonLoader
        },
        mounted:function(){
            this.voirGares();
        },
        methods: {
            voirGares: function () {
                if (this.gare.length !== 0) {
                    let nomGares = [];
                    let donnees = [];
                    this.gare.forEach((item) => {
                        nomGares.push(item.fields.nom_gare);
                        donnees.push(item.fields.total_voyageurs_2018);
                    });
                    this.dataChart = {
                        labels: nomGares,
                        dataName: "2018",
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