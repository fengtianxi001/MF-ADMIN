import L, { DrawMap } from "leaflet";
import * as turf from "@turf/turf";
import "leaflet/dist/leaflet.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import { ref, shallowRef, type Ref } from "vue";

declare global {
  interface Window {
    type: boolean;
  }
  interface L {
    drawLocal: any;
    Draw: any;
  }
}
window.type = true;
//@ts-ignore
L.drawLocal = {
  draw: {
    handlers: {
      marker: {
        tooltip: {
          start: "点击地图放置一个标记",
        },
      },
      rectangle: {
        tooltip: {
          start: "按下鼠标并拖拽，生成矩形选区",
        },
      },
      simpleshape: {
        tooltip: {
          end: "松开鼠标后完成绘制",
        },
      },
    },
  },
};

function useMap(element: Ref<HTMLElement | null>) {
  const map = shallowRef<DrawMap>();
  const tile = shallowRef<L.TileLayer>();
  const center = ref<[number, number]>([26.09, 119.17]);
  const layer = shallowRef<L.Layer>();
  let control: L.Draw.Rectangle;

  const initialize = () => {
    map.value = L.map(element.value!, {
      center: center.value,
      zoom: 13,
      zoomControl: false,
      attributionControl: false,
    });
    control = new L.Draw.Rectangle(map.value);
    tile.value = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png");
    tile.value.addTo(map.value);
    // navigator.geolocation.getCurrentPosition((position) => {
    //   if (position.coords) {
    //     const { latitude, longitude } = position.coords;
    //     center.value = [latitude, longitude];
    //     map.value?.setView(center.value, 13);
    //   }
    // });
  };

  const addGeoJson = (geojson: any) => {
    layer.value = L.geoJSON(geojson);
    map.value?.addLayer(layer.value);
    const [minX, minY, maxX, maxY] = turf.bbox(geojson);
    map.value?.fitBounds([
      [minY, minX],
      [maxY, maxX],
    ]);
    return layer.value;
  };

  const drawLayer = () => {
    control.enable();
    layer.value?.remove();
    return new Promise((resolve) => {
      map.value?.on(L.Draw.Event.CREATED, (e: any) => {
        // const layer = e.layer;
        map.value?.addLayer(e.layer);
        const geojson = e.layer.toGeoJSON();
        layer.value = e.layer;
        control.disable();
        resolve(geojson);
        map.value?.off(L.Draw.Event.CREATED);
      });
    });
  };
  const emptyLayer = () => {
    layer.value?.remove();
  };

  return {
    initialize,
    addGeoJson,
    drawLayer,
    emptyLayer,
  };
}

export default useMap;
