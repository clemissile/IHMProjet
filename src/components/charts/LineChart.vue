<script>
    import { Line } from 'vue-chartjs';

    export default {
        extends: Line,
        props: ["data", "options"],
        mounted() {
            this.renderLineChart();
        },
        computed: {
            chartData: function() {
                return this.data;
            }
        },
        methods: {
            renderLineChart: function() {
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
                this.renderLineChart();
            }
        }
    }
</script>

<style scoped>

</style>