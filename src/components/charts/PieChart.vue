<script>
    import { Pie } from 'vue-chartjs';

    export default {
        extends: Pie,
        props: ["data", "options"],
        mounted() {
            this.renderPieChart();
        },
        computed: {
            chartData: function() {
                return this.data;
            }
        },
        methods: {
            renderPieChart: function() {
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
                this.renderPieChart();
            }
        }
    }
</script>

<style scoped>

</style>