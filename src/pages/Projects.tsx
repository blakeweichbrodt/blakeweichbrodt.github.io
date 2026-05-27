// pages/Projects.tsx
import {Map} from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css'; // See notes below

export default function Projects() {
  return (
    <div className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-black px-6">
      <Map
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        style={{width: 1000, height: 600}}
        mapStyle="https://demotiles.maplibre.org/style.json"
      />
    </div>
  );
}
