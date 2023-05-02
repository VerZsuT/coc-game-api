import type { LocationID } from '../enums'
import type GetListOptions from './GetListOptions'
import type Location from './Location'
import type LocationExt from './LocationExt'
import type LocationsRawAPI from './LocationsRawAPI'

interface LocationsAPI {
  /** Raw requests */
  raw: LocationsRawAPI
  /** List locations */
  getList(options?: GetListOptions): Promise<LocationExt<Location>[]>
  /** Get location object */
  getByID(locationID: LocationID): LocationExt<{ id: LocationID }>
}

export default LocationsAPI
