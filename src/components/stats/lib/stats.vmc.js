import DonutChart from '@/components/charts/DonutChart.vue';
import MoonLoader from 'vue-spinner/src/MoonLoader.vue';
import randomColor from 'randomcolor';

export default {
    name: "Stats",
    data () {
        return {
            gares: [],
            chartdata: {
                labels: [],
                datasets: [
                    {
                        backgroundColor: [],
                        data: []
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    components: {
        DonutChart,
        MoonLoader
    },
    mounted:function(){
        this.fillData();
    },
    watch: {
        gares: function (newGares, oldGares) {
            this.fillData();
        }
    },
    methods: {
        fillData: function () {
            this.gare.forEach((item) => {
                if (item.fields.departement) {
                    if (this.chartdata.labels.indexOf(item.fields.departement) === -1) {
                        this.chartdata.labels.push(item.fields.departement);
                        this.chartdata.datasets[0].backgroundColor.push(randomColor());
                        this.chartdata.datasets[0].data.push(1);
                    } else {
                        let i = this.chartdata.labels.indexOf(item.fields.departement);
                        this.chartdata.datasets[0].data[i] += 1;
                    }
                }
            });
        }
    },
    computed: {
        gare() {
            return this.$store.state.gares;
        }
    }
}