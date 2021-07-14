import React, { useEffect, useRef, useState } from 'react'
import s from './MapView.module.css'
import MapGL, { NavigationControl, WebMercatorViewport } from 'react-map-gl'
import { MapSettings } from 'pages/contacts'
import { addressesTest } from '../../testData'
import Pin from './components/Pin/Pin'
import { convertFromGoogleMaps, convertToBbox } from 'common/utils/coordinads'

interface MapViewProps {
  mapSettings: MapSettings
}

const MapView: React.FC<MapViewProps> = ({ mapSettings }) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 0,
    bearing: 0,
    pitch: 0,
  })

  useEffect(() => {
    const initMapPosition = () => {
      if (rootRef.current) {
        const [minLng, minLat, maxLng, maxLat] = convertToBbox(addressesTest)

        const vp = new WebMercatorViewport({
          width: rootRef.current.offsetWidth,
          height: rootRef.current.offsetHeight,
        })
        const { longitude, latitude, zoom } = vp.fitBounds(
          [
            [minLng, minLat],
            [maxLng, maxLat],
          ],
          {
            padding: 32,
          }
        )
        setViewport({
          latitude: latitude,
          longitude: longitude,
          zoom: zoom > 0.5 ? zoom - 0.5 : zoom,
          bearing: 0,
          pitch: 0,
        })
      }
    }
    initMapPosition()
    window.addEventListener('resize', initMapPosition)
    return () => window.removeEventListener('resize', initMapPosition)
  }, [rootRef])

  return (
    <div className={s.root} ref={rootRef}>
      <MapGL
        {...viewport}
        width='100%'
        height='100%'
        mapStyle={mapSettings.style}
        onViewportChange={setViewport}
        mapboxApiAccessToken={mapSettings.token}
        scrollZoom={false}
      >
        {addressesTest.map((i) => (
          <Pin
            key={i.id}
            latitude={convertFromGoogleMaps(i.coordinates).latitude}
            longitude={convertFromGoogleMaps(i.coordinates).longitude}
          />
        ))}
        <NavigationControl className={s.mapBar} />
      </MapGL>
    </div>
  )
}

export default MapView
