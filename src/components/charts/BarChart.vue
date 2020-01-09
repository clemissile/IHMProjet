<script>
    import { Bar } from 'vue-chartjs';

    export default {
        extends: Bar,
        props: ["chartdata", "options"],
        mounted() {
            this.renderBarChart();
        },
        computed: {
            chartData: function() {
                return this.chartdata;
            }
        },
        methods: {
            renderBarChart: function() {
                this.renderChart(
                    {
                        labels: this.chartData.labels,
                        datasets: [
                            {
                                label: this.chartData.datasets[0].label,
                                backgroundColor: this.chartData.datasets[0].backgroundColor,
                                data: this.chartData.datasets[0].data
                            }
                        ]
                    },
                    this.options
                );
            }
        },
        watch: {
            chartdata: function() {
                console.log("data changed");
                this._chart.destroy();
                //this.renderChart(this.chartdata, this.options);
                this.renderBarChart();
            }
        }
    }
</script>

<style scoped>

</style>