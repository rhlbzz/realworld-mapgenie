<script>
import { defineComponent, onMounted, watch } from 'vue';
import "leaflet/dist/leaflet.css";
import { LMap, LPolyline, LTileLayer, LControlScale, LPolygon, LGeoJson } from "@vue-leaflet/vue-leaflet";

import { Tuscany } from '@/assets/data/tuscany';
import { Map } from '@/assets/data/map';
import { templateRef } from '@vueuse/core';


export default defineComponent({
  name: 'MapComponent',
  components: { 
    LControlScale,
    LMap,
    LPolyline,
    LPolygon,
    LTileLayer,
    LGeoJson
  },
  props: {
    //
  },
  setup () {
    const map = templateRef('map')
    const polygon = templateRef('polygon')
    

    return {
      Map,
      Tuscany
    }
  }
})
</script>

<template>
  <div class="map-wrapper">
    <LMap 
      ref="map"
      :zoom="Tuscany.zoom" 
      :min-zoom="Tuscany.zoom"
      :center="[Tuscany.lat,Tuscany.long]"
      :useGlobalLeaflet="Map.useGlobalLeaflet"
    >
      <LTileLayer
        :url="`${Map.url}/${Map.style}/${Map.pos}`"
        :layer-type="Map.layerType"
        :name="Map.name"
      ></LTileLayer>

      <LGeoJson :geojson="Tuscany.geoJSON" :options="Tuscany.geoJSONOpts"/>

    </LMap>
  </div>
</template>

<style lang="scss" scoped>
// 
.map-wrapper {
  width: 100vw;
  height: 100svh;
}
</style>