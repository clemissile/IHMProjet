<script>
    import { Doughnut } from 'vue-chartjs';

    export default {
        extends: Doughnut,
        props: ["data", "options"],
        mounted() {
            this.renderDonutChart();
        },
        computed: {
            chartData: function() {
                return this.data;
            }
        },
        methods: {
            renderDonutChart: function() {
                this.renderChart(
                    {
                        labels: this.chartData.labels,
                        datasets: [
                            {
                                label: this.chartData.dataName,
                                backgroundColor: this.chartData.backgroundColor,
                                data: this.chartData.data
                            }
                        ]
                    },
                    this.options
                );
            }
        },
        watch: {
            data: function() {
                if (this.$data._chart) {
                    this.$data._chart.destroy();
                }
                this.renderDonutChart();
            }
        }
    }
</script>

<style scoped>

</style>