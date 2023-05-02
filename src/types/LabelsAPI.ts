import type GetListOptions from './GetListOptions'
import type Label from './Label'

interface LabelsAPI {
  /** List player labels */
  getPlayerLabels(options?: GetListOptions): Promise<Label[]>
  /** List clan labels */
  getClanLabels(options?: GetListOptions): Promise<Label[]>
}

export default LabelsAPI
