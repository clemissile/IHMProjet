<script>
    import { Bar } from 'vue-chartjs';

    export default {
        extends: Bar,
        props: ["data", "options"],
        mounted() {
            this.renderBarChart();
        },
        computed: {
            chartData: function() {
                return this.data;
            }
        },
        methods: {
            renderBarChart: function() {
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
                this.renderBarChart();
            }
        }
    }
</script>

<style scoped>

</style>