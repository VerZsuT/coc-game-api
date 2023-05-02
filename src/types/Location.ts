import type { LocationID } from '../enums'

interface Location {
  localizedName: string
  id: LocationID
  name: string
  isCountry: boolean
  countryCode?: string
}

export default Location
