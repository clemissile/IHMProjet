<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <h1>Les greves lol</h1>
        </v-row>
        <v-row justify="center" align="center" class="mx-5">
            <BarChart :chartdata="chartdata" :options="options" v-if="!$store.state.loading"/>
            <DonutChart :chartdata="chartdata" :options="options" v-if="!$store.state.loading"/>
            <MoonLoader v-else class="mt-12"/>
        </v-row>
    </v-container>
</template>

<script>
    import BarChart from '@/components/charts/BarChart.vue';
    import DonutChart from "@/components/charts/DonutChart.vue";
    import MoonLoader from 'vue-spinner/src/MoonLoader.vue';
    import randomColor from 'randomcolor';

    export default {
        name: "StatsGreves",
        data () {
            return {
                greves: [],
                chartdata: {
                    labels: [],
                    datasets: [
                        {
                            backgroundColor: "",
                            data: [],
                            label: ""
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                }
            }
        },
        components: {
            BarChart,
            DonutChart,
            MoonLoader
        },
        mounted:function(){
            this.voirGreves();
        },
        methods: {
            voirGreves: function () {
                if (this.greve.length != 0) {
                    this.chartdata.labels = ['2019', '2018', '2017'];
                    this.chartdata.datasets[0].data = [20, 32, 12];
                    this.chartdata.datasets[0].backgroundColor = "#000";
                    this.chartdata.datasets[0].label = "Journées perdues";
                    return ;
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