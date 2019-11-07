import Map from '@/components/map/Map.vue';
import MoonLoader from 'vue-spinner/src/MoonLoader.vue';

export default {
    name: "Carte",
    data () {
        return {
            gares: []
        }
    },
    components: {
        Map,
        MoonLoader
    },
    mounted:function(){
        this.voirGares();
    },
    methods: {
        voirGares: function () {
            if (this.gare.length != 0) {
                return ;
            }
        }
    },
    computed: {
        gare() {
            return this.$store.state.gares;
        }
    }
}