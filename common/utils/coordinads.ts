import { lineString, bbox } from '@turf/turf'
import { AddressListItem } from 'services/static'

export interface Coordinates {
  latitude: number
  longitude: number
}

export const convertFromGoogleMaps = (coordinates: string): Coordinates => {
  const values = coordinates.split(', ')
  return {
    latitude: (values[0] && parseFloat(values[0])) || 0,
    longitude: (values[1] && parseFloat(values[1])) || 0,
  }
}

export const convertToBbox = (addresses: AddressListItem[]) => {
  const line = lineString(
    addresses.map((i) =>
      i.coordinates
        .split(', ')
        .map((i) => parseFloat(i))
        .reverse()
    )
  )
  return bbox(line)
}
