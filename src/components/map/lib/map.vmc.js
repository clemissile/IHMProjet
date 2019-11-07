import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';
//import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

let trainIcon = L.divIcon({
    html: "<span class=\"mdi mdi-map-marker-radius mdi-24px\"></span>",
    className: 'mapIcon',
    iconSize:     [24, 24], // size of the icon

});

export default {
    name: "Map",
    data () {
        return {
            map: null
        };
    },
    mounted() {
        this.map = L.map('map', {});
        this.map.setView([46.8, 3.09],6);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20,
            minZoom: 6
        }).addTo(this.map);
        this.setIcons();
    },
    watch: {
        "gares": function (newGares, oldGares) {
            this.setIcons();
        }
    },
    methods: {
      setIcons: function () {
          let markers = L.markerClusterGroup({
              //spiderLegPolylineOptions:  {weight: 1.5, color: '#5dc596', opacity: 0.5}
              iconCreateFunction: function (cluster) {
                  // get the number of items in the cluster
                  var count = cluster.getChildCount();

                  // figure out how many digits long the number is
                  var digits = (count + '').length;

                  // Return a new L.DivIcon with our classes so we can
                  // style them with CSS. Take a look at the CSS in
                  // the <head> to see these styles. You have to set
                  // iconSize to null if you want to use CSS to set the
                  // width and height.
                  return L.divIcon({
                      html: count,
                      className: 'cluster digits-' + digits,
                      iconSize: null
                  })
              },
          });
          this.gares.forEach((item) => {
              if (item.fields.c_geo) {
                  markers.addLayer(L.marker(item.fields.c_geo, {icon: trainIcon}).bindPopup(item.fields.libelle));
              }
          });
          markers.addTo(this.map);
      }
    },
    props: {
        gares: {
            type: Array,
            default: function () {
                return []
            }
        }
    }
}