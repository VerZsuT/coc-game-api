import type LocationAPI from './LocationAPI'

type LocationExt<T extends object = {}> = T & LocationAPI

export default LocationExt
