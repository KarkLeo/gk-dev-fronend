import Icon from 'components/Icon'
import React from 'react'
import { Marker } from 'react-map-gl'
import s from './Pin.module.css'
import classNames from 'classnames'

interface PinProps {
  longitude: number
  latitude: number
  active?: boolean
}

const Pin: React.FC<PinProps> = ({ latitude, longitude, active }) => {
  return (
    <Marker longitude={longitude} latitude={latitude}>
      <Icon
        iconId='location_filled'
        className={classNames(s.pin, { [s.pin_active]: active })}
      />
    </Marker>
  )
}

export default Pin
