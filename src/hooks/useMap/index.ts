import L from "leaflet";
import * as turf from "@turf/turf";
import "leaflet/dist/leaflet.css";
import {
  shallowRef,
  ref,
  type Ref,
  shallowReactive,
  type Component,
  type ComputedOptions,
  type MethodOptions,
  createVNode,
  render,
  reactive,
} from "vue";

export interface MapConfigsType {
  center: [number, number];
  tile: string;
  zoom: number;
  minZoom?: number;
  maxZoom?: number;
  zoomControl?: boolean;
  attributionControl?: boolean;
}
export interface AddGeoJsonConfigsType {
  name: string;
  geojson: any;
}

function useMap(element: Ref<HTMLElement | null>, configs: MapConfigsType) {
  const map = shallowRef<L.Map>();
  const tile = shallowRef<L.TileLayer>();
  const geoList = shallowReactive<Record<string, any>>({});
  const groupList = shallowReactive<Record<string, any>>({});
  const coordPicker = reactive({ lat: 0, lng: 0 });
  let container: HTMLDivElement;
  const initContainer = () => {
    const parent = element.value as HTMLElement;
    const cache = ["relative", "absolute", "fixed"];
    if (!cache.includes(parent.style.position)) {
      parent.style.position = "relative";
    }
    const container = document.createElement("div");
    container.className = "map-container";
    container.style.position = "relative";
    container.style.width = "100%";
    container.style.height = "100%";
    parent.appendChild(container);
    return container;
  };
  const initialize = () => {
    container = initContainer();
    map.value = L.map(container, configs);
    tile.value = L.tileLayer(configs.tile);
    tile.value.addTo(map.value);
    initCoordPicker();
  };
  const initCoordPicker = () => {
    map.value!.on("mousemove", (e: any) => {
      const { lat, lng } = e.latlng;
      coordPicker.lng = lng;
      coordPicker.lat = lat;
    });
  };
  const addGroup = (name: string) => {
    const group = L.layerGroup().addTo(map.value!);
    groupList[name] = {
      layer: group,
      visible: ref(true),
    };
    return groupList[name];
  };
  const getGroup = (name: string) => {
    if (groupList[name]) {
      return groupList[name];
    } else {
      return addGroup(name);
    }
  };
  const addGeoJson = (geojson: any, groupName?: string) => {
    const layer = L.geoJSON(geojson, {
      style: function (feature) {
        return feature.properties && feature.properties.style;
      },
    });
    const parent = groupName ? getGroup(groupName).layer : map.value;
    parent.addLayer(layer);
    return layer;
  };
  const addMarker = (
    componentMarkerProps: {
      component: Component<any, any, any, ComputedOptions, MethodOptions>;
      componentProps: Record<string, any>;
      coordinates: [number, number];
    },
    groupName?: string
  ) => {
    const { component, componentProps, coordinates } = componentMarkerProps;
    const instance = createVNode(component, componentProps);
    const template = document.createElement("template");
    render(instance, template);
    const html = instance.el as HTMLElement;
    const icon = L.divIcon({
      html: html,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const marker = L.marker(coordinates, { icon });
    const parent = groupName ? getGroup(groupName).layer : map.value;
    parent.addLayer(marker);
    return marker;
  };
  const flyto = (coordinates: [number, number], zoom?: number) => {
    map.value && map.value.flyTo(coordinates, zoom);
  };
  const fitBounds = (geojson: any) => {
    const [minX, minY, maxX, maxY] = turf.bbox(geojson);
    map.value!.fitBounds([
      [minY, minX],
      [maxY, maxX],
    ]);
  };
  return {
    map,
    tile,
    geoList,
    groupList,
    coordPicker,
    initialize,
    addGeoJson,
    addMarker,
    flyto,
    fitBounds,
  };
}

export default useMap;
