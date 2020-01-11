<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <h1>Statistiques sur les grèves depuis 1994</h1>
        </v-row>
        <v-row justify="center" align="center" class="mx-5">
            <HorizontalBarChart :data="dataChart" :options="options" :height ="600" :width ="1000" v-if="!$store.state.loading"/>
            <MoonLoader v-else class="mt-12"/>
        </v-row>
        <v-row align="center" class="mx-5 mt-2">
            <div>
                <h3>Analyse</h3>
                <p>
                    Le graphique ci-dessus permet de distinguer quasiment immédiatemment les grands mouvements de grèves qu'a connu la France depuis 1994. Le pic
                    de journées perdues est atteint en 1995, ce qui correspond aux protestations contre le plan Juppé sur les retraites et la Sécurité sociale.
                </p>
                <p>
                    Le deuxième pic que l'on constate en 2018 correspond quand à lui à la contestation contre la réforme de la SNCF proposé au primtemps par
                    Emmanuel Macron et son gouvernement.
                </p>
            </div>
        </v-row>
    </v-container>
</template>

<script>
    import HorizontalBarChart from '@/components/charts/HorizontalBarChart.vue';
    import MoonLoader from 'vue-spinner/src/MoonLoader.vue';

    export default {
        name: "StatsGreves",
        data () {
            return {
                greves: [],
                dataChart: {
                    labels: [],
                    dataName: "Journées perdues",
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
            HorizontalBarChart,
            MoonLoader
        },
        mounted:function(){
            this.voirGreves();
        },
        methods: {
            voirGreves: function () {
                if (this.greve.length !== 0) {
                    let dates = [];
                    let donnees = [];
                    this.greve.forEach((item) => {
                        if (item.fields.date) {
                            if (dates.indexOf(item.fields.date.substring(0, 4)) === -1) {
                                dates.push(item.fields.date.substring(0, 4));
                                donnees.push(item.fields.journees_perdues);
                            } else {
                                donnees[dates.indexOf(item.fields.date.substring(0, 4))] += item.fields.journees_perdues;
                            }

                        }
                    });
                    this.dataChart = {
                        labels: dates,
                        dataName: "Journées perdues",
                        backgroundColor: "#5dc596",
                        data: donnees
                    }
                }
            }
        },
        computed: {
            greve() {
                return this.$store.state.greves;
            }
        }
    }
</script>

<style scoped>

</style>