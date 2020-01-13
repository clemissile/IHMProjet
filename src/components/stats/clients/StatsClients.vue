<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <h1>Statistiques sur les clients</h1>
        </v-row>
        <v-row justify="center" align="center" class="mx-5">
            <PieChart :data="dataChart" :options="options" :height ="600" :width ="1000" v-if="!$store.state.loadingCl"/>
            <MoonLoader v-else class="mt-12"/>
        </v-row>
    </v-container>
</template>

<script>
    import PieChart from '@/components/charts/PieChart.vue';
    import MoonLoader from 'vue-spinner/src/MoonLoader.vue';
    import randomColor from 'randomcolor/randomColor.js';

    export default {
        name: "StatsClients",
        data () {
            return {
                clients: [],
                dataChart: {
                    labels: [],
                    dataName: "",
                    backgroundColor: "",
                    data: []
                },
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
            this.voirClients();
        },
        methods: {
            voirClients: function () {
                if (this.client.length !== 0) {
                    let motifs = [];
                    let res = [];
                    this.client.forEach((item) => {
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

                    this.dataChart = {
                        labels: motifs,
                        dataName: "Données clients",
                        backgroundColor: [randomColor(), randomColor(), randomColor(), randomColor(), randomColor()],
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

</style>