import type { LabelID } from '../enums'
import type LabelIconUrls from './LabelIconUrls'

interface Label {
  name: string
  id: LabelID
  iconUrls: LabelIconUrls
}

export default Label
